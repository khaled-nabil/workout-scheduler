import { LinkProps } from 'react-router-dom';
import {
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  BorderProps,
  BoxShadowProps,
  ColorProps,
} from 'styled-system';

export interface LinkAtom
  extends FlexboxProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    BoxShadowProps,
    ColorProps {
  href: string;
  to?: LinkProps['to'];
}
