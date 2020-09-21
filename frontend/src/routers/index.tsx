import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './public';

const Router = (): ReactElement => (
  <BrowserRouter>
    <PublicRoutes />
  </BrowserRouter>
);

export default Router;
