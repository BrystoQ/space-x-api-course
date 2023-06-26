import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from '../Sections/Footer/Footer';
import Header from '../Sections/Header/Header';

function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
