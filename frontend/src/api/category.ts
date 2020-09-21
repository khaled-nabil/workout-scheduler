import AxiosClient from './client';
import { Category } from 'types/category';

const getCategories = async (): Promise<Array<Category>> => {
  const { data } = await AxiosClient.get<Array<Category>>('/category');

  return data;
};

export { getCategories };
