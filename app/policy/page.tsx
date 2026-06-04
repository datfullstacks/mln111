import { NavBar } from '../components/NavBar';
import { partyViewpoints, policyPillars, sourceRefs } from '@/lib/data';

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

export default function PolicyPage() {
  return (
    <>
      <NavBar current="policy" />
      <main className="container section page-section">
        <div className="section-head">
          <span className="eyebrow">Quan điểm & Chính sách</span>
          <h1>Chính sách dân tộc: bình đẳng, đoàn kết, tương trợ</h1>
          <p>
            Trang này hệ thống hóa quan điểm của Đảng, Nhà nước và chính sách dân tộc theo 5 mặt:
            chính trị, kinh tế, văn hóa, xã hội, an ninh - quốc phòng.
          </p>
        </div>

        <section className="section-block">
          <div className="section-head compact">
            <span className="eyebrow">Quan điểm chỉ đạo</span>
            <h2>Ba điểm cần nắm</h2>
          </div>
          <div className="card-grid">
            {partyViewpoints.map(item => (
              <article key={item.title} className="info-card">
                <span className="eyebrow">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>
                  {item.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-head compact">
            <span className="eyebrow">5 mặt chính sách</span>
            <h2>Từ chủ trương đến đời sống</h2>
          </div>
          <div className="policy-list">
            {policyPillars.map((pillar, index) => (
              <article key={pillar.id} className="policy-card">
                <div className="policy-index">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h3>{pillar.title}</h3>
                  <p className="lead">{pillar.summary}</p>
                  <p>{pillar.plain}</p>
                  <ul>
                    {pillar.examples.map(example => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                  <SourceLinks ids={pillar.sourceIds} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
