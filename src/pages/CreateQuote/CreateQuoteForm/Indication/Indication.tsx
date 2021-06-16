import { Stack } from "../../../../components/Stack/Stack"
import { RequiredTag } from "../FormLabel/FormLabel.styles"

const Indication = () => {
  return (
    <Stack spacing={4}>
      <RequiredTag>*</RequiredTag>
      <span>indicates a required field</span>
    </Stack>
  )
}

export { Indication }
