import React, { FC } from 'react';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import { css } from '@styled-system/css';
import { InputAtom } from './Input.interface';

const StyledInput: FC<InputAtom> = styled('input')(
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
);

const Input: React.FC<InputAtom> = ({ children, ...props }) => (
  <StyledInput {...props}>{children}</StyledInput>
);

export default Input;
