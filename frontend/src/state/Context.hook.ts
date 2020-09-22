import moment from 'moment';
import { useCallback, useState } from 'react';
import { FiltersContext } from './Filters.context';

const currentDate = moment().format('YYYY-MM-DD');

export const useFilters = (): FiltersContext => {
  const [startDate, setStartDate] = useState(currentDate);

  const setCurrentStartDate = useCallback((startDate: string): void => {
    setStartDate(startDate);
  }, []);

  return {
    startDate,
    setCurrentStartDate,
  };
};
