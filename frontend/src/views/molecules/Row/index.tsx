import React, { FC } from 'react';
import { Box } from 'views/atoms';

const Row: FC = ({ children }) => (
  <Box display="flex" flexWrap="wrap">
    {children}
  </Box>
);

export default Row;
