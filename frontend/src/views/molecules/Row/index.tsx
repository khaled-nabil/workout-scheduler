import React, { FC } from 'react';
import { Box } from 'views/atoms';
import { BoxAtom } from 'views/atoms/Box/Box.interface';

const Row: FC<BoxAtom> = ({ children, ...props }) => (
  <Box display="flex" flexWrap="wrap" {...props}>
    {children}
  </Box>
);

export default Row;
