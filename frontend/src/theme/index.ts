import { DefaultTheme } from 'styled-components';
import colors from './colors';
import spacing from './spacing';

const defaultTheme: DefaultTheme = {
  ...colors,
  ...spacing,
};
export default defaultTheme;
