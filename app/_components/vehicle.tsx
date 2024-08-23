'use client';

import { useState } from 'react';
import * as ShadCarousel from '@/_components/ui/carousel';

import { cn, getColumnDefinition, pretty } from '@/_lib/utils';
import Header from '@/_components/header';
import Footer from '@/_components/footer';
import { DataTable } from './ui/data-table';

import rhynoEv from '../../public/about/rhyno-ev.json';

export default function Vehicle({ vehicleIndex }: { vehicleIndex: number }) {
  const [variant, setVariant] = useState('slate');

  const vehicle = rhynoEv.pages.vehicles.vehicleList[vehicleIndex];

  const title = vehicle.batteryFeatures[vehicleIndex].feature;
  const description = vehicle.batteryFeatures[vehicleIndex].description;
  const images = vehicle.images[variant as keyof typeof vehicle.images];

  const columns = getColumnDefinition<{
    feature: string;
    description: string;
  }>(['Feature', 'Description']);

  return (
    <>
      <Header />
      <main className="space-y-4">
        <section className="mx-auto max-w-7xl p-3 sm:px-6 md:px-12 lg:px-24">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center">
            <div className="w-full rounded-xl">
              <div>
                <div className="max-w-lg-- relative w-full">
                  <div className="animate-blob absolute -left-4 top-0 h-72 w-72 rounded-full bg-violet-300 opacity-70 mix-blend-multiply blur-xl filter"></div>

                  <div className="animate-blob animation-delay-4000 absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-fuchsia-300 opacity-70 mix-blend-multiply blur-xl filter"></div>

                  <ShadCarousel.Carousel>
                    <ShadCarousel.CarouselContent>
                      {images.map((image, index) => {
                        return (
                          <ShadCarousel.CarouselItem
                            key={index}
                            className="relative"
                          >
                            <img
                              className="w-full rounded-lg object-cover object-center shadow-2xl"
                              alt="hero"
                              src={image}
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
              <div className="flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow">
                <div className="mb-4 flex w-1/3 gap-2">
                  {Object.keys(vehicle.images).map((color, index) => {
                    return (
                      <button
                        key={index}
                        title={color}
                        onClick={() => {
                          setVariant(color);
                        }}
                        className={cn(
                          'aspect-square w-10 rounded-lg',
                          `bg-${color}-500`,
                          color === variant && 'border-2 border-sky-800'
                        )}
                      ></button>
                    );
                  })}
                </div>
                <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
                  {rhynoEv.pages.home.tagline}
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                  {title}
                </h1>
                <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
              <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {vehicle.keyFeatures.map((info, index) => {
                  return (
                    <div key={index}>
                      <dt className="mb-5 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-aperture h-6 w-6"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <circle cx="12" cy="12" r="9"></circle>
                          <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                          <line
                            x1="3.6"
                            y1="15"
                            x2="14.15"
                            y2="15"
                            transform="rotate(72 12 12)"
                          ></line>
                          <line
                            x1="3.6"
                            y1="15"
                            x2="14.15"
                            y2="15"
                            transform="rotate(144 12 12)"
                          ></line>
                          <line
                            x1="3.6"
                            y1="15"
                            x2="14.15"
                            y2="15"
                            transform="rotate(216 12 12)"
                          ></line>
                          <line
                            x1="3.6"
                            y1="15"
                            x2="14.15"
                            y2="15"
                            transform="rotate(288 12 12)"
                          ></line>
                        </svg>
                      </dt>
                      <dd className="flex-grow">
                        <h2 className="mb-3 text-lg font-medium tracking-tighter text-neutral-600">
                          {info.feature}
                        </h2>
                        <p className="text-base leading-relaxed text-gray-400">
                          {info.description}
                        </p>
                        <a
                          href="#"
                          className="mt-6 inline-flex items-center font-semibold text-blue-500 hover:text-neutral-600 md:mb-2 lg:mb-0"
                          title="read more"
                        >
                          Learn More
                          <svg
                            className="ml-2 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            fill="currentColor"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                          </svg>
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
              Specifications
            </h2>
            <DataTable columns={columns} data={vehicle.specs} />
          </div>

          <div className="mb-8 space-y-8">
            <h2 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-3xl">
              {pretty(Object.keys(vehicle).at(-1) as string)}
            </h2>
            <DataTable columns={columns} data={vehicle.batteryFeatures} />
          </div>

          <a
            href={rhynoEv.nav.prebook.href}
            className="text-white rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium shadow"
          >
            Buy Now
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
