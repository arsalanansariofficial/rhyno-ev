import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Home from '@/_components/home';

import '@/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
