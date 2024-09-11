'use client';

import Header from '@/_components/header';
import Footer from '@/_components/footer';
import { DataTable } from './ui/data-table';
import * as ShadCarousel from '@/_components/ui/carousel';
import { getColumnDefinition, pretty } from '@/_lib/utils';

import rhynoEv from '../../public/about/rhyno-ev.json';

export default function Compare() {
  const columns = getColumnDefinition<{
    feature: string;
    description: string;
  }>(['Feature', 'Description']);

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
                    <div className="max-w-lg-- relative w-full">
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

                <div className="lg:w-1/2-- mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:flex-grow lg:pl-6">
                  <div className="lg:w-1/2-- flex flex-col items-start text-left md:mb-0 lg:flex-grow">
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
                                  <line
                                    x1="3.6"
                                    y1="15"
                                    x2="14.15"
                                    y2="15"
                                  ></line>
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
                              </dd>
                            </div>
                          );
                        })}
                      </dl>

                      <h2 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-3xl lg:text-xl">
                        {pretty(Object.keys(vehicle).at(-1) as string)}
                      </h2>
                      <DataTable
                        columns={columns}
                        data={vehicle.batteryFeatures}
                      />
                    </div>
                    <a
                      href={rhynoEv.nav.prebook.href}
                      className="text-white rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium shadow"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="mx-auto max-w-7xl p-3 sm:px-6 md:px-12 lg:px-24">
          <ul className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-4 lg:space-y-0">
            {rhynoEv.pages.vehicles.vehicleList.map((vehicle, index) => {
              return (
                <li key={index} className="space-y-4">
                  <h3 className="text-center-- text-3xl font-bold leading-none tracking-tighter text-neutral-600">
                    {vehicle.name}
                  </h3>
                  <DataTable columns={columns} data={vehicle.specs} />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
