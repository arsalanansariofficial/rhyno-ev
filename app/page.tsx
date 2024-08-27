import type { Metadata } from 'next';

import Home from '@/_components/home';

import rhynoEv from '../public/about/rhyno-ev.json';

export const metadata: Metadata = {
  title: rhynoEv.main.home.meta.title,
  description: rhynoEv.main.home.meta.description
};

export default function HomePage() {
  return <Home />;
}
