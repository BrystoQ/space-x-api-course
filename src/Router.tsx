import React from 'react';

import { Navigate, useRoutes } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout';

import Capsules from './components/Pages/Capsules';
import Launches from './components/Pages/Launches';

function Router() {
  const mainRoutes = [
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Navigate to="/launches" replace /> },
        { path: 'launches', element: <Launches /> },
        { path: 'capsules', element: <Capsules /> },
      ],
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ];
  return useRoutes(mainRoutes);
}

export default Router;
