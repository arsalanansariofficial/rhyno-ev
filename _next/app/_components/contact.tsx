'use client';

import { toast } from 'sonner';

import Header from '@/_components/header';
import rhynoEv from '../../public/about/rhyno-ev.json';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                  {rhynoEv.pages.contact.tagline}
                </p>

                <div className="mt-8 flex flex-col gap-2">
                  <a href="#" className="text-2xl font-bold text-pink-600">
                    {rhynoEv.pages.contact.contactInfo.phone}
                  </a>

                  <a href="#" className="text-2xl font-bold text-slate-700">
                    {rhynoEv.pages.contact.contactInfo.email}
                  </a>

                  <address className="not-italic">
                    {rhynoEv.pages.contact.contactInfo.address}
                  </address>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form
                  action="#"
                  className="space-y-4"
                  onSubmit={event => {
                    event.preventDefault();
                    toast(rhynoEv.pages.contact.successMessage);
                  }}
                >
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      placeholder="Name"
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        id="email"
                        placeholder="Email address"
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        required
                        type="tel"
                        id="phone"
                        placeholder="Phone Number"
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      required
                      rows={8}
                      id="message"
                      placeholder="Message"
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-black-100 px-5 py-3 font-medium text-white-100 sm:w-auto"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
