/// <reference types="react-scripts" />

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    space: Array[string | number];
    colors: Record<string, any>;
    fontFamily: Record<string, string>;
    fontSizes: Record<string, string>;
    breakpoints: Array<string>;
  }
}
