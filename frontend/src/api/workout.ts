import AxiosClient from './client';
import { Workout } from '../types/workout';

interface GetWorkoutsParams {
  startDate?: string;
  category: string[];
  page?: number;
}

interface GetWorkoutParams {
  id: string;
}

interface APIParams {
  startDate?: string;
  category: string[];
  offset: number;
  limit: number;
}

const limit = 20;

const getWorkouts = async ({
  startDate,
  category,
  page = 1,
}: GetWorkoutsParams): Promise<Array<Workout>> => {
  if (!category.length) {
    return [];
  }
  if (page <= 0) page = 1;
  const params: APIParams = {
    category: category,
    offset: (page - 1) * limit,
    limit: limit,
  };
  if (startDate) params.startDate = startDate;
  const { data } = await AxiosClient.get<Array<Workout>>('/workout', {
    params: {
      ...params,
    },
  });

  return data;
};

const getWorkout = async ({ id }: GetWorkoutParams): Promise<Workout> => {
  const { data } = await AxiosClient.get<Workout>(`/workout/${id}`);

  return data;
};

export { getWorkouts, getWorkout };
