import React, { FC } from 'react';
import css from '@styled-system/css';
import styled from 'styled-components';
import { Box } from 'views/atoms';
import usePagination from './Pagination.hook';

const PaginateBox = styled(Box)(
  css({
    bg: 'white',
    border: '1px solid gray',
    padding: 3,
    borderRadius: '5px',
  }),
);

const Pagination: FC = () => {
  const {} = usePagination();
  return (
    <>
      <PaginateBox display="flex" mx="1">
        {'< Previous'}
      </PaginateBox>
      <PaginateBox display="flex" mx="1">
        {'Next >'}
      </PaginateBox>
    </>
  );
};

export default Pagination;
