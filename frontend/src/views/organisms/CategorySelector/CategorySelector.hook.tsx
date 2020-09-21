import { useEffect, useState } from 'react';
import { Category } from 'types/category';
import { getCategories } from 'api/category';

const useCategories = () => {
  const [categories, setCategories] = useState<Array<Category>>();
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        setCategories(await getCategories());
        setLoading(false);
      } catch (error) {
        setHasError(true);
        setLoading(false);
      }
    };
    fetch();
  }, []);
  return { categories, loading, hasError };
};

export default useCategories;
