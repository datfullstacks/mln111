"use client";

import { useState } from "react";
import { NavBar, type NavKey } from "./NavBar";
import { InteractiveMap } from "./InteractiveMap";
import { DongSonBackground } from "./DongSonBackground";

export function Home() {
  const [currentPage, setCurrentPage] = useState<NavKey>("theory");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    cards: { region: string; content: string; images: string[] }[];
  } | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(1);

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
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      },
    },
    {
      id: "slide-3",
      title: "Tồn tại xã hội",
      subtitle: "Ba yếu tố cấu thành",
      layout: "highlight" as const,
      content: {
        boxes: [
          {
            icon: "⚙️",
            title: "Phương thức sản xuất",
            cards: [
              {
                region: "Miền Bắc",
                content: "Nông nghiệp lúa nước, nghề thủ công truyền thống",
                images: [
                  "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&q=80",
                  "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&q=80",
                  "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80",
                ],
              },
              {
                region: "Miền Trung",
                content: "Kết hợp nông nghiệp và đánh bắt hải sản",
                images: [
                  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80",
                  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
                  "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&q=80",
                ],
              },
              {
                region: "Miền Nam",
                content: "Nông nghiệp đa dạng, buôn bán phát triển",
                images: [
                  "https://images.unsplash.com/photo-1580495772338-72a2086b08ce?w=400&q=80",
                  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80",
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
                ],
              },
              {
                region: "Lý thuyết",
                content:
                  "Phương thức sản xuất quyết định cách người dân tổ chức đời sống và văn hóa",
                images: [],
              },
            ],
          },
          {
            icon: "🏔️",
            title: "Điều kiện tự nhiên",
            cards: [
              {
                region: "Miền Bắc",
                content: "Đồng bằng châu thổ sông Hồng, 4 mùa rõ rệt",
                images: [
                  "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&q=80",
                  "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=400&q=80",
                  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80",
                ],
              },
              {
                region: "Miền Trung",
                content: "Dải đất hẹp, khí hậu khắc nghiệt, nhiều bão lũ",
                images: [
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
                  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80",
                  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&q=80",
                ],
              },
              {
                region: "Miền Nam",
                content: "Đồng bằng sông Cửu Long, khí hậu nóng ẩm quanh năm",
                images: [
                  "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&q=80",
                  "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80",
                  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&q=80",
                ],
              },
              {
                region: "Lý thuyết",
                content:
                  "Điều kiện địa lý và khí hậu ảnh hưởng trực tiếp đến lối sống và tính cách",
                images: [],
              },
            ],
          },
          {
            icon: "👥",
            title: "Dân cư",
            cards: [
              {
                region: "Miền Bắc",
                content: "Dân số đông đúc, lâu đời, ổn định",
                images: [
                  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80",
                  "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&q=80",
                  "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&q=80",
                ],
              },
              {
                region: "Miền Trung",
                content: "Dân cư phân tán, di cư nhiều",
                images: [
                  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80",
                  "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=400&q=80",
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
                ],
              },
              {
                region: "Miền Nam",
                content: "Dân cư đa dạng, di cư từ nhiều vùng",
                images: [
                  "https://images.unsplash.com/photo-1580495772338-72a2086b08ce?w=400&q=80",
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
                  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80",
                ],
              },
              {
                region: "Lý thuyết",
                content:
                  "Quá trình hình thành và di cư tạo nên đặc trưng văn hóa riêng",
                images: [],
              },
            ],
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
      title: "Trình độ phản ánh",
      layout: "consciousness-structure" as const,
      content: {
        mainTitle: "TRÌNH ĐỘ PHẢN ÁNH:",
        rows: [
          {
            left: {
              title: "Ý THỨC XÃ HỘI THÔNG THƯỜNG",
              description:
                "Tư tưởng, quan điểm tập quán, thói quen, truyền thống được hình thành trực tiếp trong đời sống hằng ngày",
            },
            right: {
              title: "TÂM LÝ XÃ HỘI",
              description:
                "Là những cảm xúc, thói quen, tập quán, dư luận, thị hiếu... hình thành một cách tự phát trong đời sống hằng ngày.",
              highlighted: true,
            },
          },
          {
            left: {
              title: "Ý THỨC XÃ HỘI LÝ LUẬN",
              description:
                "Tư tưởng, quan điểm được khái quát hóa, hệ thống hóa thành các lý thuyết, học thuyết (nắm được bản chất, quy luật)",
            },
            right: {
              title: "HỆ TƯ TƯỞNG",
              description:
                "là giai đoạn phát triển cao hơn của ý thức xã hội, là sự nhận thức lý luận về tồn tại xã hội.",
              highlighted: true,
            },
          },
        ],
        footer:
          '"Thông thường là sống sao nghĩ vậy; lý luận là nghĩ sâu thành hệ thống để định hướng sống."',
      },
    },
    {
      id: "slide-16",
      title: "Lĩnh vực phản ánh",
      layout: "fields-list" as const,
      content: {
        mainTitle: "LĨNH VỰC PHẢN ÁNH:",
        subtitle: "Sự tác động qua lại của các hình thái ý thức xã hội",
        fields: [
          {
            title: "Ý thức chính trị:",
            description: "quyền lực, nhà nước, đường lối",
          },
          {
            title: "Ý thức pháp quyền:",
            description: "pháp luật, quyền–nghĩa vụ",
          },
          {
            title: "Ý thức đạo đức:",
            description: "thiện–ác, chuẩn mực ứng xử",
          },
          {
            title: "Ý thức thẩm mỹ:",
            description: "cái đẹp, nghệ thuật",
          },
          {
            title: "Ý thức khoa học:",
            description: "tri thức, quy luật, bằng chứng",
          },
          {
            title: "Ý thức tôn giáo:",
            description: "niềm tin, giáo lý, nghi lễ",
          },
          {
            title: "Ý thức triết học:",
            description: "thế giới quan, phương pháp luận",
          },
        ],
      },
    },
    {
      id: "slide-17",
      title: "Tổng hợp 3 vùng miền",
      layout: "interactive-map" as const,
      content: {
        mapComponent: true,
      },
    },
    {
      id: "slide-18",
      title: "Tính giai cấp của ý thức xã hội",
      layout: "class-nature" as const,
      content: {
        mainTitle: "TÍNH GIAI CẤP CỦA Ý THỨC XÃ HỘI",
        sections: [
          {
            title: "Giai cấp khác nhau có ý thức khác nhau",
            description:
              "(cùng một vấn đề nhưng quan điểm trái nhau do lợi ích khác nhau).",
          },
          {
            title:
              "Tư tưởng thống trị thường là tư tưởng của giai cấp thống trị",
            description:
              'vì họ có điều kiện chi phối các thiết chế như nhà nước, giáo dục, truyền thông... nên tư tưởng của họ dễ trở thành "chính thống".',
          },
          {
            title:
              "Giai cấp bị trị/nhóm yếu thế thường hình thành ý thức mang tính phản kháng/đòi quyền lợi",
            description: "hướng tới thay đổi các quan hệ bất lợi cho họ.",
          },
        ],
      },
    },
    {
      id: "slide-32",
      title: "",
      layout: "dialectic-hero" as const,
      content: {
        label: "Triết học Mác-Lênin",
        mainTitle: "Quan hệ biện chứng giữa",
        titleHighlight1: "Tồn tại xã hội",
        titleHighlight2: "Ý thức xã hội",
        quote:
          '"Ý thức xã hội phản ánh tồn tại xã hội, ra đời từ tồn tại xã hội và có tính độc lập tương đối, tác động trở lại tồn tại xã hội"',
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
      },
    },
    {
      id: "slide-33",
      title: "Sơ đồ mối quan hệ",
      subtitle: "",
      layout: "schema-diagram" as const,
      content: {
        mainTitle: "Sơ đồ` mô`i quan hệ",
        leftBox: {
          title: "TỒN TẠI XÃ HỘI",
          subtitle: "(TTXH)",
          description: "Phương thức sản xuất, điều kiện vật chất",
        },
        rightBox: {
          title: "Ý THỨC XÃ HỘI",
          subtitle: "(YTXH)",
          description: "Tư tưởng, quan điểm, ý thức hệ",
        },
        relationships: [
          { direction: "right", label: "Quyết định" },
          { direction: "left", label: "Tác động trở lại" },
          { direction: "both", label: "Xu hướng biến đổi, phát triển" },
        ],
        footer: "⇲ Xu hướng biến đổi, phát triển ⇳",
      },
    },
    {
      id: "slide-34",
      title: "Cấu trúc Ý thức xã hội",
      subtitle: "Trình độ và Lĩnh vực phản ánh",
      layout: "interactive-dropdown" as const,
      content: {
        leftButton: {
          title: "TRÌNH ĐỘ PHẢN ÁNH",
          items: [
            {
              title: "Tâm lý xã hội",
              tooltip:
                "Cảm xúc, thói quen, tập quán tự phát trong đời sống hằng ngày",
            },
            {
              title: "Hệ tư tưởng",
              tooltip: "Nhận thức lý luận, hệ thống hóa về tồn tại xã hội",
            },
          ],
        },
        rightButton: {
          title: "LĨNH VỰC PHẢN ÁNH",
          items: [
            {
              title: "Ý thức chính trị",
              tooltip: "Quan hệ quyền lực, nhà nước, đường lối",
            },
            {
              title: "Ý thức pháp quyền",
              tooltip: "Pháp luật, quyền và nghĩa vụ",
            },
            {
              title: "Ý thức đạo đức",
              tooltip: "Thiện-ác, chuẩn mực ứng xử",
            },
            {
              title: "Ý thức thẩm mỹ",
              tooltip: "Cái đẹp, nghệ thuật, thẩm mỹ",
            },
            {
              title: "Ý thức khoa học",
              tooltip: "Tri thức, quy luật, bằng chứng",
            },
            {
              title: "Ý thức tôn giáo",
              tooltip: "Niềm tin, giáo lý, nghi lễ",
            },
            {
              title: "Ý thức triết học",
              tooltip: "Thế giới quan, phương pháp luận",
            },
          ],
        },
      },
    },
    {
      id: "slide-35",
      title: "YTXH có tính độc lập tương đối",
      subtitle: "Tính độc lập tương đối của YTXH thể hiện ở các đặc điểm:",
      layout: "comprehensive-independence" as const,
      content: {
        features: [
          { 
            number: "1", 
            title: "YTXH thường lạc hậu hơn so với TTXH",
            reasons: [
              {
                label: "Một là",
                text: "YTXH chỉ là sự phản ánh của TTXH. Tồn tại xã hội thay đổi nhanh hơn khả năng phản ánh của ý thức."
              },
              {
                label: "Hai là",
                text: "Do sức mạnh của thói quen, truyền thống, tập quán lạc hậu, bảo thủ."
              },
              {
                label: "Ba là",
                text: "Những tư tưởng cũ, lạc hậu thường được các lực lượng xã hội phản tiến bộ lưu giữ và truyền bá nhằm chống lại các lực lượng tiến bộ."
              }
            ]
          },
          { 
            number: "2", 
            title: "YTXH có tính vượt trước",
            quote: "Trong những điều kiện nhất định, tư tưởng của con người có thể vượt trước sự phát triển của TTXH, dự báo được tương lai và có tác dụng tổ chức, chỉ đạo hoạt động thực tiễn của con người.",
            explanation: "Điều này cho thấy vai trò tích cực của ý thức trong việc định hướng và thúc đẩy sự phát triển xã hội.",
            example: "Ví dụ: Các lý thuyết khoa học tiên tiến có thể dự đoán xu hướng phát triển của xã hội và công nghệ."
          },
          { 
            number: "3", 
            title: "YTXH có tính kế thừa",
            quote: "Những quan điểm lý luận của mỗi thời đại được tạo ra trên cơ sở kế thừa những tài liệu lý luận của các thời đại trước đó.",
            explanation: "Tính kế thừa thể hiện sự liên tục trong sự phát triển của ý thức xã hội. Mỗi thời đại không bắt đầu từ con số không mà dựa trên nền tảng tri thức đã được tích lũy.",
            points: [
              "Kế thừa có chọn lọc các giá trị tích cực",
              "Phát triển và bổ sung những nội dung mới",
              "Loại bỏ những yếu tố lạc hậu"
            ]
          }
        ]
      },
    },
    {
      id: "slide-36",
      title: "Tác động qua lại giữa các hình thái YTXH",
      subtitle: "",
      layout: "interaction-layout" as const,
      content: {
        mainText: "Sự tác động qua lại giữa các hình thái ý thức xã hội là nguyên nhân làm cho trong mỗi hình thái ý thức có những mặt, những tính chất không thể giải thích được một cách trực tiếp từ tồn tại xã hội.",
        feature: {
          title: "Đặc điểm quan trọng:",
          description: "Thông thường ở mỗi thời đại, có những hình thái ý thức nào đó nổi lên hàng đầu và tác động mạnh đến các hình thái ý thức khác."
        },
        examples: [
          {
            era: "Thời Trung cổ châu Âu",
            dominant: "Tôn giáo",
            description: "là hình thái ý thức chi phối"
          },
          {
            era: "Thời hiện đại",
            dominant: "Khoa học",
            description: "có vai trò ngày càng quan trọng"
          }
        ]
      },
    },
    {
      id: "slide-37",
      title: "YTXH tác động trở lại TTXH",
      subtitle: "Đây là một trong những biểu hiện quan trọng nhất của tính độc lập tương đối của YTXH",
      layout: "action-reaction-layout" as const,
      content: {
        leftBox: {
          icon: "↑",
          title: "Thúc đẩy",
          subtitle: "YTXH tích cực, tiên bộ",
          description: "tác động phù hợp với xu thế phát triển",
          points: [
            "Khuyến khích đổi mới, sáng tạo",
            "Thúc đẩy tiên bộ khoa học kỹ thuật",
            "Nâng cao nhận thức xã hội"
          ],
          highlight: "Thúc đẩy XH phát triển"
        },
        rightBox: {
          icon: "↓",
          title: "Kiềm hãm",
          subtitle: "YTXH tiêu cực, lạc hậu",
          description: "tác động không phù hợp với xu thế phát triển",
          points: [
            "Bảo thủ, chống đối đổi mới",
            "Duy trì hủ tục, tập quán lạc hậu",
            "Cản trở tiến bộ xã hội"
          ],
          highlight: "Ngăn cản sự phát triển của XH"
        }
      },
    },
    {
      id: "slide-39",
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
              <div className="slide-content">{renderSlideContent(slide)}</div>
            </div>
          </section>
        ))}
      </main>

      {/* Modal with Carousel */}
      {modalOpen && modalContent && (
        <div
          className="modal-overlay"
          onClick={() => {
            setModalOpen(false);
            setCurrentCardIndex(0);
          }}
        >
          <div
            className="modal-content modal-carousel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => {
                setModalOpen(false);
                setCurrentCardIndex(0);
              }}
            >
              ✕
            </button>
            <h2 className="modal-title">{modalContent.title}</h2>

            <div className="carousel-container">
              <button
                className="carousel-btn carousel-prev"
                onClick={() =>
                  setCurrentCardIndex((prev) =>
                    prev === 0 ? modalContent.cards.length - 1 : prev - 1
                  )
                }
              >
                ‹
              </button>

              <div className="carousel-track">
                {modalContent.cards.map((card, idx) => (
                  <div
                    key={idx}
                    className={`carousel-card ${
                      idx === currentCardIndex
                        ? "active"
                        : idx < currentCardIndex
                        ? "left"
                        : "right"
                    }`}
                  >
                    <h3 className="carousel-card-region">{card.region}</h3>
                    {card.images && card.images.length > 0 && (
                      <div className="carousel-images">
                        {card.images.map((img, imgIdx) => (
                          <img
                            key={imgIdx}
                            src={img}
                            alt={`${card.region} ${imgIdx + 1}`}
                            className="carousel-image"
                          />
                        ))}
                      </div>
                    )}
                    <p className="carousel-card-content">{card.content}</p>
                  </div>
                ))}
              </div>

              <button
                className="carousel-btn carousel-next"
                onClick={() =>
                  setCurrentCardIndex((prev) =>
                    prev === modalContent.cards.length - 1 ? 0 : prev + 1
                  )
                }
              >
                ›
              </button>
            </div>

            <div className="carousel-conclusion">
              <p className="conclusion-text">
                {modalContent.title === "Phương thức sản xuất" &&
                  "Phương thức sản xuất đóng vai trò nền tảng, định hình cách con người sống và văn hóa của mỗi vùng miền."}
                {modalContent.title === "Điều kiện tự nhiên" &&
                  "Điều kiện địa lý và khí hậu tạo nên tính cách riêng biệt của người dân mỗi vùng."}
                {modalContent.title === "Dân cư" &&
                  "Quá trình hình thành và phát triển dân cư tạo nên bản sắc văn hóa đặc trưng của từng vùng miền."}
                {modalContent.title === "Trình độ phản ánh" &&
                  "Trình độ phản ánh thể hiện ở hai cấp độ: tâm lý xã hội (thói quen đời thường) và hệ tư tưởng (quan niệm có hệ thống)."}
                {modalContent.title === "Lĩnh vực phản ánh" &&
                  "Các lĩnh vực phản ánh bao gồm: chính trị, pháp quyền, đạo đức, thẩm mỹ, khoa học, tôn giáo, triết học - tạo nên bức tranh toàn diện về ý thức xã hội."}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );

  function renderSlideContent(slide: (typeof slides)[number]) {
    const { layout, content } = slide;

    switch (layout) {
      case "title":
        return (
          <div
            className="layout-title"
            style={{
              display: content.image ? "grid" : "block",
              gridTemplateColumns: content.image ? "1fr 1fr" : "1fr",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {content.image && (
              <img
                src={content.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                }}
              />
            )}
            <p className="text-large">{content.text}</p>
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
              <div
                key={box.title}
                className="highlight-box"
                onClick={() => {
                  setModalContent({ title: box.title, cards: box.cards });
                  setModalOpen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="highlight-icon">{box.icon}</div>
                <h4>{box.title}</h4>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    marginTop: "0.5rem",
                  }}
                >
                  Click để xem chi tiết
                </p>
              </div>
            ))}
          </div>
        );

      case "consciousness-structure":
        return (
          <div className="consciousness-structure-layout">
            <h2 className="consciousness-main-title">{content.mainTitle}</h2>

            {content.rows?.map((row, idx) => (
              <div key={idx} className="consciousness-row">
                <div className="consciousness-box consciousness-left">
                  <h3 className="consciousness-box-title">{row.left.title}</h3>
                  <p className="consciousness-box-desc">
                    {row.left.description}
                  </p>
                </div>

                <div className="consciousness-arrow">→</div>

                <div
                  className={`consciousness-box consciousness-right ${
                    row.right.highlighted ? "highlighted" : ""
                  }`}
                >
                  <h3 className="consciousness-box-title">{row.right.title}</h3>
                  <p className="consciousness-box-desc">
                    {row.right.description}
                  </p>
                </div>
              </div>
            ))}

            {content.footer && (
              <p className="consciousness-footer">{content.footer}</p>
            )}
          </div>
        );

      case "fields-list":
        return (
          <div className="fields-list-layout">
            <h2 className="fields-main-title">{content.mainTitle}</h2>
            <p className="fields-subtitle">{content.subtitle}</p>

            <ul className="fields-list">
              {content.fields?.map((field, idx) => (
                <li key={idx} className="field-item">
                  <span className="field-title">{field.title}</span>
                  <span className="field-description">{field.description}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "class-nature":
        return (
          <div className="class-nature-layout">
            <h2 className="class-nature-title">{content.mainTitle}</h2>

            <div className="class-nature-sections">
              {content.sections?.map((section, idx) => (
                <div key={idx} className="class-section">
                  <h3 className="class-section-title">{section.title}</h3>
                  <p className="class-section-description">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case "dialectic-hero":
        return (
          <div className="dialectic-hero-layout">
            <div
              className="dialectic-hero-background"
              style={{
                backgroundImage: `url(${content.image})`,
              }}
            >
              <div className="dialectic-hero-overlay"></div>
            </div>

            <div className="dialectic-hero-content">
              <span className="dialectic-label">{content.label}</span>

              <h1 className="dialectic-hero-title">
                {content.mainTitle}
                <br />
                <span className="dialectic-highlight dialectic-highlight-1">
                  {content.titleHighlight1}
                </span>
                {" và "}
                <span className="dialectic-highlight dialectic-highlight-2">
                  {content.titleHighlight2}
                </span>
              </h1>

              <blockquote className="dialectic-hero-quote">
                {content.quote}
              </blockquote>
            </div>
          </div>
        );

      case "schema-diagram":
        return (
          <div className="schema-diagram-layout">
            <h2 className="schema-main-title">{content.mainTitle}</h2>

            <div className="schema-boxes">
              <div className="schema-box schema-left">
                <h3 className="schema-box-title">{content.leftBox.title}</h3>
                <p className="schema-box-subtitle">
                  {content.leftBox.subtitle}
                </p>
                <p className="schema-box-description">
                  {content.leftBox.description}
                </p>
              </div>

              <div className="schema-arrows">
                {content.relationships?.map((rel, idx) => (
                  <div
                    key={idx}
                    className={`schema-arrow schema-arrow-${rel.direction}`}
                  >
                    <div className="arrow-line">
                      {rel.direction === "right" && (
                        <span className="arrow-symbol">→</span>
                      )}
                      {rel.direction === "left" && (
                        <span className="arrow-symbol">←</span>
                      )}
                      {rel.direction === "both" && (
                        <span className="arrow-symbol">↻</span>
                      )}
                    </div>
                    <span className="arrow-label">{rel.label}</span>
                  </div>
                ))}
              </div>

              <div className="schema-box schema-right">
                <h3 className="schema-box-title">{content.rightBox.title}</h3>
                <p className="schema-box-subtitle">
                  {content.rightBox.subtitle}
                </p>
                <p className="schema-box-description">
                  {content.rightBox.description}
                </p>
              </div>
            </div>

            <p className="schema-footer">{content.footer}</p>
          </div>
        );

      case "interactive-dropdown":
        return (
          <div className="interactive-dropdown-layout">
            <div className="dropdown-buttons-container">
              {/* Left Button - TRÌNH ĐỘ PHẢN ÁNH */}
              <div className="dropdown-wrapper dropdown-left">
                <button className="dropdown-trigger">
                  {content.leftButton.title}
                </button>
                <div className="dropdown-menu dropdown-menu-left">
                  {content.leftButton.items?.map((item, idx) => (
                    <div key={idx} className="dropdown-item-wrapper">
                      <div className="dropdown-item">{item.title}</div>
                      <div className="dropdown-tooltip dropdown-tooltip-left">
                        {item.tooltip}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Button - LĨNH VỰC PHẢN ÁNH */}
              <div className="dropdown-wrapper dropdown-right">
                <button className="dropdown-trigger">
                  {content.rightButton.title}
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  {content.rightButton.items?.map((item, idx) => (
                    <div key={idx} className="dropdown-item-wrapper">
                      <div className="dropdown-item">{item.title}</div>
                      <div className="dropdown-tooltip dropdown-tooltip-right">
                        {item.tooltip}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "comprehensive-independence":
        return (
          <div className="comprehensive-independence-layout">
            <div className="independence-two-column">
              {/* Left Column - Feature List */}
              <div className="independence-sidebar">
                {content.features?.map((feature) => (
                  <div 
                    key={feature.number} 
                    className={`sidebar-feature-item ${selectedFeature === parseInt(feature.number) ? 'active' : ''}`}
                    onClick={() => setSelectedFeature(parseInt(feature.number))}
                  >
                    <div className="sidebar-feature-number">{feature.number}</div>
                    <h3 className="sidebar-feature-title">{feature.title}</h3>
                  </div>
                ))}
              </div>

              {/* Right Column - Feature Content */}
              <div className="independence-content-area">
                {content.features?.map((feature) => (
                  selectedFeature === parseInt(feature.number) && (
                    <div key={feature.number} className="feature-content-display">
                      <div className="feature-content-header">
                        <div className="feature-content-number">{feature.number}</div>
                        <h2 className="feature-content-title">{feature.title}</h2>
                      </div>

                      {/* Feature 1: Reasons */}
                      {feature.reasons && (
                        <div className="feature-reasons">
                          {feature.reasons.map((reason, idx) => (
                            <div key={idx} className="feature-reason-item">
                              <div className="feature-reason-label">{reason.label}</div>
                              <p className="feature-reason-text">{reason.text}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Feature 2: Quote + Explanation + Example */}
                      {feature.quote && !feature.points && (
                        <div className="feature-forward">
                          <blockquote className="feature-quote">{feature.quote}</blockquote>
                          <p className="feature-explanation">{feature.explanation}</p>
                          <div className="feature-example">{feature.example}</div>
                        </div>
                      )}
                      
                      {/* Feature 3: Quote + Explanation + Points */}
                      {feature.points && (
                        <div className="feature-inheritance">
                          <blockquote className="feature-quote feature-quote-purple">{feature.quote}</blockquote>
                          <p className="feature-explanation">{feature.explanation}</p>
                          <ul className="feature-points">
                            {feature.points.map((point, idx) => (
                              <li key={idx} className="feature-point">{point}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        );

      case "interaction-layout":
        return (
          <div className="interaction-layout">
            <div className="interaction-main-text">
              {content.mainText}
            </div>
            
            <div className="interaction-feature-box">
              <h3 className="interaction-feature-title">{content.feature.title}</h3>
              <p className="interaction-feature-description">{content.feature.description}</p>
            </div>

            <div className="interaction-examples">
              <div className="interaction-examples-label">Ví dụ:</div>
              <div className="interaction-examples-grid">
                {content.examples?.map((example, idx) => (
                  <div key={idx} className="interaction-example-card">
                    <div className="example-era">{example.era}</div>
                    <div className="example-dominant">{example.dominant}</div>
                    <div className="example-description">{example.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "action-reaction-layout":
        return (
          <div className="action-reaction-layout">
            <div className="action-reaction-grid">
              {/* Left Box - Thúc đẩy */}
              <div className="action-box positive-box">
                <div className="action-icon-circle positive-icon">
                  {content.leftBox.icon}
                </div>
                <h2 className="action-title positive-title">{content.leftBox.title}</h2>
                <div className="action-subtitle">{content.leftBox.subtitle}</div>
                <p className="action-description">{content.leftBox.description}</p>
                
                <div className="action-highlight positive-highlight">
                  {content.leftBox.highlight}
                </div>
                
                <ul className="action-points">
                  {content.leftBox.points.map((point, idx) => (
                    <li key={idx} className="action-point positive-point">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Box - Kiềm hãm */}
              <div className="action-box negative-box">
                <div className="action-icon-circle negative-icon">
                  {content.rightBox.icon}
                </div>
                <h2 className="action-title negative-title">{content.rightBox.title}</h2>
                <div className="action-subtitle">{content.rightBox.subtitle}</div>
                <p className="action-description">{content.rightBox.description}</p>
                
                <div className="action-highlight negative-highlight">
                  {content.rightBox.highlight}
                </div>
                
                <ul className="action-points">
                  {content.rightBox.points.map((point, idx) => (
                    <li key={idx} className="action-point negative-point">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return <p>Nội dung slide</p>;
    }
  }
}
