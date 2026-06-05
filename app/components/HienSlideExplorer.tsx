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

type HienSlideKind = 'reality' | 'strategy' | 'equality' | 'development';

type HienSlideExplorerProps = {
  kind: HienSlideKind;
  items: InfoCard[];
  visual?: SlideVisual;
};

const kindLabels: Record<HienSlideKind, string> = {
  reality: 'Thực tiễn khách quan',
  strategy: 'Quan điểm chiến lược',
  equality: 'Quan điểm bình đẳng',
  development: 'Phát triển toàn diện'
};

export function HienSlideExplorer({ kind, items, visual }: HienSlideExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];
  const images = visual?.images ?? (visual?.image ? [visual.image] : []);

  return (
    <>
      <aside className={`slide-visual hien-explorer-visual hien-${kind}-visual`}>
        <div className="hien-media">
          {images.slice(0, kind === 'equality' ? 3 : 2).map((image, index) => (
            <img key={image.src} src={image.src} alt="" data-image-index={index} />
          ))}
          <div className="hien-visual-overlay" />
          <div className="hien-visual-copy">
            <span>{kindLabels[kind]}</span>
            <strong>{visual?.title}</strong>
            <p>{visual?.caption}</p>
          </div>
        </div>
        <div className="hien-selector" aria-label={`Chọn nội dung ${kindLabels[kind]}`}>
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
      <div className="hien-detail-panel" aria-live="polite">
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

function shortenTitle(title: string, kind: HienSlideKind) {
  if (kind === 'reality') {
    return title
      .replace('Chênh lệch lớn về số dân', 'Số dân')
      .replace('Cư trú xen kẽ, không có lãnh thổ tộc người biệt lập', 'Cư trú xen kẽ')
      .replace('Địa bàn chiến lược về chính trị, kinh tế, quốc phòng, an ninh', 'Địa bàn chiến lược')
      .replace('Trình độ phát triển kinh tế - xã hội không đồng đều', 'Không đồng đều')
      .replace('Truyền thống đoàn kết trong cộng đồng quốc gia thống nhất', 'Đoàn kết lâu đời')
      .replace('Bản sắc văn hóa riêng trong nền văn hóa Việt Nam thống nhất', 'Bản sắc riêng');
  }

  if (kind === 'strategy') {
    return title
      .replace('Vấn đề dân tộc và đoàn kết dân tộc là chiến lược cơ bản, lâu dài, đồng thời cấp bách', 'Tổng quan')
      .replace('Cơ bản, lâu dài', 'Lâu dài')
      .replace('Yêu cầu hiện nay', 'Cấp bách');
  }

  if (kind === 'equality') {
    return title
      .replace('Bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển', 'Bình đẳng - đoàn kết')
      .replace('Cơ sở pháp lý và đạo lý', 'Bình đẳng')
      .replace('Sức mạnh và hành động thực tiễn', 'Đoàn kết - tương trợ');
  }

  return title
    .replace('Phát triển toàn diện vùng dân tộc và miền núi', 'Phát triển toàn diện')
    .replace('Toàn diện về kinh tế', 'Kinh tế')
    .replace('Toàn diện về chính trị và quốc phòng - an ninh', 'Chính trị - QP-AN')
    .replace('Toàn diện về văn hóa - xã hội', 'Văn hóa - xã hội')
    .replace('Hạ tầng và sinh kế bền vững', 'Kinh tế - hạ tầng')
    .replace('Cơ sở vững, đời sống nâng lên', 'Chính trị - xã hội');
}
