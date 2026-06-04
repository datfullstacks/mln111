import Link from 'next/link';
import { heroStats, sourceRefs } from '@/lib/data';

function sourceTitle(sourceId: string) {
  return sourceRefs.find(source => source.id === sourceId)?.publisher;
}

export function Hero() {
  return (
    <section className="hero-band">
      <div className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">MLN131 - Chương 6</div>
          <h1>54 dân tộc - Một Việt Nam đoàn kết</h1>
          <p>
            Website học thuật về bình đẳng, đoàn kết, tương trợ giữa các dân tộc Việt Nam: từ lý thuyết
            dân tộc trong chủ nghĩa Mác - Lênin đến chính sách, thành tựu và trách nhiệm của sinh viên.
          </p>
          <div className="hero-actions">
            <Link href="/policy" className="btn primary">
              Xem chính sách
            </Link>
            <Link href="/achievements" className="btn secondary">
              Thành tựu & quiz
            </Link>
          </div>
        </div>

        <div className="hero-panel" aria-label="Các điểm nhấn chính">
          {heroStats.map(stat => (
            <article key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <p>{stat.detail}</p>
              {stat.sourceIds.length > 0 ? (
                <small>Nguồn: {stat.sourceIds.map(sourceTitle).filter(Boolean).join(', ')}</small>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
