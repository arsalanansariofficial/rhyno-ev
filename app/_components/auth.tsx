'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { toast, Toaster } from 'sonner';

import Header from '@/_components/header';
import Footer from '@/_components/footer';
import { Switch } from '@/_components/ui/switch';

import rhynoEv from '../../public/about/rhyno-ev.json';

export default function Auth() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);

  function getUser(event: any) {
    let user = new Object() as any;
    const formData = new FormData(event.target as HTMLFormElement);

    Object.keys(rhynoEv.main.auth.admin).forEach(
      key => (user[key as keyof typeof user] = formData.get(key))
    );

    return user;
  }

  function handleSignup(event: any): void {
    event.preventDefault();
    const user = getUser(event);

    toast(rhynoEv.main.auth.alertSignup);
    sessionStorage.setItem('user', JSON.stringify(user));

    setTimeout(() => router.push(rhynoEv.nav.prebook.href), 500);
  }

  function handleLogin(event: any): void {
    event.preventDefault();
    const user = getUser(event);

    if (
      user.email === rhynoEv.main.auth.admin.email &&
      user.password === rhynoEv.main.auth.admin.password
    ) {
      setTimeout(() => router.push(rhynoEv.nav.prebook.href), 500);

      return sessionStorage.setItem(
        'user',
        JSON.stringify(rhynoEv.main.auth.admin)
      );
    }

    toast(rhynoEv.main.auth.alertError);
  }

  return (
    <>
      <Header cta={false} />
      <main>
        {!isLogin && (
          <section className="bg-white-100">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
              <section className="relative flex items-center lg:col-span-5 lg:h-full xl:col-span-6">
                <div className="hidden lg:relative lg:block lg:p-12">
                  <h2 className="text-white mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
                    Create your account
                  </h2>
                  <p className="text-white/90 mt-4 leading-relaxed">
                    {rhynoEv.main.home.tagline}
                  </p>
                </div>
              </section>
              <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                <div className="max-w-xl lg:max-w-3xl">
                  <div className="-mt-16-- relative block lg:hidden">
                    <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                      Create your account
                    </h1>
                    <p className="mt-4 leading-relaxed text-gray-500">
                      {rhynoEv.main.home.tagline}
                    </p>
                  </div>
                  <form
                    onSubmit={handleSignup}
                    className="mt-8 grid grid-cols-6 gap-6"
                  >
                    <div className="col-span-6">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        required
                        id="name"
                        type="text"
                        name="name"
                        className="mt-1 w-full rounded-md border border-gray-200 bg-white-100 p-2 text-sm text-gray-700 shadow-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        required
                        id="phone"
                        name="phone"
                        type="number"
                        minLength={10}
                        maxLength={10}
                        min={1000000000}
                        max={9999999999}
                        className="mt-1 w-full rounded-md border border-gray-200 bg-white-100 p-2 text-sm text-gray-700 shadow-sm"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="Email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        required
                        id="Email"
                        type="email"
                        name="email"
                        className="mt-1 w-full rounded-md border border-gray-200 bg-white-100 p-2 text-sm text-gray-700 shadow-sm"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="Password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        required
                        minLength={8}
                        id="Password"
                        type="password"
                        name="password"
                        className="mt-1 w-full rounded-md border border-gray-200 bg-white-100 p-2 text-sm text-gray-700 shadow-sm"
                      />
                    </div>
                    <div className="col-span-6">
                      <p className="text-sm text-gray-500">
                        By creating an account, you agree to our &nbsp;
                        <a
                          href={rhynoEv.footer.helpfulLinks.websitePolicy.href}
                          className="text-gray-700 underline"
                        >
                          {rhynoEv.footer.helpfulLinks.websitePolicy.title}
                        </a>
                        &nbsp;and&nbsp;
                        <a
                          href={rhynoEv.footer.helpfulLinks.refundPolicy.href}
                          className="text-gray-700 underline"
                        >
                          {rhynoEv.footer.helpfulLinks.refundPolicy.title}
                        </a>
                        &nbsp;.
                      </p>
                    </div>
                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                      <button className="text-white inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                        Create an account
                      </button>
                      <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                        Login
                      </p>
                      <Switch checked={isLogin} onCheckedChange={setIsLogin} />
                    </div>
                  </form>
                </div>
              </main>
            </div>
          </section>
        )}

        {isLogin && (
          <section className="bg-white-100">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
              <section className="relative flex items-center lg:col-span-5 lg:h-full xl:col-span-6">
                <div className="hidden lg:relative lg:block lg:p-12">
                  <h2 className="text-white mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
                    Login to Your Account
                  </h2>
                  <p className="text-white/90 mt-4 leading-relaxed">
                    {rhynoEv.main.home.tagline}
                  </p>
                </div>
              </section>
              <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                <div className="max-w-xl lg:max-w-3xl">
                  <div className="-mt-16-- relative block lg:hidden">
                    <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                      Login to Your Account
                    </h1>
                    <p className="mt-4 leading-relaxed text-gray-500">
                      {rhynoEv.main.home.tagline}
                    </p>
                  </div>
                  <form
                    onSubmit={handleLogin}
                    className="mt-8 grid grid-cols-6 gap-6"
                  >
                    <div className="col-span-6">
                      <label
                        htmlFor="Email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        required
                        id="Email"
                        type="email"
                        name="email"
                        className="mt-1 w-full rounded-md border border-gray-200 bg-white-100 p-2 text-sm text-gray-700 shadow-sm"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="Password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        required
                        minLength={8}
                        id="Password"
                        type="password"
                        name="password"
                        className="mt-1 w-full rounded-md border border-gray-200 bg-white-100 p-2 text-sm text-gray-700 shadow-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                      <button className="text-white inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                        Login
                      </button>
                      <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                        Login
                      </p>
                      <Switch checked={isLogin} onCheckedChange={setIsLogin} />
                    </div>
                  </form>
                </div>
              </main>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
