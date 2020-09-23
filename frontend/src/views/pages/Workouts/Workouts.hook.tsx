import { useState, useContext } from 'react';
import { getWorkouts } from 'api/workout';
import { Workout } from 'types/workout';
import { filterContext } from 'state/Filters.context';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect';

export type WorkoutsParams = { page?: string };

const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Array<Workout>>();
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { startDate, setCurrentStartDate, categories } = useContext(
    filterContext,
  );
  const { page = '1' } = useParams<WorkoutsParams>();

  useDeepCompareEffectNoCheck(() => {
    const fetch = async () => {
      if (categories?.length) {
        try {
          setLoading(true);
          setWorkouts(
            await getWorkouts({
              startDate: startDate,
              category: categories.filter((c) => c.enabled).map((c) => c.name),
              page: parseInt(page),
            }),
          );
          setLoading(false);
        } catch (error) {
          setHasError(true);
          setLoading(false);
        }
      }
    };
    fetch();
  }, [page, startDate, categories]);

  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentStartDate(moment(e.target.value).format('YYYY-MM-DD'));
  };
  return { workouts, loading, hasError, onDateChange };
};

export default useWorkouts;
