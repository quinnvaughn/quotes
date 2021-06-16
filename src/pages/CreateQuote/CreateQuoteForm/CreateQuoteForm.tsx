import { FieldArray, Formik, Form } from "formik"
import { Button } from "../../../components/Button/Button"
import { FormInput } from "../FormInput/FormInput"
import { Show } from "./Show/Show"
import { QuoteType, useQuoteState } from "../../../hooks/useQuoteState"
import { Lines } from "./Lines/Lines"
import { Characters } from "./Character/Characters"
import { Stack } from "../../../components/Stack/Stack"

export type Line = {
  character: string
  line: string
}

export type Inputs = {
  show: string
  link?: string
  lines: Line[]
  characters: string[]
}

const initialValues: Inputs = {
  lines: [{ character: "", line: "" }],
  link: "",
  show: "",
  characters: [],
}

const CreateQuoteForm = () => {
  const { dispatch } = useQuoteState()
  return (
    <Formik
      validateOnMount={true}
      initialValues={initialValues}
      onSubmit={(values) => {
        const quote: Omit<QuoteType, "id"> = {
          lines: values.lines,
          link: values.link,
          show: values.show,
        }
        dispatch({ type: "addQuote", payload: quote })
        dispatch({ type: "toggleModal" })
      }}
    >
      {(props) => (
        <Form>
          <Stack flexDirection="column" spacing={30}>
            <Show
              setFieldValue={props.setFieldValue}
              handleChange={props.handleChange}
              show={props.values.show}
            />
            <FieldArray
              name="characters"
              render={(arrayHelpers) => (
                <Characters
                  lines={props.values.lines}
                  setFieldValue={props.setFieldValue}
                  arrayHelpers={arrayHelpers}
                  characters={props.values.characters}
                />
              )}
            />
            <FieldArray
              name="lines"
              render={(arrayHelpers) => (
                <Lines
                  characters={props.values.characters}
                  arrayHelpers={arrayHelpers}
                  handleChange={props.handleChange}
                  lines={props.values.lines}
                />
              )}
            />
            <FormInput label="Link" onChange={props.handleChange} name="link" />
            <Button disabled={!props.isValid} type="submit">
              Submit
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  )
}

export default CreateQuoteForm
