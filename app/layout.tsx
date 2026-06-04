import './globals.css';
import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-main',
});

export const metadata: Metadata = {
  title: '54 dân tộc - Một Việt Nam đoàn kết',
  description:
    'Website MLN131 về bình đẳng, đoàn kết, tương trợ giữa các dân tộc Việt Nam: lý thuyết Chương 6, chính sách dân tộc, thành tựu phát triển và AI Usage.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className={beVietnamPro.className}>{children}</body>
    </html>
  );
}
