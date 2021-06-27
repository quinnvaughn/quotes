import React from "react"
import { Stack } from "../../../../components/Stack/Stack"
import { StyledInput } from "./FormInput.styles"
import { FormLabel } from "../FormLabel/FormLabel"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  required?: boolean
}

const FormInput: React.FC<Props> = ({ label, required, ...rest }) => {
  return (
    <Stack flexDirection="column" spacing={4}>
      <FormLabel required={required} text={label} />
      <StyledInput {...rest} autoComplete="off" />
    </Stack>
  )
}

export { FormInput }
