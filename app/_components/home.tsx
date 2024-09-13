'use client';

import Header from '@/_components/header';
import { Button } from '@/_components/ui/button';

export default function Home() {
  return (
    <>
      <Header />
      <div className="space-y-4 p-4">
        <h1 className="font-poppins text-3xl">Home Page</h1>
        <Button>Click Here</Button>
      </div>
    </>
  );
}
