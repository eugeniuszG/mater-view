import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import "./index.css";
import { BandDetails } from './components/BandDetails/BandDetails'
import { NotFound } from './components/NotFoun';
import { BandsLayout } from './BandsLayout';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bands" element={<BandsLayout />}>
        <Route path=":id" element={<BandDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </React.StrictMode>
</BrowserRouter>

);