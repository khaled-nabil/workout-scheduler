import AxiosClient from './client';
import { Workout } from '../types/workout';

interface GetWorkoutsParams {
  startDate?: string;
}

const getWorkouts = async ({
  startDate,
}: GetWorkoutsParams): Promise<Array<Workout>> => {
  const params: GetWorkoutsParams = {};
  if (startDate) params.startDate = startDate;
  const { data } = await AxiosClient.get<Array<Workout>>('/workout', {
    params: {
      ...params,
    },
  });

  return data;
};

export { getWorkouts };
