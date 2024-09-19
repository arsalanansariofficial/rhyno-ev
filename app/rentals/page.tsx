import type { Metadata } from 'next';

import Rentals from '@/_components/rentals';

import rhynoEv from '../../public/about/rhyno-ev.json';

export const metadata: Metadata = {
  title: rhynoEv.main.rentals.meta.title,
  description: rhynoEv.main.rentals.meta.description
};

export default function RentasPage() {
  return <Rentals />;
}
