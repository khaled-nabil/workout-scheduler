import { useEffect, useState } from 'react';
import { getWorkouts } from 'api/workout';
import { Workout } from 'types/workout';
import { useFilters } from 'state/Context.hook';

const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Array<Workout>>();
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { startDate } = useFilters();
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
  return { workouts, loading, hasError };
};

export default useWorkouts;
