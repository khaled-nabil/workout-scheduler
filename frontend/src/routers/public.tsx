import React, { ReactElement, lazy, memo } from 'react';
import { Route, Switch } from 'react-router-dom';

const NotFound = lazy(() => import('views/pages/NotFound'));

const PublicRoutes = (): ReactElement => (
  <Switch>
    <Route component={NotFound} />
  </Switch>
);

export default memo(PublicRoutes);
