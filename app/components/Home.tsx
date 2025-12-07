"use client";

import { useState } from "react";
import { NavBar, type NavKey } from "./NavBar";
import { InteractiveMap } from "./InteractiveMap";
import { DongSonBackground } from "./DongSonBackground";

export function Home() {
  const [currentPage, setCurrentPage] = useState<NavKey>("theory");

  const slides = [
    {
      id: "slide-1",
      title: "Mở đầu",
      layout: "title" as const,
      content: {
        text: "Vì sao cùng một quốc gia nhưng phong tục tập quán giữa các vùng miền lại khác biệt sâu sắc?",
      },
    },
    {
      id: "slide-2",
      title: "Tồn tại xã hội?",
      layout: "title" as const,
      content: {
        text: "Tồn tại xã hội là khái niệm triết học dùng để chỉ toàn bộ những sinh hoạt vật chất và những điều kiện sinh hoạt vật chất của xã hội trong những giai đoạn lịch sử nhất định",
      },
    },
    {
      id: "slide-3",
      title: "tồn tại xã hội",
      subtitle: "Ba yếu tố cấu thành",
      layout: "highlight" as const,
      content: {
        boxes: [
          {
            icon: "⚙️",
            title: "Phương thức sản xuất",
            text: "Cách con người sản xuất ra của cải vật chất",
          },
          {
            icon: "🏔️",
            title: "Điều kiện tự nhiên",
            text: "Môi trường địa lý, khí hậu nơi sinh sống",
          },
          {
            icon: "👥",
            title: "Dân cư",
            text: "Số lượng, phân bố và quá trình di cư",
          },
        ],
      },
    },
    {
      id: "slide-13",
      title: "Ý thức xã hội là gì?",
      subtitle: "Đời sống tinh thần của cộng đồng",
      layout: "quote" as const,
      content: {
        quote:
          "Ý thức xã hội là đời sống tinh thần của một cộng đồng: những quan niệm, thói quen, tập quán, truyền thống. Chính từ đời sống vật chất — tức tồn tại xã hội — mà những phong tục này hình thành.",
        author: "- Triết học Mác - Lênin",
      },
    },
    {
      id: "slide-14",
      title: "Tồn tại xã hội → Ý thức xã hội",
      subtitle: "Mối quan hệ quyết định",
      layout: "big-title" as const,
      content: {
        mainText: "Điều kiện sống → Phong tục",
        subText:
          "Triết học khẳng định: con người sống như thế nào thì tư duy và văn hóa của họ sẽ như thế ấy.",
      },
    },
    {
      id: "slide-15",
      title: "Ý thức xã hội thông thường → Tâm lý xã hội",
      subtitle: "Thói quen hằng ngày",
      layout: "list" as const,
      content: {
        items: [
          "Ý thức thông thường: cách ăn nói, chào hỏi, cư xử",
          "Tâm lý vùng miền hình thành từ những thói quen này",
          "Tâm lý ấy bền vững, ổn định",
          "Truyền từ đời này sang đời khác",
          "Tạo nên bản sắc văn hóa đặc trưng",
        ],
      },
    },
    {
      id: "slide-16",
      title: "Tổng hợp 3 vùng miền",
      layout: "interactive-map" as const,
      content: {
        mapComponent: true,
      },
    },
    {
      id: "slide-17",
      title: "Kết luận",
      subtitle: "Đa dạng trong thống nhất",
      layout: "conclusion" as const,
      content: {
        summary:
          "Mặc dù khác biệt, nhưng chính sự đa dạng phong tục đã tạo ra nét đẹp văn hóa Việt Nam.",
        keyPoints: [
          "Tồn tại xã hội định hình văn hóa",
          "Văn hóa làm nên bản sắc của mỗi vùng miền",
          "Sự khác biệt làm phong phú bản sắc dân tộc",
        ],
        nextSteps:
          "Hãy tự hào và gìn giữ những nét đẹp văn hóa vùng miền của chúng ta!",
      },
    },
  ];



  return (
    <>
      <NavBar current={currentPage} onNavigate={setCurrentPage} />

      <main className="presentation-scroll">
        <DongSonBackground />
        
        {slides.map((slide) => (
          <section key={slide.id} className="slide-section">
            <div className="slide-content-wrapper">
              <h1 className="slide-title">{slide.title}</h1>
              {slide.subtitle && (
                <p className="slide-subtitle">{slide.subtitle}</p>
              )}
              <div className="slide-content">
                {renderSlideContent(slide)}
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );

  function renderSlideContent(slide: (typeof slides)[number]) {
    const { layout, content } = slide;

    switch (layout) {
      case "title":
        return (
          <div className="layout-title">
            <p className="text-large">{content.text}</p>
          </div>
        );

      case "list":
        return (
          <div className="layout-list">
            <ul>
              {content.items?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        );

      case "quote":
        return (
          <div className="layout-quote">
            <blockquote>
              <p className="quote-text">"{content.quote}"</p>
              <footer className="quote-author">{content.author}</footer>
            </blockquote>
          </div>
        );

      case "conclusion":
        return (
          <div className="layout-conclusion">
            <p className="conclusion-summary">{content.summary}</p>
            <div className="key-points">
              <h3>Điểm chính:</h3>
              <ul>
                {content.keyPoints?.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <p className="next-steps">{content.nextSteps}</p>
          </div>
        );

      case "big-title":
        return (
          <div className="layout-big-title">
            <h2 className="big-main-text">{content.mainText}</h2>
            {content.subText && (
              <p className="big-sub-text">{content.subText}</p>
            )}
          </div>
        );

      case "interactive-map":
        return <InteractiveMap />;

      case "highlight":
        return (
          <div className="layout-highlight">
            {content.boxes?.map((box) => (
              <div key={box.title} className="highlight-box">
                <div className="highlight-icon">{box.icon}</div>
                <h4>{box.title}</h4>
                <p>{box.text}</p>
              </div>
            ))}
          </div>
        );

      default:
        return <p>Nội dung slide</p>;
    }
  }
}
