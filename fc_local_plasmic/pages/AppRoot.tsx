import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PLASMIC } from '@/plasmic-init';


export default function AppRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
      </Routes>
    </BrowserRouter>
  );
}