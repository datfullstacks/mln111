import { academicIntegrity, aiTools, aiUsageGoals, creativeAiUses, sourceRefs, teamAssignments, verificationSteps } from '@/lib/data';

export function AIUsage() {
  return (
    <section className="container section page-section">
      <div className="section-head">
        <span className="eyebrow">Tài liệu tham khảo + AI Usage</span>
        <h1>Nguồn, công cụ hỗ trợ và quy trình kiểm chứng</h1>
        <p>
          AI được dùng như công cụ hỗ trợ học tập, tổ chức ý tưởng và trình bày sản phẩm sáng tạo;
          không thay thế trách nhiệm nghiên cứu, phân tích và kiểm chứng của nhóm sinh viên.
        </p>
      </div>

      <div className="ai-goal-grid">
        {aiUsageGoals.map(goal => (
          <article key={goal.title} className="info-card">
            <span className="eyebrow">AI Usage</span>
            <h2>{goal.title}</h2>
            <p>{goal.body}</p>
          </article>
        ))}
      </div>

      <div className="two-column">
        <article className="info-card">
          <span className="eyebrow">Phân công</span>
          <h2>Nhóm thực hiện</h2>
          <ul className="assignment-list">
            {teamAssignments.map(member => (
              <li key={member.name}>
                <strong>{member.name}</strong>
                <span>{member.task}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="info-card">
          <span className="eyebrow">Kiểm chứng</span>
          <h2>4 bước xử lý thông tin</h2>
          <ol className="ordered-list">
            {verificationSteps.map(step => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </div>

      <div className="section-head compact">
        <span className="eyebrow">AI Usage</span>
        <h2>Công cụ đã sử dụng</h2>
      </div>
      <div className="card-grid">
        {aiTools.map(tool => (
          <article key={tool.name} className="info-card">
            <span className="eyebrow">{tool.name}</span>
            <h3>Mục đích sử dụng</h3>
            <p>{tool.purpose}</p>
            <h4>Kết quả</h4>
            <p>{tool.result}</p>
            <h4>Chỉnh sửa và kiểm chứng</h4>
            <p>{tool.verification}</p>
            {tool.links ? (
              <div className="source-links">
                {tool.links.map(link => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <div className="section-head compact">
        <span className="eyebrow">Ứng dụng sáng tạo</span>
        <h2>AI hỗ trợ quy trình học tập và thiết kế</h2>
      </div>
      <div className="ai-compact-grid">
        {creativeAiUses.map(use => (
          <article key={use.title} className="mini-card">
            <strong>{use.title}</strong>
            <p>{use.body}</p>
          </article>
        ))}
      </div>

      <div className="two-column integrity-grid">
        {academicIntegrity.map(item => (
          <article key={item.title} className="info-card">
            <span className="eyebrow">Liêm chính</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <div className="section-head compact">
        <span className="eyebrow">Nguồn nền</span>
        <h2>Tài liệu tham khảo chính</h2>
      </div>
      <div className="reference-list">
        {sourceRefs.map(source => (
          <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="reference-item">
            <strong>{source.title}</strong>
            <span>{source.publisher}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
