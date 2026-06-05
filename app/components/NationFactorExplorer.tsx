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
  credit?: string;
  license?: string;
  sourceUrl?: string;
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
  const activeImage = visualImages[activeIndex] ?? visualImages[0];

  return (
    <>
      <aside className="slide-visual statement nation-factor-visual">
        <div className="nation-factor-media">
          {activeImage ? <img key={activeImage.src} className="visual-backdrop" src={activeImage.src} alt={activeImage.alt} /> : null}
          <div className="visual-overlay" />
          <VisualCredits images={visualImages} />
          {activeImage ? <span className="nation-factor-image-label">{activeImage.label}</span> : null}
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

function VisualCredits({ images }: { images: VisualImage[] }) {
  const creditedImages = images.filter(image => image.sourceUrl);

  if (!creditedImages.length) {
    return null;
  }

  return (
    <div className="visual-credit" aria-label="Nguồn ảnh">
      <span>Nguồn</span>
      {creditedImages.map((image, index) => {
        const credit = [image.credit, image.license].filter(Boolean).join(' / ');

        return (
          <a key={image.src} href={image.sourceUrl} target="_blank" rel="noreferrer" title={credit || image.label}>
            {index + 1}
          </a>
        );
      })}
    </div>
  );
}
