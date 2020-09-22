import { useContext, useMemo, useState } from 'react';
import { getCategories } from 'api/category';
import { filterContext } from 'state/Filters.context';
import { CategoryEnum, CategoryUI } from 'types/category';

const useCategories = () => {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const {
    categories,
    setCurrentCategories,
    setCurrentStartDate,
    startDate,
  } = useContext(filterContext);

  useMemo(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const categories = await getCategories();
        const categoriesUI: CategoryUI[] = categories.map((category) => {
          const categoryUI = category as CategoryUI;
          categoryUI.enabled = true;
          return categoryUI;
        });
        setCurrentCategories(categoriesUI);
        setLoading(false);
      } catch (error) {
        setHasError(true);
        setLoading(false);
      }
    };
    fetch();
  }, [setCurrentCategories]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (categories) {
      const triggerdCategory = e.target.value as CategoryEnum;
      let newCategories = categories;
      if (e.target.checked) {
        const categoryIndex = newCategories?.findIndex(
          (category) => category.name === triggerdCategory,
        );
        newCategories[categoryIndex].enabled = true;
      } else {
        const categoryIndex = newCategories?.findIndex(
          (category) => category.name === triggerdCategory,
        );
        newCategories[categoryIndex].enabled = false;
      }
      setCurrentCategories(newCategories);
      // awakard work-around as context doesn't update on shallow copy
      setCurrentStartDate(`${startDate} `);
    }
  };

  return { categories, loading, hasError, onChange };
};

export default useCategories;
