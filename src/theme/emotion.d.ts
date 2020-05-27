import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      white: {
        300: '#F9F6E9'
        200: '#FEFCF1'
        100: '#FFFFFF'
      }
    }
    font: {
      family: 'Open Sans',
      size: {
        large: '18px'
        medium: '16px'
        small: '14px'
        xsmall: '12px'
      }
    }
    breakpoint: {
      xsmall: '320px'
      small: '768px'
      medium: '992px'
      large: '1440px'
      xlarge: '1680px'
    }
  }
}
