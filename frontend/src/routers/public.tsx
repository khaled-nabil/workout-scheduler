import React, { ReactElement, lazy, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import Workouts from 'views/pages/Workouts';

const NotFound = lazy(() => import('views/pages/NotFound'));
const Workout = lazy(() => import('views/pages/Workout'));

const PublicRoutes = (): ReactElement => (
  <Switch>
    <Route exact path={['/workouts', '/']} component={Workouts} />
    <Route exact path="/workouts/:page" component={Workouts} />
    <Route exact path="/workout/:id" component={Workout} />
    <Route component={NotFound} />
  </Switch>
);

export default memo(PublicRoutes);
