import { createGlobalStyle, css } from 'styled-components'

export const fontUrl =
    'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900'

export const bodyStyles = css`
    /* global styles */
    @import url(
        https://fonts.googleapis.com/css?family=Nunito+Sans:400,
        700,
        800,
        900
    );

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Nunito Sans'
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`
