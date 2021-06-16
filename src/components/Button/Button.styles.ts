import styled from "styled-components"
import { darken } from "polished"
import { theme } from "../../theme/theme"

export type ButtonStyleProps = {
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
}

function getBGColor(props: ButtonStyleProps): string {
  return props.tertiary
    ? theme.colors.brand.tertiary
    : props.secondary
    ? theme.colors.brand.secondary
    : theme.colors.brand.primary
}

const StyledButton = styled.button<ButtonStyleProps>`
  background-color: var(--bg-color);
  border: 0;
  padding: ${(p) => p.theme.sizes.smplus} ${(p) => p.theme.sizes.sm};
  border-radius: ${(p) => p.theme.sizes.xs};
  color: ${(p) => p.theme.colors.text.white};
  font-size: ${(p) => p.theme.sizes.md};
  font-weight: 700;
  cursor: pointer;

  :hover {
    background-color: ${(p) => darken(0.05, getBGColor(p))};
  }

  :disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`

export { StyledButton, getBGColor }
