import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { WorkoutsParams } from 'views/pages/Workouts/Workouts.hook';

const usePagination = () => {
  const { page = '1' } = useParams<WorkoutsParams>();
  const nextPage = parseInt(page) + 1;
  const prvPage = parseInt(page) > 1 ? parseInt(page) - 1 : 1;
  const currentPage = parseInt(page);
  const prvArray = useMemo(
    () =>
      Array(currentPage - (currentPage - 3 > 1 ? currentPage - 3 : 1))
        .fill(0)
        .map((_, i) => (currentPage - 3 > 1 ? currentPage - 3 : 1) + i),
    [currentPage],
  );
  const nextArray = useMemo(
    () =>
      Array(3)
        .fill(0)
        .map((_, i) => currentPage + i + 1),
    [currentPage],
  );
  return { prvArray, nextArray, currentPage, nextPage, prvPage };
};

export default usePagination;
