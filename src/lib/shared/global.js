import { createGlobalStyle, css } from 'styled-components'
import { color, typography } from './styles'

export const fontUrl =
    'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900'

export const bodyStyles = css`
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s3}px;
    color: ${color.darkest};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
    * {
        box-sizing: border-box;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: ${typography.weight.regular};
        margin: 0;
        padding: 0;
    }
    button,
    input,
    textarea,
    select {
        outline: none;
        font-family: ${typography.type.primary};
    }
`

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`
