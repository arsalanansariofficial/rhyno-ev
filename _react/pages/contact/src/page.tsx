import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Contact from '@/_components/contact';

import '@/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Contact />
  </StrictMode>
);
