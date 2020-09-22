import React, { FC } from 'react';
import styled from 'styled-components';
import { color, typography, space } from 'styled-system';
import { css } from '@styled-system/css';
import { ParagraphAtom } from './Paragraph.interface';

const StyledParagraph: FC<ParagraphAtom> = styled('p')(
  css({
    fontFamily: 'body',
    fontSize: 'medium',
    color: 'black',
  }),
  typography,
  color,
  space,
);

const Paragraph: FC<ParagraphAtom> = ({ children, ...props }) => (
  <StyledParagraph {...props}>{children}</StyledParagraph>
);

export default Paragraph;
