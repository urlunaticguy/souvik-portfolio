import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'My Portfolio App',
  description: 'Auth flow demo using cookies',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className + ' bg-black min-h-screen'}>
        {children}
      </body>
    </html>
  );
}
