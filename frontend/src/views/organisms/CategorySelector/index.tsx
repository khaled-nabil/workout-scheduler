import React, { FC, forwardRef } from 'react';
import { Box } from 'views/atoms';
import { Checkbox } from 'views/molecules';
import useCategories from './CategorySelector.hook';

interface CategorySelectorParam {
  ref?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null;
  submit?: Function;
}

const CategorySelector: FC<CategorySelectorParam> = forwardRef(
  ({ submit }, ref) => {
    const { categories } = useCategories();
    return (
      <>
        {categories?.map((category, i) => (
          <Box key={i} display="flex">
            <Checkbox
              defaultChecked={true}
              defaultValue={category.name}
              label={category.name}
              ref={ref}
              submit={submit}
              name="categories"
              p={3}
              mx={2}
            />
          </Box>
        ))}
      </>
    );
  },
);

export default CategorySelector;
