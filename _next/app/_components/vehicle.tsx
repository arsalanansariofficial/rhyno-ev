'use client';

import Header from '@/_components/header';
import Footer from '@/_components/footer';
import { App_Vehicle } from '@/vehicles/[vehicleId]/page';

import rhynoEv from '../../public/about/rhyno-ev.json';

export default function Vehicle({ vehicle }: { vehicle: App_Vehicle }) {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center">
              <div className="w-full rounded-xl">
                <div>
                  <div className="relative w-full max-w-lg">
                    <div className="animate-blob absolute -left-4 top-0 h-72 w-72 rounded-full bg-violet-300 opacity-70 mix-blend-multiply blur-xl filter"></div>

                    <div className="animate-blob animation-delay-4000 absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-fuchsia-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
                    <div className="relative">
                      <img
                        className="mx-auto rounded-lg object-cover object-center shadow-2xl"
                        alt="hero"
                        src={vehicle.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow lg:pl-6">
                <div className="flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow">
                  <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
                    {rhynoEv.pages.home.tagline}
                  </span>
                  <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                    {vehicle.batteryFeatures[0].title}
                  </h1>
                  <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
                    {vehicle.batteryFeatures[0].description}
                  </p>
                </div>
                <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
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
                        {vehicle.keyFeatures[0].title}
                      </h2>
                      <p className="text-base leading-relaxed text-gray-400">
                        {vehicle.keyFeatures[0].description}
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
                  <div>
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
                        {vehicle.keyFeatures[1].title}
                      </h2>
                      <p className="text-base leading-relaxed text-gray-400">
                        {vehicle.keyFeatures[0].description}
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
                  <div>
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
                        {vehicle.keyFeatures[2].title}
                      </h2>
                      <p className="text-base leading-relaxed text-gray-400">
                        {vehicle.keyFeatures[2].description}
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
                  <div>
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
                        {vehicle.keyFeatures[3].title}
                      </h2>
                      <p className="text-base leading-relaxed text-gray-400">
                        {vehicle.keyFeatures[3].description}
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
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
