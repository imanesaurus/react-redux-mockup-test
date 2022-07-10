import React from 'react';
import { Route } from 'react-router-dom';

export function AppRoute({ element: Element, ...rest }) {
  return (
    <Route
      {...rest}
      element={<Element {...rest} />}
    />
  );
}
