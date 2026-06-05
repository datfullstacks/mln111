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
        <div className={`linh-media-grid count-${Math.min(images.length, 3)}`}>
          {images.slice(0, 3).map((image, index) => (
            <img key={image.src} src={image.src} alt={index === 0 ? image.alt : ''} data-image-index={index} />
          ))}
          {images[0] ? <span className="linh-image-label">{images[0].label}</span> : null}
        </div>
        <div className="linh-visual-overlay" />
        <div className="linh-visual-copy">
          <span>{kindLabels[kind]}</span>
          <strong>{visual?.title}</strong>
          <p>{visual?.caption}</p>
        </div>
        <div className="linh-selector" aria-label={`Chọn nội dung ${kindLabels[kind]}`}>
          {items.map((item, index) => {
            const groupLabel = getGroupLabel(item, kind);
            const previousGroupLabel = index > 0 ? getGroupLabel(items[index - 1], kind) : '';

            return (
              <div className="linh-selector-item" key={item.title}>
                {groupLabel && groupLabel !== previousGroupLabel ? <span className="linh-selector-group">{groupLabel}</span> : null}
                <button
                  className={`${index === activeIndex ? 'active' : ''} ${getButtonClass(item, kind)}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={index === activeIndex}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{shortenTitle(item.title, kind)}</strong>
                </button>
              </div>
            );
          })}
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

function getGroupLabel(item: InfoCard, kind: LinhSlideKind) {
  if (kind !== 'trends') {
    return '';
  }

  if (item.eyebrow === 'Biểu hiện') {
    return 'Biểu hiện của hai xu hướng';
  }

  if (item.eyebrow === 'Ví dụ') {
    return 'Ví dụ';
  }

  if (item.eyebrow === 'Mối quan hệ') {
    return 'Quan hệ';
  }

  if (item.eyebrow === 'Ý nghĩa hiện nay') {
    return 'Ý nghĩa';
  }

  return 'Hai xu hướng khách quan';
}

function getButtonClass(item: InfoCard, kind: LinhSlideKind) {
  if (kind !== 'trends') {
    return '';
  }

  if (item.eyebrow === 'Biểu hiện') {
    return 'is-manifestation';
  }

  if (item.eyebrow === 'Mối quan hệ') {
    return 'is-relation';
  }

  if (item.eyebrow === 'Ví dụ' || item.eyebrow === 'Ý nghĩa hiện nay') {
    return 'is-relation';
  }

  return 'is-trend';
}

function shortenTitle(title: string, kind: LinhSlideKind) {
  if (kind === 'trends') {
    return title
      .replace('Tách ra để hình thành cộng đồng dân tộc độc lập', 'Dân tộc độc lập')
      .replace('Liên hiệp lại với nhau', 'Liên hiệp')
      .replace('Trong phạm vi một quốc gia', 'Trong quốc gia')
      .replace('Trong phạm vi quốc tế', 'Quốc tế')
      .replace('Thống nhất biện chứng', 'Quan hệ hai xu hướng');
  }

  if (kind === 'principles') {
    return title
      .replace('Cương lĩnh được xây dựng từ lý luận và thực tiễn cách mạng', 'Cơ sở hình thành')
      .replace('Các dân tộc hoàn toàn bình đẳng', 'Bình đẳng')
      .replace('Các dân tộc được quyền tự quyết', 'Tự quyết')
      .replace('Liên hiệp công nhân tất cả các dân tộc', 'Liên hiệp công nhân')
      .replace('Bình đẳng, tự quyết và bảo vệ chủ quyền', 'Liên hệ Việt Nam')
      .replace('Cơ sở lý luận cho chính sách dân tộc', 'Ý nghĩa chung');
  }

  return title
    .replace('Đặc điểm dân tộc Việt Nam: ', '')
    .replace('Đa dạng bản sắc nhưng cùng một cộng đồng quốc gia', 'Đa dạng bản sắc')
    .replace('Chênh lệch về số dân giữa các tộc người', 'Chênh lệch dân số')
    .replace('Trình độ phát triển còn không đồng đều', 'Phát triển chưa đều');
}
