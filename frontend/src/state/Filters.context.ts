import React from 'react';

export interface FiltersContext {
  startDate: string;
  setCurrentStartDate: (startDate: string) => void;
}

const Filters_DEFAULT_VALUE: FiltersContext = {
  startDate: '',
  setCurrentStartDate: () => {},
};

export const startDateContext = React.createContext(Filters_DEFAULT_VALUE);
