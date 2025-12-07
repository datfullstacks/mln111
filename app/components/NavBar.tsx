'use client';

export type NavKey = 'presentation' | 'theory' | 'regions' | 'library' | 'game' | 'ai-usage' | 'about';

const navLinks: { key: NavKey; label: string; href?: string }[] = [
  { key: 'presentation', label: 'Trang chủ', href: '/' },
  { key: 'regions', label: 'Khám phá ba miền', href: '/#regions' },
  { key: 'game', label: 'Game', href: '/#game' },
  { key: 'ai-usage', label: 'AI Usage', href: '/ai-usage' },
  { key: 'about', label: 'About us', href: '/about' }
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
          {navLinks.map(link =>
            link.href ? (
              <a key={link.key} className={current === link.key ? 'active' : ''} href={link.href}>
                {link.label}
              </a>
            ) : (
              <button
                key={link.key}
                className={current === link.key ? 'active' : ''}
                onClick={() => onNavigate(link.key)}
                type="button"
              >
                {link.label}
              </button>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
