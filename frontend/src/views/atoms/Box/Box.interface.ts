import {
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  BorderProps,
  BoxShadowProps,
  ColorProps,
} from 'styled-system';

export interface BoxAtom
  extends FlexboxProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    BoxShadowProps,
    ColorProps {
  className?: string;
}
