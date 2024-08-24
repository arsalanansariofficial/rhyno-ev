'use client';

import Header from '@/_components/header';
import Footer from '@/_components/footer';
import { DataTable } from './ui/data-table';
import { getColumnDefinition } from '@/_lib/utils';

import rhynoEv from '../../public/about/rhyno-ev.json';

export default function Rentals() {
  return (
    <>
      <Header />
      <main>
        <DataTable
          columns={getColumnDefinition(rhynoEv.pages.compare.tableHeaders)}
          data={rhynoEv.pages.compare.comparison}
        />
      </main>
      <Footer />
    </>
  );
}
