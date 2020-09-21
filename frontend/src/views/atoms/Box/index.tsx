import React, { FC } from 'react';
import styled from 'styled-components';
import { flex, flexbox, space, layout, color, border } from 'styled-system';
import { css } from '@styled-system/css';
import { BoxAtom } from './Box.interface';

const StyledBox: FC<BoxAtom> = styled('div')(
  css({
    maxWidth: '100%',
    height: 'auto',
    boxSizing: 'border-box',
  }),
  flex,
  flexbox,
  space,
  layout,
  color,
  border,
);

const Box: React.FC<BoxAtom> = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
);

export default Box;
