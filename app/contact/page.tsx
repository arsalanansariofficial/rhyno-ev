import type { Metadata } from 'next';

import Contact from '@/_components/contact';

import rhynoEv from '../../public/about/rhyno-ev.json';

export const metadata: Metadata = {
  title: rhynoEv.pages.contact.meta.title,
  description: rhynoEv.pages.contact.meta.description
};

export default function ContactPage() {
  return <Contact />;
}
