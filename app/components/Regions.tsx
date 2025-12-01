import { regions } from '@/lib/data';

export function Regions() {
  return (
    <section id="regions" className="container section">
      <div className="section-head">
        <div>
          <h2>Vùng miền & điểm nhấn</h2>
          <p className="sub">Chất liệu văn hóa đặc trưng và gợi ý trải nghiệm cho từng miền.</p>
        </div>
        <div className="pill pill-ghost">Khơi gợi tò mò</div>
      </div>
      <div className="regions">
        {regions.map(region => (
          <div key={region.name} className="region-card card">
            <div className="region-meta">
              <div className="tag">{region.name}</div>
              <div className="tag">{region.badge}</div>
              <div className="tag ghost">{region.badge2}</div>
            </div>
            <h3>{region.badge2}</h3>
            <ul>
              {region.highlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
