import {
  SpaceProps,
  BorderProps,
  BoxShadowProps,
  ColorProps,
  LayoutProps,
} from 'styled-system';

export interface InputAtomBase
  extends SpaceProps,
    BorderProps,
    BoxShadowProps,
    ColorProps,
    LayoutProps {
  type?: string;
  name: string;
  id?: string;
  defaultChecked?: boolean;
}

export interface StyledInputAtom extends Partial<InputAtomBase> {}

export interface InputAtom extends InputAtomBase {
  onClick?: (e: Event) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  max?: string;
  defaultValue?: string;
}
