import { useState } from 'react';
import { getWorkouts } from 'api/workout';
import { Workout } from 'types/workout';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Category } from 'types/category';

export type WorkoutsParams = { page?: string };
interface FilterFormData {
  startDate: string;
  categories: Array<Category>;
}

const useWorkouts = () => {
  const { register, handleSubmit } = useForm();
  const [workouts, setWorkouts] = useState<Array<Workout>>();
  const { page = '1' } = useParams<WorkoutsParams>();

  const fetchNewData = async ({ startDate, categories }: FilterFormData) => {
    setWorkouts(
      await getWorkouts({
        startDate: startDate,
        category: categories,
        page: parseInt(page),
      }),
    );
  };

  const onSubmit = (data: FilterFormData) => {
    fetchNewData(data);
  };

  /* useEffect(() => {
    (async () => {
          setWorkouts(
            await fetchNewData()
          );
      })()
    };
  }, [page]); */
  const filterSubmit = handleSubmit<FilterFormData>(onSubmit);

  return { workouts, register, filterSubmit };
};

export default useWorkouts;
