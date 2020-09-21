import React, { FC } from 'react';
import styled from 'styled-components';
import { color, typography, space } from 'styled-system';
import { css } from '@styled-system/css';
import { ParagraphAtom } from './Paragraph.interface';

const StyledRow: FC<ParagraphAtom> = styled('p')(
  css({
    fontFamily: 'body',
    fontSize: 'medium',
    color: 'black',
  }),
  typography,
  color,
  space,
);

const Row: FC<ParagraphAtom> = ({ children, ...props }) => (
  <StyledRow {...props}>{children}</StyledRow>
);

export default Row;
