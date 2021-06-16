import styled from "styled-components"

const StyledInput = styled.input`
  padding: ${(p) => p.theme.sizes.smplus};
  border-radius: ${(p) => p.theme.sizes.sm};
  border: 1px solid ${(p) => p.theme.colors.gray.light};
`

export { StyledInput }
