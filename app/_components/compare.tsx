'use client';

import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DataTable } from './ui/data-table';
import * as ShadCarousel from '@/_components/ui/carousel';

import Header from '@/_components/header';
import Footer from '@/_components/footer';

import { getColumnDefinition, pretty } from '@/_lib/utils';

import rhynoEv from '../../public/about/rhyno-ev.json';

export default function Compare() {
  return (
    <>
      <Header />
      <main className="space-y-4 md:space-y-12">
        {rhynoEv.pages.vehicles.vehicleList.map((vehicle, index) => {
          return (
            <section
              key={index}
              className="mx-auto max-w-7xl p-3 sm:px-6 md:px-12 lg:px-24"
            >
              <div className="mx-auto flex max-w-7xl flex-wrap items-center">
                <div className="w-full rounded-xl">
                  <div>
                    <div className="relative w-full">
                      <div className="animate-blob absolute -left-4 top-0 h-72 w-72 rounded-full bg-violet-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
                      <div className="animate-blob animation-delay-4000 absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-fuchsia-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
                      <ShadCarousel.Carousel>
                        <ShadCarousel.CarouselContent>
                          {vehicle.images.slate.map((image, index) => {
                            return (
                              <ShadCarousel.CarouselItem
                                key={index}
                                className="relative"
                              >
                                <img
                                  alt="hero"
                                  src={image}
                                  className="w-full rounded-lg object-cover object-center shadow-2xl"
                                />
                              </ShadCarousel.CarouselItem>
                            );
                          })}
                        </ShadCarousel.CarouselContent>
                      </ShadCarousel.Carousel>
                    </div>
                  </div>
                </div>
                <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:flex-grow lg:pl-6">
                  <div className="flex flex-col items-start text-left md:mb-0 lg:flex-grow">
                    <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                      {vehicle.name}
                    </h1>
                    <span className="mb-8 text-xs font-bold uppercase tracking-widest text-teal-600">
                      {vehicle.description}
                    </span>
                    <div className="mb-8 w-full space-y-8">
                      <h2 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-3xl lg:text-xl">
                        {pretty(Object.keys(vehicle).at(-2) as string)}
                      </h2>
                      <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {vehicle.keyFeatures.map((info, index) => {
                          return (
                            <div key={index}>
                              <dt className="mb-5 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <FontAwesomeIcon
                                  icon={faPaperclip}
                                  className="text-xl text-blue-600"
                                />
                              </dt>
                              <dd className="flex-grow">
                                <h2 className="mb-3 text-lg font-medium tracking-tighter text-neutral-600">
                                  {info.feature}
                                </h2>
                                <p className="text-base leading-relaxed text-gray-400">
                                  {info.description}
                                </p>
                              </dd>
                            </div>
                          );
                        })}
                      </dl>
                      <h2 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-3xl lg:text-xl">
                        {pretty(Object.keys(vehicle).at(-1) as string)}
                      </h2>
                      <DataTable
                        data={vehicle.batteryFeatures}
                        columns={getColumnDefinition(
                          rhynoEv.pages.vehicles.tableHeaders
                        )}
                      />
                    </div>
                    <a
                      href={rhynoEv.nav.prebook.href}
                      className="text-white rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium shadow"
                    >
                      {rhynoEv.nav.prebook.title}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="mx-auto max-w-7xl space-y-4 p-3 sm:px-6 md:px-12 lg:px-24">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold leading-none tracking-tighter text-neutral-600">
              {rhynoEv.pages.vehicles.tableHeadings[0]}
            </h3>
            <DataTable
              data={rhynoEv.pages.compare.comparison}
              columns={getColumnDefinition(rhynoEv.pages.compare.tableHeaders)}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
