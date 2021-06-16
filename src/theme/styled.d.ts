import 'styled-components'
import {} from 'styled-components/cssprop'

declare module 'styled-components' {
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
            brand: {
                primary: string
                secondary: string
                tertiary: string
            }
            gray: {
                light: string
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
