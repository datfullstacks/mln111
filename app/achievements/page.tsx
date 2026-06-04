import { NavBar } from '../components/NavBar';
import { Game } from '../components/Game';
import {
  achievementAreas,
  achievementMetrics,
  antiDiscriminationActions,
  solidarityCommitments,
  sourceRefs
} from '@/lib/data';

function SourceLinks({ ids }: { ids: string[] }) {
  const sources = ids.map(id => sourceRefs.find(source => source.id === id)).filter(Boolean);

  if (sources.length === 0) return null;

  return (
    <div className="source-links">
      {sources.map(source => (
        <a key={source!.id} href={source!.url} target="_blank" rel="noreferrer">
          {source!.publisher}
        </a>
      ))}
    </div>
  );
}

export default function AchievementsPage() {
  return (
    <>
      <NavBar current="achievements" />
      <main className="container section page-section achievements-page">
        <section className="achievement-hero-panel">
          <div className="section-head">
            <span className="eyebrow">Thành tựu & Đoàn kết</span>
            <h1>Phát triển vùng dân tộc thiểu số và miền núi</h1>
            <p>
              Thành tựu phát triển không chỉ nằm ở những con số hạ tầng, mà còn ở cơ hội học tập,
              chăm sóc sức khỏe, sinh kế và niềm tin vào khối đại đoàn kết toàn dân tộc.
            </p>
          </div>
          <div className="achievement-hero-stat" aria-label="5 nhóm thành tựu">
            <strong>5</strong>
            <span>nhóm thành tựu</span>
            <p>Hạ tầng, giáo dục, y tế - an sinh, kinh tế - giảm nghèo và văn hóa.</p>
          </div>
        </section>

        <section className="metric-grid achievement-metric-rail" aria-label="Số liệu thành tựu">
          {achievementMetrics.map(metric => (
            <article key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.detail}</p>
              <SourceLinks ids={metric.sourceIds} />
            </article>
          ))}
        </section>

        <section className="section-block achievement-showcase">
          <div className="section-head compact">
            <span className="eyebrow">Các lĩnh vực nổi bật</span>
            <h2>Đổi thay trong đời sống đồng bào</h2>
          </div>
          <div className="achievement-area-grid">
            {achievementAreas.map((area, index) => (
              <article key={area.title} className="info-card achievement-area-card">
                <div className="achievement-area-index">{String(index + 1).padStart(2, '0')}</div>
                <span className="eyebrow">{area.eyebrow}</span>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
                <ul>
                  {area.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <SourceLinks ids={area.sourceIds ?? []} />
              </article>
            ))}
          </div>
        </section>

        <section className="section-block split-panel action-panel">
          <div>
            <span className="eyebrow">Phê phán chia rẽ</span>
            <h2>Không kỳ thị, không tiếp tay định kiến</h2>
            <p>
              Kỳ thị dân tộc, chế giễu phong tục, lan truyền tin sai lệch hoặc kích động chia rẽ đều
              đi ngược truyền thống đoàn kết lâu đời của Việt Nam.
            </p>
          </div>
          <div className="stacked-cards">
            {antiDiscriminationActions.map(action => (
              <article key={action.title} className="mini-card">
                <span>{action.eyebrow}</span>
                <strong>{action.title}</strong>
                <p>{action.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block callout solidarity-callout">
          <div>
            <span className="eyebrow">Lời kêu gọi</span>
            <h2>54 dân tộc - 1 đại gia đình Việt Nam</h2>
            <p>
              Đoàn kết dân tộc bắt đầu từ lời nói tôn trọng, thái độ lắng nghe, hành động giúp đỡ
              và ý thức không phân biệt đối xử.
            </p>
          </div>
          <ul className="commitment-list">
            {solidarityCommitments.map(commitment => (
              <li key={commitment}>{commitment}</li>
            ))}
          </ul>
        </section>

        <Game />
      </main>
    </>
  );
}
