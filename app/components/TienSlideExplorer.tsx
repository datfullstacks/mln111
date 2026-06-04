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

type TienSlideKind = 'achievement' | 'action';

type TienSlideExplorerProps = {
  kind: TienSlideKind;
  items: InfoCard[];
  visual?: SlideVisual;
};

const kindLabels: Record<TienSlideKind, string> = {
  achievement: 'Thành tựu nổi bật',
  action: 'Hành động đoàn kết'
};

export function TienSlideExplorer({ kind, items, visual }: TienSlideExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];
  const images = visual?.images ?? (visual?.image ? [visual.image] : []);
  const activeImage = images[activeImageIndex % Math.max(images.length, 1)] ?? images[0];

  function selectItem(index: number) {
    setActiveIndex(index);
    if (images.length) {
      setActiveImageIndex(index % images.length);
    }
  }

  return (
    <>
      <aside className={`slide-visual tien-explorer-visual tien-${kind}-visual`}>
        <div className="tien-media-stage">
          {activeImage ? <img className="tien-main-image" src={activeImage.src} alt={activeImage.alt} /> : null}
          <div className="tien-media-overlay" />
          <div className="tien-visual-copy">
            <span>{kindLabels[kind]}</span>
            <strong>{visual?.title}</strong>
            <p>{visual?.caption}</p>
          </div>
          {images.length > 1 ? (
            <div className="tien-thumb-strip" aria-label="Ảnh minh họa">
              {images.slice(0, 3).map((image, index) => (
                <button
                  className={index === activeImageIndex % images.length ? 'active' : ''}
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Xem ảnh ${image.label}`}
                >
                  <img src={image.src} alt="" />
                  <span>{image.label}</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="tien-selector" aria-label={`Chọn nội dung ${kindLabels[kind]}`}>
          {items.map((item, index) => (
            <button
              className={index === activeIndex ? 'active' : ''}
              key={item.title}
              type="button"
              onClick={() => selectItem(index)}
              aria-pressed={index === activeIndex}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{shortenTitle(item.title, kind)}</strong>
            </button>
          ))}
        </div>
      </aside>

      <div className="tien-detail-panel" aria-live="polite">
        <span className="eyebrow">{activeItem.eyebrow}</span>
        <h3>{activeItem.title}</h3>
        <p>{activeItem.body}</p>
        <div className="tien-point-grid">
          {activeItem.points.map((point, index) => (
            <div key={point} className="tien-point">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{point}</strong>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function shortenTitle(title: string, kind: TienSlideKind) {
  if (kind === 'action') {
    return title
      .replace('Không kỳ thị, định kiến hoặc coi thường khác biệt', 'Không kỳ thị')
      .replace('Không tiếp tay thông tin chia rẽ trên mạng', 'Không tiếp tay chia rẽ')
      .replace('Bắt đầu từ hành động nhỏ của sinh viên', 'Hành động sinh viên')
      .replace('Tôn trọng khác biệt trong đời sống hằng ngày', 'Tôn trọng khác biệt')
      .replace('54 dân tộc - một đại gia đình Việt Nam', 'Thông điệp');
  }

  return title
    .replace('Hạ tầng cơ sở ngày càng được cải thiện', 'Hạ tầng')
    .replace('Giáo dục có nhiều chuyển biến tích cực', 'Giáo dục')
    .replace('Chăm sóc sức khỏe và an sinh được quan tâm', 'Y tế - an sinh')
    .replace('Sinh kế đa dạng, giảm nghèo đạt kết quả tích cực', 'Sinh kế')
    .replace('Bản sắc văn hóa được bảo tồn và phát huy', 'Bản sắc')
    .replace('Hạ tầng mở đường cho kết nối', 'Ý nghĩa')
    .replace('Trao cơ hội học tập bình đẳng', 'Ý nghĩa')
    .replace('Không để ai bị bỏ lại phía sau', 'Ý nghĩa')
    .replace('Trao cơ hội để tự lực', 'Ý nghĩa')
    .replace('Bản sắc cũng là nguồn lực', 'Ý nghĩa');
}
