import React from 'react';
import { CategoryUI } from 'types/category';

export interface FiltersContext {
  startDate: string;
  setCurrentStartDate: (startDate: string) => void;
  categories?: CategoryUI[];
  setCurrentCategories: (categories: CategoryUI[]) => void;
}

const FILTERS_DEFAULT_VALUE: FiltersContext = {
  startDate: '',
  setCurrentStartDate: () => {},
  setCurrentCategories: () => {},
};

export const filterContext = React.createContext(FILTERS_DEFAULT_VALUE);
