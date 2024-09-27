import Header from '@/_components/header';
import Footer from '@/_components/footer';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="bg-white grid h-screen place-content-center px-4">
        <section className="space-y-4 text-center">
          <p className="text-2xl font-bold tracking-tight sm:text-4xl">🥹</p>
          <h1 className="text-9xl font-black text-neutral-300">404</h1>
          <p className="mt-4 text-xl font-bold text-teal-900">
            We can't find that page.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
