import React, { ReactElement, lazy, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import Workouts from 'views/pages/Workouts';

const NotFound = lazy(() => import('views/pages/NotFound'));

const PublicRoutes = (): ReactElement => (
  <Switch>
    <Route exact path="/" component={Workouts} />
    <Route component={NotFound} />
  </Switch>
);

export default memo(PublicRoutes);
