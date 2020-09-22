import React, { FC } from 'react';
import { Box } from 'views/atoms';
import { Checkbox } from 'views/molecules';
import useCategories from './CategorySelector.hook';

const CategorySelector: FC = () => {
  const { categories, onChange } = useCategories();
  return (
    <>
      {categories?.map((category, i) => (
        <Box key={i} display="flex">
          <Checkbox
            defaultValue={category.name}
            label={category.name}
            onChange={onChange}
            ticked={true}
            name="category[]"
            p={3}
            mx={2}
          />
        </Box>
      ))}
    </>
  );
};

export default CategorySelector;
