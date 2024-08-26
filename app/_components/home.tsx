'use client';

import Header from '@/_components/header';
import Footer from '@/_components/footer';
import { useState } from 'react';
import * as ShadCarousel from '@/_components/ui/carousel';

import rhynoEv from '../../public/about/rhyno-ev.json';
import { cn } from '@/_lib/utils';
import Autoplay from 'embla-carousel-autoplay';

type App_Vehicle = {
  id: string;
  name: string;
  images: {
    slate: string[];
    blue: string[];
    teal: string[];
  };
  colors: string;
  description: string;
  specs: {
    feature: string;
    description: string;
  }[];
  keyFeatures: {
    feature: string;
    description: string;
  }[];
  batteryFeatures: {
    feature: string;
    description: string;
  }[];
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl p-4 sm:px-6 md:px-12 lg:px-24">
          <h1 className="content-center rounded-xl bg-gradient-to-r from-[#cc2b5e] to-[#753a88] p-8 text-center text-xl font-bold leading-none tracking-tighter text-sky-50 sm:p-8 md:min-h-screen md:text-5xl lg:text-5xl">
            {rhynoEv.pages.home.tagline}
          </h1>
        </section>

        {rhynoEv.pages.vehicles.vehicleList.map((vehicle, index) => (
          <Vehicle key={index} vehicle={vehicle} />
        ))}

        <section className="mx-auto max-w-7xl space-y-8 p-4 sm:px-6 md:px-12 lg:px-24">
          <h1 className="content-center text-xl font-bold leading-none tracking-tighter text-neutral-600 md:text-4xl">
            Our USP
          </h1>

          <ShadCarousel.Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 2000 })]}
          >
            <ShadCarousel.CarouselContent>
              {rhynoEv.pages.home.usp.map((usp, index) => {
                return (
                  <ShadCarousel.CarouselItem
                    key={index}
                    className="max-h-min space-y-4"
                  >
                    <h2 className="text-xl font-bold text-neutral-600">
                      {usp.title}
                    </h2>
                    <p className="text-teal-600">{usp.description}</p>
                  </ShadCarousel.CarouselItem>
                );
              })}
            </ShadCarousel.CarouselContent>
          </ShadCarousel.Carousel>
        </section>

        <section className="fixed bottom-16 right-4 hidden">
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

function Vehicle({ vehicle }: { vehicle: App_Vehicle }) {
  const [variant, setVariant] = useState('slate');
  const images = vehicle.images[variant as keyof typeof vehicle.images];

  return (
    <section className="mx-auto max-w-7xl p-3 sm:px-6 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center">
        <div className="w-full rounded-xl">
          <div>
            <div className="relative w-full">
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

        <div className="mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow lg:pl-6">
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
                    <span className="hidden bg-slate-500"></span>
                    <span className="hidden bg-blue-500"></span>
                    <span className="hidden bg-teal-500"></span>
                  </button>
                );
              })}
            </div>

            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              {vehicle.name}
            </h1>
            <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
              {vehicle.description}
            </p>
          </div>
        </div>

        <a
          href={rhynoEv.nav.prebook.href}
          className="text-white rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium shadow"
        >
          {rhynoEv.nav.prebook.title}
        </a>
      </div>
    </section>
  );
}
