import styled from "styled-components"
import { MdClose } from "react-icons/md"

const FormTitle = styled.h2`
  font-size: ${(p) => p.theme.sizes.lg};
  padding: 0;
  margin: 0;
`

const FormHeaderContainer = styled.div`
  padding-bottom: ${(p) => p.theme.sizes.sm};
  border-bottom: 1px solid ${(p) => p.theme.colors.gray.light};
`

const FormClose = styled(MdClose)`
  font-size: ${(p) => p.theme.sizes.lg};

  :hover {
    color: ${(p) => p.theme.colors.brand.primary};
    cursor: pointer;
  }
`

export { FormTitle, FormClose, FormHeaderContainer }
