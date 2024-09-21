'use client';

import { useState } from 'react';

import { DataTable } from '@/_components/ui/data-table';
import * as ShadCarousel from '@/_components/ui/carousel';

import Header from '@/_components/header';
import Footer from '@/_components/footer';

import { cn, getColumnDefinition } from '@/_lib/utils';

import rhynoEv from '../../public/about/rhyno-ev.json';
import { faArrowRight, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Vehicle({ vehicleIndex }: { vehicleIndex: number }) {
  const [variant, setVariant] = useState(rhynoEv.main.vehicles.defaultVariant);

  const vehicle = rhynoEv.main.vehicles.vehicleList[vehicleIndex];
  const images = vehicle.images[variant as keyof typeof vehicle.images];

  return (
    <>
      <Header />
      <main className="space-y-4">
        <section className="mx-auto max-w-7xl p-3 sm:px-6 md:px-12 lg:px-24">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center">
            <div className="w-full rounded-xl">
              <div>
                <div className="relative w-full">
                  <ShadCarousel.Carousel>
                    <ShadCarousel.CarouselContent>
                      {images.map((image, index) => {
                        return (
                          <ShadCarousel.CarouselItem
                            key={index}
                            className="relative"
                          >
                            <img
                              alt="hero"
                              src={image}
                              className="w-full rounded-lg object-cover object-center"
                            />
                          </ShadCarousel.CarouselItem>
                        );
                      })}
                    </ShadCarousel.CarouselContent>
                  </ShadCarousel.Carousel>
                </div>
              </div>
            </div>
            <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow lg:pl-6">
              <div className="flex flex-col items-start text-left md:mb-0 lg:flex-grow">
                <div className="mb-4 flex gap-2">
                  {Object.keys(vehicle.images).map((color, index) => {
                    return (
                      <button
                        key={index}
                        title={color}
                        onClick={() => {
                          setVariant(color);
                        }}
                        className={cn(
                          `aspect-square w-10 rounded-lg`,
                          `bg-${color}-500`,
                          color === variant && 'border-2 border-sky-800'
                        )}
                      >
                        <span className="bg-black-500 hidden"></span>
                        <span className="hidden bg-blue-500"></span>
                        <span className="hidden bg-gray-500"></span>
                      </button>
                    );
                  })}
                </div>
                <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
                  {rhynoEv.main.home.tagline}
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                  {vehicle.name}
                </h1>
                <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
                  {vehicle.description}
                </p>
              </div>
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
                        <a
                          title="read more"
                          href={`#${info.feature}`}
                          className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-500 hover:text-neutral-600 md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-xl"
                          />
                        </a>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl p-3 sm:px-6 md:px-12 lg:px-24">
          <div className="mb-8 space-y-8">
            <h2 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-3xl">
              {rhynoEv.main.vehicles.tableHeadings[0]}
            </h2>
            <DataTable
              data={vehicle.specs}
              columns={getColumnDefinition(rhynoEv.main.vehicles.tableHeaders)}
            />
          </div>
          <div className="mb-8 space-y-8">
            <h2 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-3xl">
              {rhynoEv.main.vehicles.tableHeadings[2]}
            </h2>
            <DataTable
              data={vehicle.batteryFeatures}
              columns={getColumnDefinition(rhynoEv.main.vehicles.tableHeaders)}
            />
          </div>
          <a
            href={rhynoEv.nav.prebook.href}
            className="text-white rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium shadow"
          >
            {rhynoEv.nav.prebook.title}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
