import React, { FC } from 'react';
import styled from 'styled-components';
import { space, layout } from 'styled-system';
import { css } from '@styled-system/css';
import { ImageAtom } from './Image.interface';

const StyledImage: FC<Partial<ImageAtom>> = styled('img')(
  css({
    maxWidth: '100%',
    height: 'auto',
  }),
  space,
  layout,
);

const Image: FC<ImageAtom> = ({ alt, src, ...props }) => (
  <StyledImage alt={alt} src={src} {...props} />
);

export default Image;
