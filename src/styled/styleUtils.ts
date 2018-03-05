/* eslint-disable no-duplicate-imports */
/* eslint-disable import/no-duplicates */
import * as styledComponents from 'styled-components'
import { StyledFunction, ThemedStyledComponentsModule } from 'styled-components'
/* eslint-enable import/no-duplicates */
/* eslint-enable no-duplicate-imports */

import { ThemeInterface } from '../config/theme'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = (styledComponents as ThemedStyledComponentsModule<
  any
>) as ThemedStyledComponentsModule<ThemeInterface>

const sizes = {
  giant: 1920,
  desktop: 1500,
  screen: 1200,
  tablet: 992,
  phone: 768,
}

export { css, injectGlobal, keyframes, ThemeProvider, StyledFunction }
export default styled
