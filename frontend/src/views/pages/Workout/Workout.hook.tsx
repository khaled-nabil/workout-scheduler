import { useState, useMemo } from 'react';
import { getWorkout } from 'api/workout';
import { Workout } from 'types/workout';
import { useParams } from 'react-router-dom';

export type WorkoutsParams = { id: string };

const useWorkout = () => {
  const [workout, setWorkout] = useState<Workout>();
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { id } = useParams<WorkoutsParams>();

  useMemo(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setWorkout(await getWorkout({ id }));
        setLoading(false);
      } catch (error) {
        setHasError(true);
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  return { workout, loading, hasError };
};

export default useWorkout;
