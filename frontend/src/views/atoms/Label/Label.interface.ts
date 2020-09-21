import { BorderProps, SpaceProps } from 'styled-system';

export interface LabelAtom extends BorderProps, SpaceProps {
  className?: string;
  variant?: boolean;
}
