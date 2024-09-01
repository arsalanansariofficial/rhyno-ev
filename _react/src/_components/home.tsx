'use client';

import Header from '@/_components/header';
import { Button } from '@/_components/ui/button';

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="font-poppins text-3xl">Home Page</h1>
      <Button>Click Here</Button>
    </>
  );
}
