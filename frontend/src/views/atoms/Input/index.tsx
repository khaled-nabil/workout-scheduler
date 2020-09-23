import React, { FC, forwardRef } from 'react';
import styled from 'styled-components';
import { space, color, border, layout } from 'styled-system';
import { css } from '@styled-system/css';
import { InputAtom, StyledInputAtom } from './Input.interface';

const StyledInput: FC<StyledInputAtom> = styled('input')(
  css({
    bg: 'grayLight',
    borderRadius: '5px',
    boxSizing: 'border-box',
    border: '1px solid gray',
    fontSize: 'medium',
    padding: '2',
    mb: 2,
  }),
  space,
  color,
  border,
  layout,
);

const Input: React.FC<InputAtom> = forwardRef((props, ref) => (
  <StyledInput ref={ref} {...props} />
));

export default Input;
