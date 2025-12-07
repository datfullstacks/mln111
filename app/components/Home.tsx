'use client';

import { useState, useEffect } from 'react';
import { NavBar, type NavKey } from './NavBar';
import { InteractiveMap } from './InteractiveMap';
import { BackgroundSvg } from './BackgroundSvg';
import { DongSonBackground } from './DongSonBackground';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState<NavKey>('theory');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 'slide-1',
      title: 'Mở đầu',
      subtitle: 'Tồn tại xã hội quyết định ý thức xã hội',
      layout: 'title' as const,
      content: {
        text: 'Việt Nam là một quốc gia thống nhất, nhưng khi đi từ Bắc vào Nam, phong tục tập quán lại thay đổi rõ rệt. Tại sao vẫn là người Việt, vẫn chung lịch sử, chung dân tộc… mà văn hóa lại khác nhau đến vậy? Hôm nay, chúng ta sẽ lý giải điều đó bằng cách tiếp cận của triết học: Tồn tại xã hội quyết định ý thức xã hội.'
      }
    },
    {
      id: 'slide-2',
      title: 'Khái niệm tồn tại xã hội',
      subtitle: 'Ba yếu tố cấu thành',
      layout: 'highlight' as const,
      content: {
        boxes: [
          { icon: '⚙️', title: 'Phương thức sản xuất', text: 'Cách con người sản xuất ra của cải vật chất' },
          { icon: '🏔️', title: 'Điều kiện tự nhiên', text: 'Môi trường địa lý, khí hậu nơi sinh sống' },
          { icon: '👥', title: 'Dân cư', text: 'Số lượng, phân bố và quá trình di cư' }
        ]
      }
    },
    {
      id: 'slide-13',
      title: 'Ý thức xã hội là gì?',
      subtitle: 'Đời sống tinh thần của cộng đồng',
      layout: 'quote' as const,
      content: {
        quote: 'Ý thức xã hội là đời sống tinh thần của một cộng đồng: những quan niệm, thói quen, tập quán, truyền thống. Chính từ đời sống vật chất — tức tồn tại xã hội — mà những phong tục này hình thành.',
        author: '- Triết học Mác - Lênin'
      }
    },
    {
      id: 'slide-14',
      title: 'Tồn tại xã hội → Ý thức xã hội',
      subtitle: 'Mối quan hệ quyết định',
      layout: 'big-title' as const,
      content: {
        mainText: 'Điều kiện sống → Phong tục',
        subText: 'Triết học khẳng định: con người sống như thế nào thì tư duy và văn hóa của họ sẽ như thế ấy.'
      }
    },
    {
      id: 'slide-15',
      title: 'Ý thức xã hội thông thường → Tâm lý xã hội',
      subtitle: 'Thói quen hằng ngày',
      layout: 'list' as const,
      content: {
        items: [
          'Ý thức thông thường: cách ăn nói, chào hỏi, cư xử',
          'Tâm lý vùng miền hình thành từ những thói quen này',
          'Tâm lý ấy bền vững, ổn định',
          'Truyền từ đời này sang đời khác',
          'Tạo nên bản sắc văn hóa đặc trưng'
        ]
      }
    },
    {
      id: 'slide-16',
      title: 'Tổng hợp 3 vùng miền',
      layout: 'interactive-map' as const,
      content: {
        mapComponent: true
      }
    },
    {
      id: 'slide-17',
      title: 'Kết luận',
      subtitle: 'Đa dạng trong thống nhất',
      layout: 'conclusion' as const,
      content: {
        summary: 'Mặc dù khác biệt, nhưng chính sự đa dạng phong tục đã tạo ra nét đẹp văn hóa Việt Nam.',
        keyPoints: [
          'Tồn tại xã hội định hình văn hóa',
          'Văn hóa làm nên bản sắc của mỗi vùng miền',
          'Sự khác biệt làm phong phú bản sắc dân tộc'
        ],
        nextSteps: 'Hãy tự hào và gìn giữ những nét đẹp văn hóa vùng miền của chúng ta!'
      }
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 50);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 50);
  };

  const goToFirstSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(0);
      setIsDropdownOpen(false);
      setIsAnimating(false);
    }, 50);
  };

  const goToLastSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(slides.length - 1);
      setIsDropdownOpen(false);
      setIsAnimating(false);
    }, 50);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsDropdownOpen(false);
      setIsAnimating(false);
    }, 50);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToFirstSlide();
      } else if (e.key === 'End') {
        e.preventDefault();
        goToLastSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isAnimating]);

  return (
    <>
      <NavBar current={currentPage} onNavigate={setCurrentPage} />
      
      {/* Bộ điều khiển ở góc trái */}
      <div className="slide-controls-left">
        <button onClick={prevSlide} className="nav-btn" title="Slide trước">
          ↑
        </button>
        
        <div className="slide-counter">
          {currentSlide + 1}/{slides.length}
        </div>
        
        <button onClick={nextSlide} className="nav-btn" title="Slide sau">
          ↓
        </button>

        <div className="divider"></div>

        {/* Dropdown menu */}
        <div className="dropdown-container">
          <button 
            onClick={toggleDropdown} 
            className="nav-btn dropdown-toggle" 
            title="Công cụ điều khiển"
          >
            ☰
          </button>
          
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={goToFirstSlide} className="dropdown-item">
                ⏮ Trang đầu
              </button>
              <button onClick={goToLastSlide} className="dropdown-item">
                ⏭ Trang cuối
              </button>
              <div className="dropdown-divider"></div>
              <div className="dropdown-label">Đi đến trang:</div>
              {slides.map((slide, index) => (
                <button 
                  key={slide.id}
                  onClick={() => goToSlide(index)} 
                  className={`dropdown-item ${index === currentSlide ? 'active' : ''}`}
                >
                  {index + 1}. {slide.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <main className="presentation-mode">
        <BackgroundSvg />
        <DongSonBackground />
        <div className="slide-container">
          <div className={`slide ${isAnimating ? 'animating' : ''}`}>
            <h1 className="slide-title-animate" key={`title-${currentSlide}`}>{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <p className="slide-subtitle slide-subtitle-animate" key={`subtitle-${currentSlide}`}>{slides[currentSlide].subtitle}</p>
            )}
            <div className="slide-content slide-content-animate" key={`content-${currentSlide}`}>
              {renderSlideContent(slides[currentSlide])}
            </div>
          </div>
        </div>
      </main>
    </>
  );

  function renderSlideContent(slide: typeof slides[number]) {
    const { layout, content } = slide;

    switch (layout) {
      case 'title':
        return (
          <div className="layout-title">
            <p className="text-large">{content.text}</p>
          </div>
        );

      case 'list':
        return (
          <div className="layout-list">
            <ul>
              {content.items?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        );

      case 'quote':
        return (
          <div className="layout-quote">
            <blockquote>
              <p className="quote-text">"{content.quote}"</p>
              <footer className="quote-author">{content.author}</footer>
            </blockquote>
          </div>
        );

      case 'conclusion':
        return (
          <div className="layout-conclusion">
            <p className="conclusion-summary">{content.summary}</p>
            <div className="key-points">
              <h3>Điểm chính:</h3>
              <ul>
                {content.keyPoints?.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
            <p className="next-steps">{content.nextSteps}</p>
          </div>
        );

      case 'big-title':
        return (
          <div className="layout-big-title">
            <h2 className="big-main-text">{content.mainText}</h2>
            {content.subText && <p className="big-sub-text">{content.subText}</p>}
          </div>
        );

      case 'interactive-map':
        return <InteractiveMap />;

      case 'highlight':
        return (
          <div className="layout-highlight">
            {content.boxes?.map((box, idx) => (
              <div key={idx} className="highlight-box">
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
