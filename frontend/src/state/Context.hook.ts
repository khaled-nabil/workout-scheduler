import moment from 'moment';
import { useCallback, useState } from 'react';
import { CategoryUI } from 'types/category';
import { FiltersContext } from './Filters.context';

const currentDate = moment().format('YYYY-MM-DD');

export const useFilters = (): FiltersContext => {
  const [startDate, setStartDate] = useState(currentDate);
  const [categories, setCategories] = useState<CategoryUI[]>();

  const setCurrentStartDate = useCallback((startDate: string): void => {
    setStartDate(startDate);
  }, []);

  const setCurrentCategories = useCallback((categories: CategoryUI[]): void => {
    setCategories(categories);
  }, []);

  return {
    startDate,
    setCurrentStartDate,
    categories,
    setCurrentCategories,
  };
};
