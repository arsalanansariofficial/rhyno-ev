'use client';

import Header from '@/_components/header';
import Footer from '@/_components/footer';

import rhynoEv from '../../public/about/rhyno-ev.json';
import { getColumnDefinition } from '@/_lib/utils';
import { DataTable } from './ui/data-table';
import vehicle from './vehicle';

export default function Rentals() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl space-y-4 p-3 sm:px-6 sm:py-8 md:px-12 lg:px-24">
          <h1 className="text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
            {rhynoEv.pages.rentals.meta.description}
          </h1>
          <ul className="space-y-2">
            {rhynoEv.pages.rentals.meta.info.map((info, index) => {
              return (
                <p
                  key={index}
                  className="text-left text-base leading-relaxed text-gray-500"
                >
                  {info}
                </p>
              );
            })}
          </ul>
        </section>

        <section className="mx-auto max-w-7xl space-y-4 p-3 sm:px-6 sm:py-8 md:px-12 lg:px-24">
          <h2 className="text-3xl font-bold leading-none tracking-tighter text-neutral-600">
            {rhynoEv.pages.rentals.meta.headings[0]}
          </h2>
          <div>
            <DataTable
              columns={getColumnDefinition(rhynoEv.pages.rentals.tableHeaders)}
              data={rhynoEv.pages.rentals.pricing}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
