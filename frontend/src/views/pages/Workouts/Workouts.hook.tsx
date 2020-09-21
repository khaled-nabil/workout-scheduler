import { useEffect, useState } from 'react';
import { getWorkouts } from 'api/workout';
import { Workout } from 'types/workout';

const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Array<Workout>>();
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        setWorkouts(await getWorkouts());
        setLoading(false);
      } catch (error) {
        setHasError(true);
        setLoading(false);
      }
    };
    fetch();
  }, []);
  return { workouts, loading, hasError };
};

export default useWorkouts;
