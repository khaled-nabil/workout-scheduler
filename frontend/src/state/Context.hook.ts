import { useCallback, useState } from 'react';

export const useData = () => {
  const [categoriesReady, setCategoriesReady] = useState(false);

  const toggleCategoriesReady = useCallback((): void => {
    setCategoriesReady(true);
  }, []);

  return {
    categoriesReady,
    toggleCategoriesReady,
  };
};
