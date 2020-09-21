import AxiosClient from './client';
import { Workout } from '../types/workout';

const getWorkouts = async (): Promise<Array<Workout>> => {
  const { data } = await AxiosClient.get<Array<Workout>>('/workout');

  return data;
};

export { getWorkouts };
