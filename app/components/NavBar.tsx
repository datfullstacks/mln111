'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type NavKey =
  | 'home'
  | 'ai-usage';

const navLinks = [
  { key: 'home', label: 'Trang chủ', href: '/' },
  { key: 'ai-usage', label: 'Nguồn & AI Usage', href: '/ai-usage' }
] as const;

type Props = {
  current?: NavKey;
  onNavigate?: (key: NavKey) => void;
};

function normalizePath(pathname: string | null) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/$/, '');
}

export function NavBar({ current, onNavigate }: Props) {
  const pathname = normalizePath(usePathname());

  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Điều hướng chính">
        <Link href="/" className="brand-mark" onClick={() => onNavigate?.('home')}>
          <span className="brand-symbol">54</span>
          <span>
            <strong>Dân tộc Việt Nam</strong>
            <small>Một Việt Nam đoàn kết</small>
          </span>
        </Link>

        <div className="nav-links">
          {navLinks.map(link => {
            const isActive = current === link.key || pathname === link.href;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={isActive ? 'active' : ''}
                onClick={() => onNavigate?.(link.key)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
