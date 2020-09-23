import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './public';
import DataContext from 'state/Data.context';
import { useData } from 'state/Context.hook';

const Router = (): ReactElement => {
  const data = useData();

  return (
    <DataContext.Provider value={data}>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </DataContext.Provider>
  );
};

export default Router;
