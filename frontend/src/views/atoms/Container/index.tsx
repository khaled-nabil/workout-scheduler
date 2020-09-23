import React, { FC } from 'react';
import styled from 'styled-components';
import { css } from '@styled-system/css';

const StyledContainer = styled('div')(
  css({
    position: 'relative',
  }),
);

const Container: FC = ({ children }) => (
  <StyledContainer>
    <>{children}</>
  </StyledContainer>
);

export default Container;
