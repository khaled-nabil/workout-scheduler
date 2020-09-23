import { useContext, useEffect, useState } from 'react';
import { getWorkouts } from 'api/workout';
import { Workout } from 'types/workout';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Category } from 'types/category';
import DataContext from 'state/Data.context';

export type WorkoutsParams = { page?: string };
interface FilterFormData {
  startDate: string;
  categories: Array<Category>;
}

const useWorkouts = () => {
  const { register, handleSubmit } = useForm();
  const [workouts, setWorkouts] = useState<Array<Workout>>();
  const [loading, setLoading] = useState(true);
  const { page = '1' } = useParams<WorkoutsParams>();
  const { categoriesReady } = useContext(DataContext);

  const fetchNewData = async ({ startDate, categories }: FilterFormData) => {
    setLoading(true);
    setWorkouts(
      await getWorkouts({
        startDate: startDate,
        category: categories,
        page: parseInt(page),
      }),
    );
    setLoading(false);
  };

  const filterSubmit = handleSubmit<FilterFormData>(fetchNewData);

  useEffect(() => {
    filterSubmit();
    // passing `filterSubmit` in dependency array will cause infinite rerender
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, categoriesReady]);

  return { workouts, register, filterSubmit, loading };
};

export default useWorkouts;
