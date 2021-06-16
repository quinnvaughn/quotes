import React from 'react'
import { ButtonStyleProps, getBGColor, StyledButton } from './Button.styles'

type ButtonProps = ButtonStyleProps & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <StyledButton
            {...props}
            style={{
                ['--bg-color' as string]: getBGColor(props),
            }}
        >
            {props.children}
        </StyledButton>
    )
}

export { Button }
