import { Stack } from "../../../../components/Stack/Stack"
import { useQuoteState } from "../../../../hooks/useQuoteState"
import { FormClose, FormHeaderContainer, FormTitle } from "./FormHeader.styles"

const FormHeader = () => {
  const { dispatch } = useQuoteState()
  return (
    <FormHeaderContainer>
      <Stack flexDirection="column">
        <Stack justifyContent="space-between" alignItems="center">
          <FormTitle>Create a quote</FormTitle>
          <FormClose
            aria-label="Close form"
            onClick={() => dispatch({ type: "toggleModal" })}
          />
        </Stack>
      </Stack>
    </FormHeaderContainer>
  )
}

export { FormHeader }
