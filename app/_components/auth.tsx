'use client';

import Header from '@/_components/header';
import Footer from '@/_components/footer';
import { Switch } from '@/_components/ui/switch';

import rhynoEv from '../../public/about/rhyno-ev.json';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import { useRouter } from 'next/navigation';

export default function Auth() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);

  function handleSignup(
    event: React.MouseEvent<HTMLFormElement, MouseEvent>
  ): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const user = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      password: formData.get('password')
    };

    sessionStorage.setItem('user', JSON.stringify(user));
    toast('🎉 Account created!');

    setTimeout(() => router.push(rhynoEv.nav.prebook.href), 500);
  }

  function handleLogin(
    event: React.MouseEvent<HTMLFormElement, MouseEvent>
  ): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const user = {
      email: formData.get('email'),
      password: formData.get('password')
    };

    if (
      user.email === rhynoEv.pages.auth.meta.admin.email &&
      user.password === rhynoEv.pages.auth.meta.admin.password
    ) {
      setTimeout(() => router.push(rhynoEv.nav.prebook.href), 500);

      return sessionStorage.setItem(
        'user',
        JSON.stringify(rhynoEv.pages.auth.meta.admin)
      );
    }

    toast('🥹 Invalid credentials, please try again!');
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
                    {rhynoEv.pages.home.tagline}
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
                      {rhynoEv.pages.home.tagline}
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
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 w-full rounded-md border border-gray-200 bg-white-100 p-2 text-sm text-gray-700 shadow-sm"
                        required
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
                        type="number"
                        id="phone"
                        name="phone"
                        className="mt-1 w-full rounded-md border border-gray-200 bg-white-100 p-2 text-sm text-gray-700 shadow-sm"
                        required
                        min={1000000000}
                        max={9999999999}
                        minLength={10}
                        maxLength={10}
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
                        type="email"
                        id="Email"
                        name="email"
                        className="mt-1 w-full rounded-md border border-gray-200 bg-white-100 p-2 text-sm text-gray-700 shadow-sm"
                        required
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
                        type="password"
                        id="Password"
                        name="password"
                        className="mt-1 w-full rounded-md border border-gray-200 bg-white-100 p-2 text-sm text-gray-700 shadow-sm"
                        required
                        minLength={8}
                      />
                    </div>

                    <div className="col-span-6">
                      <p className="text-sm text-gray-500">
                        By creating an account, you agree to our &nbsp;
                        <a href="#" className="text-gray-700 underline">
                          website policy
                        </a>
                        &nbsp;and&nbsp;
                        <a href="#" className="text-gray-700 underline">
                          refund policy
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
                    {rhynoEv.pages.home.tagline}
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
                      {rhynoEv.pages.home.tagline}
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
                        type="email"
                        id="Email"
                        name="email"
                        className="mt-1 w-full rounded-md border border-gray-200 bg-white-100 p-2 text-sm text-gray-700 shadow-sm"
                        required
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
                        type="password"
                        id="Password"
                        name="password"
                        className="mt-1 w-full rounded-md border border-gray-200 bg-white-100 p-2 text-sm text-gray-700 shadow-sm"
                        required
                        minLength={8}
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
