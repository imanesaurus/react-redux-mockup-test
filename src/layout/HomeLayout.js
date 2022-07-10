/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../routes';

function HomeLayout() {
  return (
    <Routes>
      {routes.map((route, index) => {
        const Component = route.element;
        return (
          <Route
            key={index.toString}
            path={route.path}
            element={<Component />}
          />
        );
      })}
    </Routes>
  );
}

export default HomeLayout;
