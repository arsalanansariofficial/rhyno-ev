import type { Metadata } from 'next';

import Rentals from '@/_components/rentals';

import rhynoEv from '../../public/about/rhyno-ev.json';

export const metadata: Metadata = {
  title: rhynoEv.pages.rentals.meta.title,
  description: rhynoEv.pages.rentals.meta.description
};

export default function RentasPage() {
  return <Rentals />;
}
