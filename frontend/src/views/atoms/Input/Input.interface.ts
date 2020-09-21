import {
  SpaceProps,
  BorderProps,
  BoxShadowProps,
  ColorProps,
} from 'styled-system';

export interface InputAtom
  extends SpaceProps,
    BorderProps,
    BoxShadowProps,
    ColorProps {
  type?: string;
}
