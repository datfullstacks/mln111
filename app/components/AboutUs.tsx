'use client';

export function AboutUs() {
  return (
    <section className="about-hero container section">
      <div className="about-hero-inner">
        <div className="about-badge">Về dự án</div>
        <h1 className="about-title">Khám phá khác biệt văn hóa ba miền</h1>
        <p className="about-lead">
          Bộ công cụ học nhanh Triết học Mác - Lênin qua phong tục vùng miền: slide, thư viện, bản đồ, game dân gian. Nội dung được
          kiểm chứng, trải nghiệm trực quan.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Mục tiêu</h3>
          <p>
            Hỗ trợ sinh viên CQ14 thuyết trình phần “Ý thức xã hội” bằng trải nghiệm tương tác, tóm gọn lý thuyết, gắn với phong tục
            Bắc - Trung - Nam.
          </p>
        </div>
        <div className="about-card">
          <h3>Thành phần</h3>
          <ul>
            <li>Slide & câu hỏi gợi mở</li>
            <li>Thư viện tri thức (lễ hội, ẩm thực, âm nhạc)</li>
            <li>Bản đồ tương tác 3 miền</li>
            <li>Game đập niêu dân gian</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Công nghệ</h3>
          <p>Next.js (App Router), React, CSS tùy biến; tối ưu tải nhanh, dễ mở rộng nội dung và giao diện.</p>
        </div>
        <div className="about-card">
          <h3>Đóng góp</h3>
          <p>
            Góp ý thêm nội dung/ý tưởng qua issue hoặc pull request trên kho mã. Mọi nội dung học thuật đều được rà lại nguồn chính
            thống trước khi công bố.
          </p>
        </div>
      </div>
    </section>
  );
}
