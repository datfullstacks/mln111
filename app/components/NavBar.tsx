'use client';

export type NavKey = 'theory' | 'presentation' | 'regions' | 'library' | 'game' | 'ai-usage' | 'about';

const navLinks: { key: NavKey; label: string }[] = [
  { key: 'theory', label: 'Trang chủ' },
  { key: 'regions', label: 'Khám phá ba miền' },
  { key: 'game', label: 'Game' },
  { key: 'ai-usage', label: 'AI Usage' },
  { key: 'about', label: 'About us' }
];

type Props = {
  current: NavKey;
  onNavigate: (key: NavKey) => void;
};

export function NavBar({ current, onNavigate }: Props) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="brand">
          <span>VN</span>
          <div>
            <strong>Văn hóa ba miền</strong>
            <div className="brand-sub">Khám phá & tương tác</div>
          </div>
        </div>
        <div className="links">
          {navLinks.map(link => (
            <button
              key={link.key}
              className={current === link.key ? 'active' : ''}
              onClick={() => onNavigate(link.key)}
              type="button"
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
