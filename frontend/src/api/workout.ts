import AxiosClient from './client';
import { Workout } from '../types/workout';

interface GetWorkoutsParams {
  startDate?: string;
  category: string[];
}

const getWorkouts = async ({
  startDate,
  category,
}: GetWorkoutsParams): Promise<Array<Workout>> => {
  if (!category.length) {
    return [];
  }
  const params: GetWorkoutsParams = { category: category };
  if (startDate) params.startDate = startDate;
  console.log(params);
  const { data } = await AxiosClient.get<Array<Workout>>('/workout', {
    params: {
      ...params,
    },
  });

  return data;
};

export { getWorkouts };
