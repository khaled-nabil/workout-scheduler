import React, { FC } from 'react';
import styled from 'styled-components';
import { css } from '@styled-system/css';

const StyledLoadingScreen = styled('div')(
  css({
    position: 'absolute',
    top: '0',
    bottom: '0',
    width: '100%',
    bg: 'white',
    opacity: '30%',
  }),
);

const LoadingScreen: FC<{ display: boolean }> = ({ display }) => (
  <>{display && <StyledLoadingScreen />}</>
);

export default LoadingScreen;
