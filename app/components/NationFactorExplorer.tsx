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

type NationFactorExplorerProps = {
  image?: VisualImage;
  images?: VisualImage[];
  items: InfoCard[];
};

export function NationFactorExplorer({ image, images, items }: NationFactorExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];
  const visualImages = images?.length ? images : image ? [image] : [];

  return (
    <>
      <aside className="slide-visual statement nation-factor-visual">
        <div className="nation-factor-media">
          {visualImages[0] ? <img className="visual-backdrop" src={visualImages[0].src} alt={visualImages[0].alt} /> : null}
          {visualImages.length > 1 ? (
            <div className="nation-factor-photo-stack" aria-label="Hình ảnh minh họa quốc gia dân tộc">
              {visualImages.slice(1, 3).map((visualImage, index) => (
                <figure key={visualImage.src}>
                  <img src={visualImage.src} alt={visualImage.alt} />
                  <figcaption>{visualImage.label}</figcaption>
                </figure>
              ))}
            </div>
          ) : null}
          <div className="visual-overlay" />
          <div className="nation-factor-caption">
            <span>Nation</span>
            <strong>Quốc gia dân tộc</strong>
            <p>Cộng đồng chính trị - xã hội thống nhất, nơi các thành viên cùng chung sống, lao động, sáng tạo và bảo vệ Tổ quốc.</p>
          </div>
        </div>
        <div className="nation-factor-tabs" aria-label="Chọn đặc trưng quốc gia dân tộc">
          {items.map((item, index) => (
            <button
              className={index === activeIndex ? 'active' : ''}
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>
      </aside>
      <div className="nation-factor-detail" aria-live="polite">
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
