import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EntriesPage from '../components/Entries/entriesPage';
import HomePage from '../components/Home/home';

const baseUrl = process.env.REACT_APP_BASE_PATH || '/';

const Router = () => (
  <BrowserRouter basename={baseUrl}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/series" element={<EntriesPage type="series" />} />
      <Route path="/movies" element={<EntriesPage type="movie" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
