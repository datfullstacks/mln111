'use client';

type NavKey = 'theory' | 'presentation' | 'regions' | 'library' | 'game';

const navLinks: { key: NavKey; label: string }[] = [
  { key: 'theory', label: 'Lý thuyết' },
  { key: 'presentation', label: 'Presentation' },
  { key: 'regions', label: 'Vùng miền' },
  { key: 'library', label: 'Thư viện' },
  { key: 'game', label: 'Game dân gian' }
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
