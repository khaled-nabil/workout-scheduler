import React, { FC } from 'react';
import { Box } from 'views/atoms';
import { Checkbox, Row } from 'views/molecules';
import useCategories from './CategorySelector.hook';

const CategorySelector: FC = () => {
  const { categories } = useCategories();

  return (
    <>
      {categories?.map((category, i) => (
        <Box key={i} display="flex">
          <Checkbox label={category.name} name="category[]" p={3} mx={2} />
        </Box>
      ))}
    </>
  );
};

export default CategorySelector;
