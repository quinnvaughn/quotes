import styled from "styled-components"

const StyledLabel = styled.label`
  font-size: ${(p) => p.theme.sizes.smplus};
  font-weight: 700;
`

const RequiredTag = styled.span`
  color: ${(p) => p.theme.colors.toast.error};
`

const OptionalTag = styled.span`
  color: ${(p) => p.theme.colors.gray.light};
`

export { StyledLabel, RequiredTag, OptionalTag }
