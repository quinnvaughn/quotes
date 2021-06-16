import styled from "styled-components"
import { darken } from "polished"
import { FaTrash } from "react-icons/fa"

const AddLineButton = styled.button`
  padding: ${(p) => p.theme.sizes.smplus};
  margin: 0;
  border: 0;
  color: white;
  border-radius: ${(p) => p.theme.sizes.xs};
  background-color: ${(p) => p.theme.colors.brand.secondary};
  font-size: ${(p) => p.theme.sizes.smplus};
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    cursor: pointer;
    background-color: ${(p) => darken(0.05, p.theme.colors.brand.secondary)};
  }
`

const LinesTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${(p) => p.theme.sizes.md};
`

const LinesTitle = styled.h4`
  padding: 0;
  margin: 0;
`

const CustomLineInput = styled.input`
  flex: 1;
  padding: ${(p) => p.theme.sizes.smplus};
  border-radius: ${(p) => p.theme.sizes.sm};
  border: 1px solid ${(p) => p.theme.colors.gray.light};
`

const CustomSelect = styled.select`
  max-width: 200px;
  padding: ${(p) => p.theme.sizes.smplus};
  border-radius: ${(p) => p.theme.sizes.sm};
  border: 1px solid ${(p) => p.theme.colors.gray.light};
`

const LineTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DeleteLine = styled(FaTrash)`
  color: ${(p) => p.theme.colors.brand.tertiary};
  font-size: ${(p) => p.theme.sizes.md};

  cursor: pointer;

  :hover {
    color: ${(p) => darken(0.1, p.theme.colors.brand.tertiary)};
  }
`

export {
  AddLineButton,
  LinesTitle,
  LinesTop,
  CustomLineInput,
  CustomSelect,
  LineTop,
  DeleteLine,
}
