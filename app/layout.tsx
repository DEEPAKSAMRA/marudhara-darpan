import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marudhara Darpan — राजस्थान करेंट अफेयर्स',
  description: 'RPSC · RSMSSB · CET · पटवारी · लेक्चरर · जेल प्रहरी · वनपाल · Lab Asst. के लिए दैनिक करेंट अफेयर्स',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#EF9F27',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
