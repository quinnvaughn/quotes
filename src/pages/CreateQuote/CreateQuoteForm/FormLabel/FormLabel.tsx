import { Stack } from "../../../../components/Stack/Stack"
import { OptionalTag, RequiredTag, StyledLabel } from "./FormLabel.styles"

type FormLabelProps = {
  text: string
  required?: boolean
}

const FormLabel: React.FC<FormLabelProps> = (props) => {
  return (
    <StyledLabel aria-required={props.required ? true : false}>
      <Stack spacing={3}>
        <span>{props.text}</span>
        {props.required ? (
          <RequiredTag>*</RequiredTag>
        ) : (
          <OptionalTag>(optional)</OptionalTag>
        )}
      </Stack>
    </StyledLabel>
  )
}

export { FormLabel }
