import { Metadata } from 'next';

import Prebook from '@/_components/prebook';

import rhynoEv from '../../public/about/rhyno-ev.json';

export const metadata: Metadata = {
  title: rhynoEv.pages.rentals.meta.title,
  description: rhynoEv.pages.rentals.meta.description
};

export default function PrebookPage() {
  return <Prebook />;
}
