"use client";

import { useState } from 'react';

type InfoCard = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
};

type VisualImage = {
  src: string;
  alt: string;
  label: string;
};

type SlideVisual = {
  title: string;
  caption: string;
  image?: VisualImage;
  images?: VisualImage[];
  chips?: string[];
};

type LinhSlideKind = 'trends' | 'principles' | 'vietnam';

type LinhSlideExplorerProps = {
  kind: LinhSlideKind;
  items: InfoCard[];
  visual?: SlideVisual;
};

const kindLabels: Record<LinhSlideKind, string> = {
  trends: 'Hai xu hướng',
  principles: 'Ba nội dung cốt lõi',
  vietnam: 'Đặc điểm Việt Nam'
};

export function LinhSlideExplorer({ kind, items, visual }: LinhSlideExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];
  const images = visual?.images ?? (visual?.image ? [visual.image] : []);

  return (
    <>
      <aside className={`slide-visual linh-explorer-visual linh-${kind}-visual`}>
        <div className="linh-media-grid" aria-hidden="true">
          {images.slice(0, 3).map((image, index) => (
            <img key={image.src} src={image.src} alt="" data-image-index={index} />
          ))}
        </div>
        <div className="linh-visual-overlay" />
        <div className="linh-visual-copy">
          <span>{kindLabels[kind]}</span>
          <strong>{visual?.title}</strong>
          <p>{visual?.caption}</p>
        </div>
        <div className="linh-selector" aria-label={`Chọn nội dung ${kindLabels[kind]}`}>
          {items.map((item, index) => (
            <button
              className={index === activeIndex ? 'active' : ''}
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{shortenTitle(item.title, kind)}</strong>
            </button>
          ))}
        </div>
      </aside>
      <div className="linh-detail-panel" aria-live="polite">
        <span className="eyebrow">{activeItem.eyebrow}</span>
        <h3>{activeItem.title}</h3>
        <p>{activeItem.body}</p>
        <ul>
          {activeItem.points.map(point => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

function shortenTitle(title: string, kind: LinhSlideKind) {
  if (kind === 'trends') {
    return title.replace('Tách ra để hình thành ', '').replace('Liên hiệp lại với nhau', 'Liên hiệp lại');
  }

  if (kind === 'principles') {
    return title.replace('Các dân tộc ', '').replace('Liên hiệp công nhân tất cả các dân tộc', 'Liên hiệp công nhân');
  }

  return title
    .replace('Đặc điểm dân tộc Việt Nam: ', '')
    .replace('Đa dạng bản sắc nhưng cùng một cộng đồng quốc gia', 'Đa dạng bản sắc')
    .replace('Chênh lệch về số dân giữa các tộc người', 'Chênh lệch dân số')
    .replace('Trình độ phát triển còn không đồng đều', 'Phát triển chưa đều');
}
