import type { Metadata } from 'next';

import rhynoEv from '../public/about/rhyno-ev.json';

import '@/globals.css';

export const metadata: Metadata = {
  title: rhynoEv.main.home.meta.title,
  description: rhynoEv.main.home.meta.description
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}
