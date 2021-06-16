import styled from "styled-components"
import { StackProps } from "./Stack"

const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(p) => p.flexDirection};
  flex-shrink: ${(p) => p.flexShrink};
  flex-grow: ${(p) => p.flexGrow};
  justify-content: ${(p) => p.justifyContent};
  flex-basis: ${(p) => p.flexBasis};
  flex-wrap: ${(p) => p.flexWrap};
`

type SpacerProps = {
  x?: number
  y?: number
  basis?: number
}

const Spacer = styled.div<SpacerProps>`
  width: ${(p) => (p.x ? `${p.x}px` : undefined)};
  height: ${(p) => (p.y ? `${p.y}px` : undefined)};
  flex-basis: ${(p) => (p.basis ? p.basis : undefined)};
  flex-grow: 0;
  flex-shrink: 0;
`

export { StyledStack, Spacer }
