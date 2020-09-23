import { useContext, useEffect, useState } from 'react';
import { getCategories } from 'api/category';
import { Category } from 'types/category';
import DataContext from 'state/Data.context';

const useCategories = () => {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [categories, setCategories] = useState<Category[]>();
  const { toggleCategoriesReady } = useContext(DataContext);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setCategories(await getCategories());
        toggleCategoriesReady();
        setLoading(false);
      } catch (error) {
        setHasError(true);
        setLoading(false);
      }
    };
    fetch();
  }, [toggleCategoriesReady]);

  return { categories, loading, hasError };
};

export default useCategories;
