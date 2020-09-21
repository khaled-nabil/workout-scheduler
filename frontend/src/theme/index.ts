import { DefaultTheme } from 'styled-components';
import colors from './colors';
import spacing from './spacing';
import fonts from './fonts';

const defaultTheme: DefaultTheme = {
  ...colors,
  ...spacing,
  ...fonts,
};

export { default as GlobalStyle } from './globalStyle';
export default defaultTheme;
