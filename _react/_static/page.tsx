import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import About from '@/_components/about';

import '@/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <About />
  </StrictMode>
);
