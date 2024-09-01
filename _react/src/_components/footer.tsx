'use client';

import * as fa from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import rhynoEv from '../../public/about/rhyno-ev.json';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <svg
                fill="none"
                className="h-8"
                viewBox="0 0 28 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                />
              </svg>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              {rhynoEv.pages.home.tagline}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={rhynoEv.nav.instagram.href}
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">{rhynoEv.nav.instagram.title}</span>
                  <FontAwesomeIcon icon={fa.faInstagram} className="text-xl" />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={rhynoEv.nav.instagram.href}
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">{rhynoEv.nav.instagram.title}</span>
                  <FontAwesomeIcon icon={fa.faGithub} className="text-xl" />
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
                  <FontAwesomeIcon icon={fa.faLinkedin} className="text-xl" />
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
                    href={rhynoEv.footer.career.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    {rhynoEv.footer.career.title}
                  </a>
                </li>

                <li>
                  <a
                    href={rhynoEv.footer.rentals.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    {rhynoEv.footer.rentals.title}
                  </a>
                </li>

                <li>
                  <a
                    href={rhynoEv.footer.products.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    {rhynoEv.footer.products.title}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    href={rhynoEv.pages.contact.contactInfo.email.href}
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  >
                    <svg
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden size-5 shrink-0 text-gray-900 sm:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="flex-1 text-gray-700">
                      {rhynoEv.pages.contact.contactInfo.email.title}
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href={rhynoEv.pages.contact.contactInfo.phone.href}
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  >
                    <svg
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden size-5 shrink-0 text-gray-900 sm:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="flex-1 text-gray-700">
                      {rhynoEv.pages.contact.contactInfo.phone.title}
                    </span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <a
                    href={rhynoEv.pages.contact.contactInfo.address.href}
                    title={rhynoEv.pages.contact.contactInfo.address.title}
                    className="flex gap-1.5"
                  >
                    <svg
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden size-5 shrink-0 text-gray-900 sm:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address className="-mt-0.5 line-clamp-2 flex-1 not-italic text-gray-700">
                      {rhynoEv.pages.contact.contactInfo.address.title}
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
                    href={rhynoEv.footer.privacyPolicy.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    {rhynoEv.footer.privacyPolicy.title}
                  </a>
                </li>

                <li>
                  <a
                    href={rhynoEv.footer.refundPolicy.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    {rhynoEv.footer.refundPolicy.title}
                  </a>
                </li>

                <li>
                  <a
                    href={rhynoEv.footer.websitePolicy.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    {rhynoEv.footer.websitePolicy.title}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">created by Arsalan Ansari</span>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {rhynoEv.title}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
