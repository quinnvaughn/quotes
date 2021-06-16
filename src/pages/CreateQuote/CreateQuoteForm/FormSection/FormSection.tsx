import React from "react"
import { Stack } from "../../../../components/Stack/Stack"
import { FormSectionTitle } from "./FormSection.style"

type Props = {
  title: string
}

const FormSection: React.FC<Props> = (props) => {
  return (
    <Stack flexDirection="column" spacing={16}>
      <FormSectionTitle>{props.title}</FormSectionTitle>
      {props.children}
    </Stack>
  )
}

export { FormSection }
