import type { Metadata } from 'next';

import About from '@/_components/about';

import rhynoEv from '../../public/about/rhyno-ev.json';

export const metadata: Metadata = {
  title: rhynoEv.main.about.meta.title,
  description: rhynoEv.main.about.meta.description
};

export default function AboutPage() {
  return <About />;
}
