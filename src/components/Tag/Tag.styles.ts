import { darken } from "polished"
import styled from "styled-components"

const TagContainer = styled.span`
  background-color: ${(p) => p.theme.colors.brand.tertiary};
  padding: ${(p) => p.theme.sizes.sm} ${(p) => p.theme.sizes.smplus};
  border-radius: 500px;
  border: none;
  color: ${(p) => p.theme.colors.text.white};
  font-size: ${(p) => p.theme.sizes.smplus};
  text-align: center;

  :hover {
    cursor: pointer;
    background-color: ${(p) => darken(0.05, p.theme.colors.brand.tertiary)};
  }
`

export { TagContainer }
