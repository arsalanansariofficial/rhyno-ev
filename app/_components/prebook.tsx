'use client';

import { z } from 'zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Header from '@/_components/header';
import Footer from '@/_components/footer';
import { Input } from '@/_components/ui/input';
import * as CnForm from '@/_components/ui/form';
import { Button } from '@/_components/ui/button';
import * as CnSelect from '@/_components/ui/select';

import { toast } from 'sonner';
import { Toaster } from '@/_components/ui/sonner';
import { useRouter } from 'next/navigation';

import rhynoEv from '../../public/about/rhyno-ev.json';

const formSchema = z.object({
  owner: z
    .string()
    .min(10, { message: 'Name must be atleast 10 characters.' })
    .max(20, { message: 'Name can not be greater than 20 characters.' })
    .refine(owner => !/\d/.test(owner), {
      message: 'Name must not contain any numbers.'
    }),
  number: z.string().length(16, {
    message: 'Must contain exactly 16 digits.'
  }),
  expMonth: z
    .string()
    .min(1, { message: 'Should not be empty.' })
    .max(2, { message: 'Less than or equal to 2 characters.' }),
  expYear: z.coerce
    .string()
    .min(1, { message: 'Should not be empty.' })
    .max(2, { message: 'Less than or equal to 2 characters.' }),
  cvc: z.string().length(3, { message: 'Must contain exactly 3 characters.' })
});

export default function Prebook() {
  useEffect(function () {
    const user = JSON.parse(
      sessionStorage.getItem('user') as string
    ) as typeof rhynoEv.pages.auth.meta.admin;

    if (!user) {
      return router.push(rhynoEv.nav.auth.href);
    }

    if (user.order) {
      setHasOrder(true);
    }
  }, []);

  const [hasOrder, setHasOrder] = useState(false);

  const router = useRouter();

  const [model, setModel] = useState(
    rhynoEv.pages.vehicles.vehicleList[0].name
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      owner: String(),
      number: String(),
      expMonth: String(),
      expYear: String(),
      cvc: String()
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const user = JSON.parse(
      sessionStorage.getItem('user') as string
    ) as typeof rhynoEv.pages.auth.meta.admin;

    user.order = true;
    sessionStorage.setItem('user', JSON.stringify(user));

    toast(rhynoEv.pages.prebook.meta.successMessage);
    setTimeout(() => router.push('/'), 500);
  }

  return (
    <>
      <Header cta={false} />
      <main className="mx-auto grid max-w-2xl items-stretch justify-items-stretch p-4">
        {!hasOrder && (
          <section className="space-y-4 rounded-xl sm:border sm:p-8">
            <h1 className="text-2xl font-bold leading-none tracking-tighter text-neutral-600">
              Checkout
            </h1>

            <div className="relative">
              <div className="space-y-2">
                <label className="text-sm">Model</label>
                <CnSelect.Select onValueChange={setModel} value={model}>
                  <CnSelect.SelectTrigger>
                    <CnSelect.SelectValue
                      placeholder="Model"
                      className="text-neutral-600"
                    />
                  </CnSelect.SelectTrigger>
                  <CnSelect.SelectContent>
                    {rhynoEv.pages.vehicles.vehicleList.map(
                      (vehicle, index) => {
                        return (
                          <CnSelect.SelectItem key={index} value={vehicle.name}>
                            {vehicle.name}
                          </CnSelect.SelectItem>
                        );
                      }
                    )}
                  </CnSelect.SelectContent>
                </CnSelect.Select>
              </div>
              <p className="absolute right-0 top-0 font-bold">&#x20B9; 500</p>
            </div>

            <CnForm.Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-4 gap-x-4 space-y-4"
              >
                <CnForm.FormField
                  name="owner"
                  control={form.control}
                  render={({ field }) => (
                    <CnForm.FormItem className="col-span-4">
                      <CnForm.FormLabel>Owner</CnForm.FormLabel>
                      <CnForm.FormControl>
                        <Input placeholder="eg. Arsalan Ansari" {...field} />
                      </CnForm.FormControl>
                      <CnForm.FormMessage />
                    </CnForm.FormItem>
                  )}
                />

                <CnForm.FormField
                  name="number"
                  control={form.control}
                  render={({ field }) => (
                    <CnForm.FormItem className="col-span-4">
                      <CnForm.FormLabel>Card Number</CnForm.FormLabel>
                      <CnForm.FormControl>
                        <Input
                          placeholder="eg. 1234 5678 9012 3456"
                          {...field}
                          pattern="/\d/."
                          type="number"
                        />
                      </CnForm.FormControl>
                      <CnForm.FormMessage />
                    </CnForm.FormItem>
                  )}
                />

                <CnForm.FormField
                  name="expMonth"
                  control={form.control}
                  render={({ field }) => (
                    <CnForm.FormItem className="col-span-4 sm:col-span-1">
                      <CnForm.FormLabel>MM</CnForm.FormLabel>
                      <CnForm.FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="eg. 05"
                          min={1}
                          max={12}
                          minLength={1}
                          maxLength={2}
                        />
                      </CnForm.FormControl>
                      <CnForm.FormMessage />
                    </CnForm.FormItem>
                  )}
                />

                <CnForm.FormField
                  name="expYear"
                  control={form.control}
                  render={({ field }) => (
                    <CnForm.FormItem className="col-span-4 sm:col-span-1">
                      <CnForm.FormLabel>YY</CnForm.FormLabel>
                      <CnForm.FormControl>
                        <Input
                          {...field}
                          type="Number"
                          placeholder="eg. 25"
                          min={25}
                          max={30}
                          minLength={1}
                          maxLength={2}
                        />
                      </CnForm.FormControl>
                      <CnForm.FormMessage />
                    </CnForm.FormItem>
                  )}
                />

                <CnForm.FormField
                  name="cvc"
                  control={form.control}
                  render={({ field }) => (
                    <CnForm.FormItem className="col-span-4 sm:col-span-2">
                      <CnForm.FormLabel>CVC</CnForm.FormLabel>
                      <CnForm.FormControl>
                        <Input
                          {...field}
                          type="Number"
                          placeholder="eg. 000"
                          min={0}
                          max={999}
                          minLength={3}
                          maxLength={3}
                        />
                      </CnForm.FormControl>
                      <CnForm.FormMessage />
                    </CnForm.FormItem>
                  )}
                />

                <Button type="submit" className="col-span-4 sm:max-w-min">
                  Pay
                </Button>
              </form>
            </CnForm.Form>
          </section>
        )}

        {hasOrder && (
          <section className="rounded-3xl border shadow-xl">
            <div className="space-y-4 p-8 text-center sm:p-12">
              <span className="text-3xl font-semibold uppercase tracking-widest">
                🎉
              </span>

              <p className="mx-auto text-sm font-semibold uppercase tracking-widest text-pink-500 sm:w-2/3">
                We've already got your order, check your email for more details.
              </p>

              <h2 className="mt-6 text-3xl font-bold text-teal-900">
                Thank you for choosing RhynoEV
              </h2>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
