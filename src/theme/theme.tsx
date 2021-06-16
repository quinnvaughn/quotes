import React from "react"
import { DefaultTheme, ThemeProvider } from "styled-components"
const theme: DefaultTheme = {
  sizes: {
    xs: "4px",
    sm: "8px",
    smplus: "12px",
    md: "16px",
    mdplus: "24px",
    lg: "32px",
    xl: "64px",
    xxl: "128px",
  },
  colors: {
    toast: {
      success: "#4BCA81",
      error: "#ff0033",
    },
    brand: {
      primary: "#7510F7",
      secondary: "#048A81",
      tertiary: "#54C6EB",
    },
    background: {
      main: "#FBFBFF",
    },
    gray: {
      light: "#d3d3d3",
      medium: "#808080",
    },
    text: {
      black: "#0D0106",
      white: "#fff",
    },
  },
}

const StyledComponentsThemeProvider: React.FC<{}> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export { theme, StyledComponentsThemeProvider }
