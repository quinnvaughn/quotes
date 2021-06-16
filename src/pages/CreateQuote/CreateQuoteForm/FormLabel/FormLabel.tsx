import { Stack } from "../../../../components/Stack/Stack"
import { OptionalTag, RequiredTag, StyledLabel } from "./FormLabel.styles"

type FormLabelProps = {
  text: string
  required?: boolean
}

const FormLabel: React.FC<FormLabelProps> = (props) => {
  return (
    <StyledLabel aria-required={props.required ? true : false}>
      <Stack spacing={props.required ? 1 : 3}>
        {props.required && <RequiredTag>*</RequiredTag>}
        <span>{props.text}</span>
        {!props.required && <OptionalTag>(optional)</OptionalTag>}
      </Stack>
    </StyledLabel>
  )
}

export { FormLabel }
