import { FieldArray, Formik, Form } from "formik"
import * as yup from "yup"
import { Button } from "../../../components/Button/Button"
import { FormInput } from "./FormInput/FormInput"
import { Show } from "./Show/Show"
import { QuoteType, useQuoteState } from "../../../hooks/useQuoteState"
import { Lines } from "./Lines/Lines"
import { Characters } from "./Characters/Characters"
import { Stack } from "../../../components/Stack/Stack"
import { useToast } from "../../../hooks/useToast"
import { Indication } from "./Indication/Indication"
import { FormHeader } from "./FormHeader/FormHeader"

export type Line = {
  character: string
  line: string
}

export type CreateFormValues = {
  show: string
  link?: string
  lines: Line[]
  characters: string[]
}

const initialValues: CreateFormValues = {
  lines: [{ character: "", line: "" }],
  link: "",
  show: "",
  characters: [],
}

const CreateQuoteValidationSchema = yup.object().shape({
  show: yup.string().required("Required").min(1),
  characters: yup.array().of(yup.string()).min(1),
  lines: yup.array().of(
    yup.object().shape({
      character: yup.string().required("Character required"),
      line: yup.string().required("Line required").min(1),
    })
  ),
})

const CreateQuoteForm = () => {
  const { dispatch } = useQuoteState()
  const toast = useToast()
  return (
    <Formik
      validationSchema={CreateQuoteValidationSchema}
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
        toast({ message: "You created a quote!" })
      }}
    >
      {(props) => (
        <Form autoComplete="off">
          <Stack flexDirection="column" spacing={30}>
            <FormHeader />
            <Indication />
            <Show />
            <FieldArray
              name="characters"
              render={(arrayHelpers) => (
                <Characters arrayHelpers={arrayHelpers} />
              )}
            />
            <FieldArray
              name="lines"
              render={(arrayHelpers) => <Lines arrayHelpers={arrayHelpers} />}
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
