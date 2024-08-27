import React from 'react';

import Footer from '@/_components/footer';
import Header from '@/_components/header';

import rhynoEv from '../../public/about/rhyno-ev.json';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white dark:bg-dark overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap items-center justify-between">
              <div className="w-full px-4 lg:w-6/12">
                <div className="-mx-3 flex items-center sm:-mx-4">
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="py-3 sm:py-4">
                      <img
                        alt=""
                        className="w-full rounded-2xl"
                        src={rhynoEv.main.contact.people[0]}
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        alt=""
                        src={rhynoEv.main.contact.people[1]}
                        className="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="relative z-10 my-4">
                      <img
                        alt=""
                        className="w-full rounded-2xl"
                        src={rhynoEv.main.contact.people[2]}
                      />
                      <span className="absolute -bottom-7 -right-7 z-[-1] aspect-square w-40">
                        <img
                          alt="Background Pattern"
                          src={rhynoEv.main.contact.pattern}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="mt-10 lg:mt-0">
                  <h2 className="text-dark dark:text-white mb-5 text-3xl font-bold text-neutral-700 sm:text-[40px]/[48px]">
                    {rhynoEv.main.home.tagline}
                  </h2>
                  <p className="text-body-color dark:text-dark-6 mb-5 text-base text-teal-600">
                    {rhynoEv.main.about.details.history}
                  </p>
                  <p className="text-body-color dark:text-dark-6 mb-8 text-base text-teal-600">
                    {rhynoEv.main.about.details.achievement}
                  </p>
                  <a
                    href={rhynoEv.nav.prebook.href}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary bg-teal-600 px-7 py-3 text-center text-base font-medium text-black-100 hover:bg-opacity-90"
                  >
                    {rhynoEv.nav.prebook.title}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
