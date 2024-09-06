import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/globals.css';
import Vehicle from './_components/vehicle';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Vehicle />
  </StrictMode>
);
