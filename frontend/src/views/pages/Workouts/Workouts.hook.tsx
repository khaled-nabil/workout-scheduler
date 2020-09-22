import { useEffect, useState } from 'react';
import { getWorkouts } from 'api/workout';
import { Workout } from 'types/workout';
import { useFilters } from 'state/Context.hook';
import moment from 'moment';

const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Array<Workout>>();
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { startDate, setCurrentStartDate } = useFilters();
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        setWorkouts(await getWorkouts({ startDate: startDate }));
        setLoading(false);
      } catch (error) {
        setHasError(true);
        setLoading(false);
      }
    };
    fetch();
  }, [startDate]);

  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentStartDate(moment(e.target.value).format('YYYY-MM-DD'));
  };
  return { workouts, loading, hasError, onDateChange };
};

export default useWorkouts;
