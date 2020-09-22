import React, { FC } from 'react';
import css from '@styled-system/css';
import styled from 'styled-components';
import { Link, Box } from 'views/atoms';
import usePagination from './Pagination.hook';

const PaginateLink = styled(Link)(
  css({
    bg: 'white',
    border: '1px solid gray',
    padding: 3,
    borderRadius: '5px',
    mx: 1,
    display: 'flex',
  }),
);

const PaginateBox = styled(Box)(
  css({
    bg: 'grayLight',
    border: '1px solid gray',
    padding: 3,
    borderRadius: '5px',
    mx: 1,
    display: 'flex',
  }),
);

const Pagination: FC = () => {
  const {
    prvArray,
    nextArray,
    currentPage,
    nextPage,
    prvPage,
  } = usePagination();
  return (
    <>
      {currentPage !== 1 && (
        <PaginateLink href={`/workouts/${prvPage}`}>
          {'< Previous'}
        </PaginateLink>
      )}
      {prvArray.map((pageNumber) => (
        <PaginateLink href={`/workouts/${pageNumber}`}>
          {pageNumber}
        </PaginateLink>
      ))}
      <PaginateBox>{currentPage}</PaginateBox>
      {nextArray.map((pageNumber) => (
        <PaginateLink href={`/workouts/${pageNumber}`}>
          {pageNumber}
        </PaginateLink>
      ))}
      <PaginateLink href={`/workouts/${nextPage}`}>{'Next >'}</PaginateLink>
    </>
  );
};

export default Pagination;
