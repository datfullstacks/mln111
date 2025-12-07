'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { regions, type RegionKey } from '@/lib/data';
import { svgViewerMarkup } from './mapMarkup';

type WrapperId = 'north' | 'center' | 'south';

const regionGroupMap: Record<RegionKey, WrapperId[]> = {
  bac: ['north'],
  trung: ['center'],
  nam: ['south']
};

const wrapperToRegion: Record<WrapperId, RegionKey> = {
  north: 'bac',
  center: 'trung',
  south: 'nam'
};

const regionLabels: Record<RegionKey, string> = {
  bac: 'Miền Bắc',
  trung: 'Miền Trung',
  nam: 'Miền Nam'
};

export function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<RegionKey>('trung');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const selectedCard = useMemo(() => regions.find(region => region.key === selectedRegion)!, [selectedRegion]);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const container = mapRef.current;

    const activeColors: Record<WrapperId, { fill: string; stroke: string }> = {
      north: { fill: 'rgba(200, 60, 60, 0.8)', stroke: 'rgba(209, 69, 58, 0.9)' },
      center: { fill: '#FEB602', stroke: '#FFD700' },
      south: { fill: '#5FB4F0', stroke: 'rgba(33, 85, 156, 0.9)' }
    };

    container.querySelectorAll('.hover-group').forEach(el => {
      el.classList.remove('active-region');
      el.querySelectorAll('path').forEach(path => {
        path.classList.remove('active-path');
        path.style.fill = '';
        path.style.stroke = '';
        path.style.strokeWidth = '';
      });
    });

    regionGroupMap[selectedRegion].forEach(groupId => {
      const group = container.querySelector(`#${groupId}`) as SVGGElement | null;
      if (!group) return;
      group.classList.add('active-region');
      const colorScheme = activeColors[groupId];
      group.querySelectorAll('path').forEach(path => {
        path.style.fill = colorScheme.fill;
        path.style.stroke = colorScheme.stroke;
        path.style.strokeWidth = '2px';
        path.classList.add('active-path');
      });
    });
  }, [selectedRegion]);

  const handleMapClick = (event: React.MouseEvent) => {
    const target = event.target as Element | null;
    const group = target?.closest<SVGGElement>('g.hover-group');
    if (!group) return;
    const wrapperId = group.id as WrapperId | undefined;
    if (wrapperId && wrapperToRegion[wrapperId]) {
      const newRegion = wrapperToRegion[wrapperId];
      if (newRegion !== selectedRegion) {
        setSelectedRegion(newRegion);
      }
    }
  };

  const handleCardClick = (regionKey: RegionKey) => {
    if (regionKey !== selectedRegion) {
      setIsTransitioning(true);
      setSelectedRegion(regionKey);
      setTimeout(() => setIsTransitioning(false), 120);
    }
  };

  return (
    <div className="interactive-map-container">
      <div className="interactive-map-grid">
        <div className="interactive-map-svg">
          <div
            ref={mapRef}
            className="vn-map-embed"
            aria-label="Bản đồ Việt Nam - chọn vùng miền"
            dangerouslySetInnerHTML={{ __html: svgViewerMarkup }}
            onClick={handleMapClick}
          />
        </div>

        <div className="carousel-3d-section">
          <div className="carousel-3d-wrapper">
            {regions.map(region => {
              const selectedIndex = regions.findIndex(r => r.key === selectedRegion);
              const position =
                region.key === selectedRegion
                  ? 'center'
                  : regions.indexOf(region) < selectedIndex
                  ? 'left'
                  : 'right';

              return (
                <div
                  key={region.key}
                  className={`interactive-map-info carousel-card ${position} ${isTransitioning ? 'transitioning' : ''}`}
                  style={{ zIndex: position === 'center' ? 3 : position === 'left' ? 2 : 1 }}
                  onClick={() => (position === 'center' ? null : handleCardClick(region.key))}
                >
                  <h3 className="region-title">{regionLabels[region.key]}</h3>
                  <div className="region-badges">
                    <img 
                      src={region.badgeImage} 
                      alt={region.name}
                      className="badge-image"
                    />
                  </div>
                  <ul className="region-highlights">
                    {region.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="carousel-dots">
            {regions.map(region => (
              <button
                key={region.key}
                className={`carousel-dot ${region.key === selectedRegion ? 'active' : ''}`}
                onClick={() => handleCardClick(region.key)}
                aria-label={`Chuyển đến ${regionLabels[region.key]}`}
              >
                <span className="dot-label">{regionLabels[region.key]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
