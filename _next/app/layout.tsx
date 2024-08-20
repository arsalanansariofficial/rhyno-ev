import type { Metadata } from 'next';

import Header from '@/_components/header';
import { Toaster } from './_components/ui/sonner';

import './globals.css';

export const metadata: Metadata = {
  title: 'Rhyno EV by Arsalan Ansari',
  description:
    "Let's Elevate Your Ride Experience With Rhyno - Where Superiority Meets Style."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-poppins antialiased">
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
