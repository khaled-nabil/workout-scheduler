import css from '@styled-system/css';
import { FC } from 'react';
import styled from 'styled-components';
import { border, space, variant } from 'styled-system';
import { LabelAtom } from './Label.interface';

const Label: FC<LabelAtom> = styled('label')(
  css({
    bg: 'white',
    border: '1px solid gray',
  }),
  border,
  space,
  variant({
    variants: {
      true: {
        bg: 'grayLight',
        border: '1px solid black',
      },
    },
  }),
);

export default Label;
