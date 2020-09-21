import { DefaultTheme } from 'styled-components';
import colors from './colors';
import spacing from './spacing';
import fonts from './fonts';
import breakpoints from './breakpoints';

const defaultTheme: DefaultTheme = {
  ...colors,
  ...spacing,
  ...fonts,
  ...breakpoints,
};

export { default as GlobalStyle } from './globalStyle';
export default defaultTheme;
