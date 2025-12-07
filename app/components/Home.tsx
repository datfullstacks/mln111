'use client';

import { useState, useEffect } from 'react';
import { NavBar, type NavKey } from './NavBar';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState<NavKey>('theory');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 'slide-1',
      title: 'Tiêu đề Slide 1',
      subtitle: 'Phụ đề mô tả ngắn gọn',
      layout: 'title' as const,
      content: {
        text: 'Nội dung chính của slide'
      }
    },
    {
      id: 'slide-2',
      title: 'Slide với danh sách',
      subtitle: 'Liệt kê các điểm chính',
      layout: 'list' as const,
      content: {
        items: [
          'Điểm thứ nhất cần trình bày',
          'Điểm thứ hai quan trọng',
          'Điểm thứ ba cần nhấn mạnh',
          'Điểm thứ tư bổ sung'
        ]
      }
    },
    {
      id: 'slide-3',
      title: 'Slide hai cột',
      subtitle: 'So sánh hoặc chia nội dung',
      layout: 'two-column' as const,
      content: {
        left: {
          heading: 'Cột trái',
          items: ['Điểm 1', 'Điểm 2', 'Điểm 3']
        },
        right: {
          heading: 'Cột phải',
          items: ['Điểm A', 'Điểm B', 'Điểm C']
        }
      }
    },
    {
      id: 'slide-4',
      title: 'Slide với trích dẫn',
      subtitle: 'Nhấn mạnh thông điệp quan trọng',
      layout: 'quote' as const,
      content: {
        quote: 'Đây là câu trích dẫn hoặc thông điệm chính cần nhấn mạnh trong slide này.',
        author: '- Tác giả hoặc nguồn'
      }
    },
    {
      id: 'slide-5',
      title: 'Slide kết luận',
      subtitle: 'Tổng kết và gợi mở',
      layout: 'conclusion' as const,
      content: {
        summary: 'Tóm tắt nội dung chính đã trình bày',
        keyPoints: [
          'Điểm chính 1',
          'Điểm chính 2',
          'Điểm chính 3'
        ],
        nextSteps: 'Hướng phát triển hoặc câu hỏi mở'
      }
    },
    {
      id: 'slide-6',
      title: 'Slide ba cột',
      subtitle: 'Phân chia thông tin thành 3 phần',
      layout: 'three-column' as const,
      content: {
        columns: [
          {
            heading: 'Cột 1',
            items: ['Điểm 1', 'Điểm 2', 'Điểm 3']
          },
          {
            heading: 'Cột 2',
            items: ['Điểm A', 'Điểm B', 'Điểm C']
          },
          {
            heading: 'Cột 3',
            items: ['Điểm X', 'Điểm Y', 'Điểm Z']
          }
        ]
      }
    },
    {
      id: 'slide-7',
      title: 'Slide với số liệu',
      subtitle: 'Hiển thị thống kê và con số',
      layout: 'stats' as const,
      content: {
        stats: [
          { number: '85%', label: 'Tỷ lệ thành công' },
          { number: '1.2M', label: 'Người dùng' },
          { number: '24/7', label: 'Hỗ trợ' }
        ]
      }
    },
    {
      id: 'slide-8',
      title: 'Slide tiêu đề lớn',
      subtitle: '',
      layout: 'big-title' as const,
      content: {
        mainText: 'Thông điệp chính',
        subText: 'Mô tả bổ sung cho thông điệp'
      }
    },
    {
      id: 'slide-9',
      title: 'Slide với hình ảnh',
      subtitle: 'Kết hợp text và hình',
      layout: 'image-text' as const,
      content: {
        imageUrl: 'https://via.placeholder.com/600x400',
        text: 'Mô tả hoặc giải thích cho hình ảnh. Có thể là một đoạn văn bản dài để giải thích chi tiết nội dung của hình ảnh.',
        imagePosition: 'right' as const
      }
    },
    {
      id: 'slide-10',
      title: 'Slide danh sách số',
      subtitle: 'Các bước hoặc quy trình',
      layout: 'numbered-list' as const,
      content: {
        items: [
          { title: 'Bước đầu tiên', desc: 'Mô tả chi tiết bước 1' },
          { title: 'Bước thứ hai', desc: 'Mô tả chi tiết bước 2' },
          { title: 'Bước thứ ba', desc: 'Mô tả chi tiết bước 3' },
          { title: 'Bước cuối cùng', desc: 'Mô tả chi tiết bước 4' }
        ]
      }
    },
    {
      id: 'slide-11',
      title: 'Slide so sánh',
      subtitle: 'So sánh ưu/nhược điểm',
      layout: 'comparison' as const,
      content: {
        left: {
          heading: 'Ưu điểm ✓',
          items: ['Điểm mạnh 1', 'Điểm mạnh 2', 'Điểm mạnh 3'],
          color: 'green'
        },
        right: {
          heading: 'Nhược điểm ✗',
          items: ['Điểm yếu 1', 'Điểm yếu 2', 'Điểm yếu 3'],
          color: 'red'
        }
      }
    },
    {
      id: 'slide-12',
      title: 'Slide timeline',
      subtitle: 'Dòng thời gian sự kiện',
      layout: 'timeline' as const,
      content: {
        events: [
          { year: '2020', title: 'Sự kiện 1', desc: 'Mô tả ngắn gọn' },
          { year: '2021', title: 'Sự kiện 2', desc: 'Mô tả ngắn gọn' },
          { year: '2022', title: 'Sự kiện 3', desc: 'Mô tả ngắn gọn' },
          { year: '2023', title: 'Sự kiện 4', desc: 'Mô tả ngắn gọn' }
        ]
      }
    },
    {
      id: 'slide-13',
      title: 'Slide highlight box',
      subtitle: 'Nhấn mạnh thông tin quan trọng',
      layout: 'highlight' as const,
      content: {
        boxes: [
          { icon: '💡', title: 'Ý tưởng', text: 'Nội dung ý tưởng quan trọng' },
          { icon: '⚠️', title: 'Lưu ý', text: 'Điều cần chú ý đặc biệt' },
          { icon: '✨', title: 'Điểm nổi bật', text: 'Thông tin nổi bật cần nhớ' }
        ]
      }
    },
    {
      id: 'slide-14',
      title: 'Slide table',
      subtitle: 'Bảng dữ liệu',
      layout: 'table' as const,
      content: {
        headers: ['Tiêu chí', 'Giá trị', 'Ghi chú'],
        rows: [
          ['Hàng 1', 'Dữ liệu 1', 'Ghi chú 1'],
          ['Hàng 2', 'Dữ liệu 2', 'Ghi chú 2'],
          ['Hàng 3', 'Dữ liệu 3', 'Ghi chú 3']
        ]
      }
    },
    {
      id: 'slide-15',
      title: 'Slide blank',
      subtitle: 'Slide trống để tùy chỉnh',
      layout: 'blank' as const,
      content: {
        html: '<div style="text-align: center;"><p>Nội dung tùy chỉnh HTML</p></div>'
      }
    },
    {
      id: 'slide-16',
      title: 'Slide với cards',
      subtitle: 'Hiển thị nội dung dạng thẻ',
      layout: 'cards' as const,
      content: {
        cards: [
          { icon: '🎯', title: 'Mục tiêu', desc: 'Xác định rõ mục tiêu cần đạt được' },
          { icon: '🚀', title: 'Hành động', desc: 'Thực hiện các bước cụ thể' },
          { icon: '📊', title: 'Đánh giá', desc: 'Đo lường kết quả đạt được' },
          { icon: '🔄', title: 'Cải tiến', desc: 'Điều chỉnh và tối ưu hóa' }
        ]
      }
    },
    {
      id: 'slide-17',
      title: 'Slide với process flow',
      subtitle: 'Quy trình từng bước có mũi tên',
      layout: 'process-flow' as const,
      content: {
        steps: [
          { label: 'Bước 1', desc: 'Khởi đầu' },
          { label: 'Bước 2', desc: 'Phát triển' },
          { label: 'Bước 3', desc: 'Hoàn thiện' },
          { label: 'Bước 4', desc: 'Kết thúc' }
        ]
      }
    },
    {
      id: 'slide-18',
      title: 'Slide với grid images',
      subtitle: 'Lưới hình ảnh đẹp mắt',
      layout: 'image-grid' as const,
      content: {
        images: [
          { url: 'https://via.placeholder.com/300', caption: 'Hình 1' },
          { url: 'https://via.placeholder.com/300', caption: 'Hình 2' },
          { url: 'https://via.placeholder.com/300', caption: 'Hình 3' },
          { url: 'https://via.placeholder.com/300', caption: 'Hình 4' }
        ]
      }
    },
    {
      id: 'slide-19',
      title: 'Slide với circle diagram',
      subtitle: 'Sơ đồ tròn phân chia',
      layout: 'circle-diagram' as const,
      content: {
        center: 'Chủ đề chính',
        items: [
          { text: 'Khía cạnh 1', color: '#C75739' },
          { text: 'Khía cạnh 2', color: '#FEB602' },
          { text: 'Khía cạnh 3', color: '#8CA0AC' },
          { text: 'Khía cạnh 4', color: '#4CAF50' }
        ]
      }
    },
    {
      id: 'slide-20',
      title: 'Slide với tabs',
      subtitle: 'Nội dung chia theo tab',
      layout: 'tabs' as const,
      content: {
        tabs: [
          { 
            name: 'Tab 1', 
            title: 'Nội dung Tab 1',
            content: 'Chi tiết về tab thứ nhất với thông tin quan trọng.'
          },
          { 
            name: 'Tab 2', 
            title: 'Nội dung Tab 2',
            content: 'Chi tiết về tab thứ hai với dữ liệu bổ sung.'
          },
          { 
            name: 'Tab 3', 
            title: 'Nội dung Tab 3',
            content: 'Chi tiết về tab thứ ba với kết luận.'
          }
        ]
      }
    },
    {
      id: 'slide-21',
      title: 'Slide với pyramid',
      subtitle: 'Cấu trúc phân cấp kim tự tháp',
      layout: 'pyramid' as const,
      content: {
        levels: [
          { text: 'Đỉnh cao', width: 30 },
          { text: 'Cấp độ 2', width: 50 },
          { text: 'Cấp độ 3', width: 70 },
          { text: 'Nền tảng', width: 100 }
        ]
      }
    },
    {
      id: 'slide-22',
      title: 'Slide với checklist',
      subtitle: 'Danh sách kiểm tra',
      layout: 'checklist' as const,
      content: {
        items: [
          { text: 'Mục đã hoàn thành', checked: true },
          { text: 'Mục đang thực hiện', checked: false },
          { text: 'Mục đã xong', checked: true },
          { text: 'Mục cần làm', checked: false }
        ]
      }
    },
    {
      id: 'slide-23',
      title: 'Slide với split screen',
      subtitle: 'Chia màn hình tương phản',
      layout: 'split-screen' as const,
      content: {
        left: {
          background: '#C75739',
          title: 'Trước',
          text: 'Tình trạng ban đầu với các vấn đề cần giải quyết'
        },
        right: {
          background: '#4CAF50',
          title: 'Sau',
          text: 'Kết quả sau khi áp dụng giải pháp mới'
        }
      }
    },
    {
      id: 'slide-24',
      title: 'Slide với progress bars',
      subtitle: 'Thanh tiến độ trực quan',
      layout: 'progress-bars' as const,
      content: {
        bars: [
          { label: 'Hoàn thành A', value: 90, color: '#4CAF50' },
          { label: 'Hoàn thành B', value: 75, color: '#FEB602' },
          { label: 'Hoàn thành C', value: 60, color: '#8CA0AC' },
          { label: 'Hoàn thành D', value: 45, color: '#C75739' }
        ]
      }
    },
    {
      id: 'slide-25',
      title: 'Slide với mind map',
      subtitle: 'Sơ đồ tư duy phân nhánh',
      layout: 'mind-map' as const,
      content: {
        center: 'Ý tưởng chính',
        branches: [
          { 
            title: 'Nhánh 1',
            items: ['Chi tiết 1.1', 'Chi tiết 1.2']
          },
          { 
            title: 'Nhánh 2',
            items: ['Chi tiết 2.1', 'Chi tiết 2.2']
          },
          { 
            title: 'Nhánh 3',
            items: ['Chi tiết 3.1', 'Chi tiết 3.2']
          }
        ]
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

      case 'two-column':
        return (
          <div className="layout-two-column">
            <div className="column">
              <h3>{content.left?.heading}</h3>
              <ul>
                {content.left?.items?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="column">
              <h3>{content.right?.heading}</h3>
              <ul>
                {content.right?.items?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
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

      case 'three-column':
        return (
          <div className="layout-three-column">
            {content.columns?.map((col, idx) => (
              <div key={idx} className="column">
                <h3>{col.heading}</h3>
                <ul>
                  {col.items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case 'stats':
        return (
          <div className="layout-stats">
            {content.stats?.map((stat, idx) => (
              <div key={idx} className="stat-box">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        );

      case 'big-title':
        return (
          <div className="layout-big-title">
            <h2 className="big-main-text">{content.mainText}</h2>
            {content.subText && <p className="big-sub-text">{content.subText}</p>}
          </div>
        );

      case 'image-text':
        return (
          <div className={`layout-image-text ${content.imagePosition === 'right' ? 'reverse' : ''}`}>
            <div className="image-container">
              <img src={content.imageUrl} alt="Slide image" />
            </div>
            <div className="text-container">
              <p>{content.text}</p>
            </div>
          </div>
        );

      case 'numbered-list':
        return (
          <div className="layout-numbered-list">
            {content.items?.map((item, idx) => (
              <div key={idx} className="numbered-item">
                <div className="number">{idx + 1}</div>
                <div className="content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'comparison':
        return (
          <div className="layout-comparison">
            <div className={`comparison-side ${content.left?.color}`}>
              <h3>{content.left?.heading}</h3>
              <ul>
                {content.left?.items?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={`comparison-side ${content.right?.color}`}>
              <h3>{content.right?.heading}</h3>
              <ul>
                {content.right?.items?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="layout-timeline">
            {content.events?.map((event, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year">{event.year}</div>
                <div className="timeline-content">
                  <h4>{event.title}</h4>
                  <p>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

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

      case 'table':
        return (
          <div className="layout-table">
            <table>
              <thead>
                <tr>
                  {content.headers?.map((header, idx) => (
                    <th key={idx}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows?.map((row, idx) => (
                  <tr key={idx}>
                    {row.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'blank':
        return (
          <div className="layout-blank" dangerouslySetInnerHTML={{ __html: content.html || '' }} />
        );

      case 'cards':
        return (
          <div className="layout-cards">
            {content.cards?.map((card, idx) => (
              <div key={idx} className="card-item">
                <div className="card-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        );

      case 'process-flow':
        return (
          <div className="layout-process-flow">
            {content.steps?.map((step, idx) => (
              <div key={idx} className="flow-step">
                <div className="step-content">
                  <div className="step-label">{step.label}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
                {idx < (content.steps?.length || 0) - 1 && (
                  <div className="flow-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        );

      case 'image-grid':
        return (
          <div className="layout-image-grid">
            {content.images?.map((img, idx) => (
              <div key={idx} className="grid-item">
                <img src={img.url} alt={img.caption} />
                <p className="grid-caption">{img.caption}</p>
              </div>
            ))}
          </div>
        );

      case 'circle-diagram':
        return (
          <div className="layout-circle-diagram">
            <div className="circle-center">{content.center}</div>
            <div className="circle-items">
              {content.items?.map((item, idx) => (
                <div 
                  key={idx} 
                  className="circle-item"
                  style={{ '--item-color': item.color } as React.CSSProperties}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        );

      case 'tabs':
        return (
          <div className="layout-tabs">
            <div className="tabs-header">
              {content.tabs?.map((tab, idx) => (
                <button key={idx} className={idx === 0 ? 'active' : ''}>
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="tab-content">
              <h3>{content.tabs?.[0]?.title}</h3>
              <p>{content.tabs?.[0]?.content}</p>
            </div>
          </div>
        );

      case 'pyramid':
        return (
          <div className="layout-pyramid">
            {content.levels?.map((level, idx) => (
              <div 
                key={idx} 
                className="pyramid-level"
                style={{ width: `${level.width}%` }}
              >
                {level.text}
              </div>
            ))}
          </div>
        );

      case 'checklist':
        return (
          <div className="layout-checklist">
            {content.items?.map((item, idx) => (
              <div key={idx} className={`checklist-item ${item.checked ? 'checked' : ''}`}>
                <div className="checkbox">{item.checked ? '✓' : ''}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        );

      case 'split-screen':
        return (
          <div className="layout-split-screen">
            <div 
              className="split-side left"
              style={{ background: content.left?.background }}
            >
              <h3>{content.left?.title}</h3>
              <p>{content.left?.text}</p>
            </div>
            <div 
              className="split-side right"
              style={{ background: content.right?.background }}
            >
              <h3>{content.right?.title}</h3>
              <p>{content.right?.text}</p>
            </div>
          </div>
        );

      case 'progress-bars':
        return (
          <div className="layout-progress-bars">
            {content.bars?.map((bar, idx) => (
              <div key={idx} className="progress-item">
                <div className="progress-label">{bar.label}</div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill"
                    style={{ 
                      width: `${bar.value}%`,
                      background: bar.color 
                    }}
                  ></div>
                  <span className="progress-value">{bar.value}%</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'mind-map':
        return (
          <div className="layout-mind-map">
            <div className="map-center">{content.center}</div>
            <div className="map-branches">
              {content.branches?.map((branch, idx) => (
                <div key={idx} className="branch">
                  <div className="branch-title">{branch.title}</div>
                  <div className="branch-items">
                    {branch.items?.map((item, i) => (
                      <div key={i} className="branch-item">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <p>Nội dung slide</p>;
    }
  }
}
