'use client';

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import * as Shad from '@/_components/ui/sheet';
import * as Nav from '@/_components/ui/navigation-menu';

import rhynoEv from '../../public/about/rhyno-ev.json';
import { useRouter } from 'next/navigation';

export default function Header({ cta = true }: { cta?: boolean }) {
  const router = useRouter();

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-4">
            <button
              className="block text-teal-600"
              onClick={() => router.push('/')}
            >
              <span className="sr-only">{rhynoEv.nav.home.title}</span>
              <img
                src={rhynoEv.meta.logo}
                alt={rhynoEv.meta.title}
                className="aspect-video w-8 sm:w-12"
              />
            </button>
            <Link
              href={rhynoEv.nav.instagram.href}
              className="hidden text-teal-600 md:block"
            >
              <span className="sr-only">{rhynoEv.nav.instagram.title}</span>
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </Link>
            <Link
              href={rhynoEv.nav.linkedIn.href}
              className="hidden text-teal-600 md:block"
            >
              <span className="sr-only">{rhynoEv.nav.linkedIn.title}</span>
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            </Link>
          </div>

          <div className="flex items-center md:gap-12">
            <ul className="hidden items-center gap-6 text-sm md:flex">
              <li>
                <button
                  onClick={() => router.push('/')}
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  {rhynoEv.nav.home.title}
                </button>
              </li>
              <li>
                <Link
                  href={rhynoEv.nav.about.href}
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  {rhynoEv.nav.about.title}
                </Link>
              </li>
              <li>
                <Nav.NavigationMenu className="m-0 hidden p-0 md:block">
                  <Nav.NavigationMenuList>
                    <Nav.NavigationMenuItem>
                      <Nav.NavigationMenuTrigger className="p-0 text-gray-500 transition hover:text-gray-500/75">
                        <Link href={rhynoEv.nav.vehicles.href}>
                          {rhynoEv.nav.vehicles.title}
                        </Link>
                      </Nav.NavigationMenuTrigger>
                      <Nav.NavigationMenuContent>
                        <ul className="min-w-max space-y-2 p-2">
                          {rhynoEv.nav.vehicles.subMenu.map(
                            (menuItem, index) => {
                              return (
                                <Nav.NavigationMenuLink key={index} asChild>
                                  <Link
                                    href={menuItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none text-gray-500 no-underline outline-none hover:bg-accent hover:text-gray-500/75 focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium capitalize leading-none">
                                      {menuItem.title}
                                    </div>
                                  </Link>
                                </Nav.NavigationMenuLink>
                              );
                            }
                          )}
                        </ul>
                      </Nav.NavigationMenuContent>
                    </Nav.NavigationMenuItem>
                  </Nav.NavigationMenuList>
                </Nav.NavigationMenu>
              </li>
              <li>
                <Link
                  href={rhynoEv.nav.contact.href}
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  {rhynoEv.nav.contact.title}
                </Link>
              </li>
            </ul>
            {cta && (
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    href={rhynoEv.nav.prebook.href}
                    className="text-white rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium shadow"
                  >
                    {rhynoEv.nav.prebook.title}
                  </Link>
                </div>
              </div>
            )}
            <div className="ms-2 flex items-center gap-4 md:hidden">
              <Shad.Sheet>
                <Shad.SheetTrigger className="block rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <FontAwesomeIcon icon={faBars} className="text-xl" />
                </Shad.SheetTrigger>
                <Shad.SheetContent aria-describedby={undefined}>
                  <Shad.SheetHeader>
                    <Shad.SheetTitle className="text-left">
                      {rhynoEv.meta.title}
                    </Shad.SheetTitle>
                  </Shad.SheetHeader>
                  <div className="bg-white flex h-screen flex-col justify-between text-left">
                    <ul className="mt-4 space-y-1">
                      <li>
                        <button
                          onClick={() => router.push('/')}
                          className="block w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                        >
                          {rhynoEv.nav.home.title}
                        </button>
                      </li>
                      <li>
                        <Link
                          href={rhynoEv.nav.about.href}
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          {rhynoEv.nav.about.title}
                        </Link>
                      </li>
                      <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            <span className="text-sm font-medium">
                              {rhynoEv.nav.vehicles.title}
                            </span>
                            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                              <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                          </summary>
                          <ul className="mt-2 space-y-1 px-4">
                            {rhynoEv.nav.vehicles.subMenu.map(
                              (menuItem, index) => {
                                return (
                                  <li key={index}>
                                    <Link
                                      href={menuItem.href}
                                      className="block rounded-lg px-4 py-2 text-sm font-medium capitalize text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                      {menuItem.title}
                                    </Link>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </details>
                      </li>
                      <li>
                        <Link
                          href={rhynoEv.nav.contact.href}
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          {rhynoEv.nav.contact.title}
                        </Link>
                      </li>
                    </ul>
                    <ul className="mb-16 mt-auto flex gap-4">
                      <li>
                        <Link
                          href={rhynoEv.nav.instagram.href}
                          className="text-teal-600 md:block"
                        >
                          <span className="sr-only">
                            {rhynoEv.nav.instagram.title}
                          </span>
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-xl"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={rhynoEv.nav.linkedIn.href}
                          className="text-teal-600 md:block"
                        >
                          <span className="sr-only">
                            {rhynoEv.nav.linkedIn.title}
                          </span>
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="text-xl"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Shad.SheetContent>
              </Shad.Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
