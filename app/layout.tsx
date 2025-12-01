import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Văn hóa ba miền',
  description: 'Khám phá văn hóa Bắc - Trung - Nam, thư viện tri thức và game dân gian tương tác.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
