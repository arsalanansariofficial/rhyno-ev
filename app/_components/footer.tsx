'use client';

import * as faSolid from '@fortawesome/free-solid-svg-icons';
import * as faBrand from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import rhynoEv from '../../public/about/rhyno-ev.json';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-8 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <img
                src={rhynoEv.meta.logo}
                alt={rhynoEv.main.home.tagline}
                className="aspect-video w-8 sm:w-12"
              />
            </div>
            <p className="mt-6 text-center leading-relaxed text-gray-500 sm:max-w-md sm:text-left">
              {rhynoEv.main.home.tagline}
            </p>
            <ul className="mt-8 flex justify-center gap-4 sm:justify-start">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={rhynoEv.nav.instagram.href}
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">{rhynoEv.nav.instagram.title}</span>
                  <FontAwesomeIcon
                    icon={faBrand.faInstagram}
                    className="text-xl"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={rhynoEv.nav.linkedIn.href}
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">{rhynoEv.nav.linkedIn.title}</span>
                  <FontAwesomeIcon
                    icon={faBrand.faLinkedin}
                    className="text-xl"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    href={rhynoEv.footer.ourServices.career.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    {rhynoEv.footer.ourServices.career.title}
                  </a>
                </li>
                <li>
                  <a
                    href={rhynoEv.footer.ourServices.rentals.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    {rhynoEv.footer.ourServices.rentals.title}
                  </a>
                </li>
                <li>
                  <a
                    href={rhynoEv.footer.ourServices.vehicles.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    {rhynoEv.footer.ourServices.vehicles.title}
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="mx-auto max-w-40 text-left sm:mx-0">
                  <a
                    href={rhynoEv.footer.contactUs.email.href}
                    className="inline-flex items-center justify-center gap-1.5"
                  >
                    <FontAwesomeIcon
                      icon={faSolid.faEnvelope}
                      className="aspect-square w-4 text-base text-teal-600"
                    />
                    <span className="text-gray-700">
                      {rhynoEv.footer.contactUs.email.title}
                    </span>
                  </a>
                </li>
                <li className="mx-auto max-w-40 text-left sm:mx-0">
                  <a
                    href={rhynoEv.footer.contactUs.phone.href}
                    className="inline-flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  >
                    <FontAwesomeIcon
                      icon={faSolid.faPhone}
                      className="aspect-square w-4 text-base text-teal-600"
                    />
                    <span className="text-gray-700">
                      {rhynoEv.footer.contactUs.phone.title}
                    </span>
                  </a>
                </li>
                <li className="mx-auto flex max-w-40 items-start justify-center gap-1.5 text-left sm:mx-0 sm:justify-normal ltr:sm:justify-start rtl:sm:justify-end">
                  <a
                    href={rhynoEv.footer.contactUs.address.href}
                    title={rhynoEv.footer.contactUs.address.title}
                    className="flex items-center gap-1.5"
                  >
                    <FontAwesomeIcon
                      icon={faSolid.faLocationDot}
                      className="aspect-square w-4 text-base text-teal-600"
                    />
                    <address className="-mt-0.5 line-clamp-2 flex-1 not-italic text-gray-700">
                      {rhynoEv.footer.contactUs.address.title}
                    </address>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    href={rhynoEv.footer.helpfulLinks.privacyPolicy.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    {rhynoEv.footer.helpfulLinks.privacyPolicy.title}
                  </a>
                </li>
                <li>
                  <a
                    href={rhynoEv.footer.helpfulLinks.refundPolicy.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    {rhynoEv.footer.helpfulLinks.refundPolicy.title}
                  </a>
                </li>
                <li>
                  <a
                    href={rhynoEv.footer.helpfulLinks.websitePolicy.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    {rhynoEv.footer.helpfulLinks.websitePolicy.title}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">
                created by&nbsp;
                <a
                  href="https://arsalanansariofficial.github.io/arsalanansariofficial/"
                  className="text-sky-700"
                >
                  Arsalan Ansari
                </a>
              </span>
            </p>
            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {rhynoEv.meta.title}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
