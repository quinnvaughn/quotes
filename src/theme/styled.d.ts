import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    sizes: {
      xs: string
      sm: string
      smplus: string
      md: string
      mdplus: string
      lg: string
      xl: string
      xxl: string
    }
    colors: {
      toast: {
        success: string
        error: string
      }
      brand: {
        primary: string
        secondary: string
        tertiary: string
      }
      gray: {
        light: string
        medium: string
      }
      background: {
        main: string
      }
      text: {
        black: string
        white: string
      }
    }
  }
}
