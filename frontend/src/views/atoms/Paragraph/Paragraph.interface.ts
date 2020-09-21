import { ColorProps, SpaceProps, TypographyProps } from 'styled-system';

export interface ParagraphAtom extends TypographyProps, ColorProps, SpaceProps {
  className?: string;
}
