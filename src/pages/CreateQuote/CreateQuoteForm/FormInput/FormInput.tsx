import React from "react"
import { Stack } from "../../../../components/Stack/Stack"
import { StyledInput, StyledLabel } from "./FormInput.styles"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

const FormInput: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <Stack flexDirection="column" spacing={4}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...rest} />
    </Stack>
  )
}

export { FormInput }
