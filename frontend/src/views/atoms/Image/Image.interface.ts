import { SpaceProps, LayoutProps } from 'styled-system';

export interface ImageAtom extends SpaceProps, LayoutProps {
  alt?: string;
  src: string;
}
