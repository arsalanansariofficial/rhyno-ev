'use client';

import { useState } from 'react';

import Link from 'next/link';

import Autoplay from 'embla-carousel-autoplay';
import * as ShadCarousel from '@/_components/ui/carousel';

import Header from '@/_components/header';
import Footer from '@/_components/footer';

import { cn } from '@/_lib/utils';

import rhynoEv from '../../public/about/rhyno-ev.json';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl p-4 sm:px-6 md:px-12 lg:px-24">
          <h1 className="content-center rounded-xl bg-gradient-to-r from-[#cc2b5e] to-[#753a88] p-8 text-center text-xl font-bold leading-none tracking-tighter text-sky-50 sm:p-8 md:min-h-screen md:text-5xl lg:text-5xl">
            {rhynoEv.main.home.tagline}
          </h1>
        </section>

        {rhynoEv.main.vehicles.vehicleList.map((vehicle, index) => (
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
              {rhynoEv.main.home.usp.map((usp, index) => {
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
          <Link
            href={rhynoEv.nav.prebook.href}
            className="text-white rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium shadow"
          >
            {rhynoEv.nav.prebook.title}
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Vehicle(props: {
  vehicle: typeof rhynoEv.main.vehicles.defaultVehicle;
}) {
  const [variant, setVariant] = useState(rhynoEv.main.vehicles.defaultVariant);
  const images =
    props.vehicle.images[variant as keyof typeof props.vehicle.images];

  return (
    <section className="mx-auto max-w-7xl p-3 sm:px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
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

        <div className="mt-12 flex flex-col items-start text-left md:mb-0 lg:flex-grow">
          <div className="flex flex-col items-start text-left md:mb-0 lg:flex-grow">
            <div className="mb-4 flex gap-2">
              {Object.keys(props.vehicle.images).map((color, index) => {
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
                    <span className="hidden bg-black-500"></span>
                    <span className="hidden bg-blue-500"></span>
                    <span className="hidden bg-gray-500"></span>
                  </button>
                );
              })}
            </div>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              {props.vehicle.name}
            </h1>
            <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
              {props.vehicle.description}
            </p>
          </div>
        </div>

        <Link
          href={rhynoEv.nav.prebook.href}
          className="text-white rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium shadow"
        >
          {rhynoEv.nav.prebook.title}
        </Link>
      </div>
    </section>
  );
}
