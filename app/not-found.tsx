import Link from 'next/link';

import rhynoEv from '../public/about/rhyno-ev.json';

export default function NotFoundPage() {
  return (
    <main className="bg-white grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          🥹
        </p>
        <p className="mt-4 text-gray-500">We can't find that page.</p>
        <Link
          href={rhynoEv.nav.home.href}
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white-100 hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
