import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './public';
import { filterContext } from 'state/Filters.context';
import { useFilters } from 'state/Context.hook';

const Router = (): ReactElement => {
  const filters = useFilters();

  return (
    <filterContext.Provider value={filters}>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </filterContext.Provider>
  );
};

export default Router;
