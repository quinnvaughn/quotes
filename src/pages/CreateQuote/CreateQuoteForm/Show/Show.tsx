import React from "react"
import { FormikHandlers, FormikHelpers } from "formik"
import { Tag } from "../../../../components/Tag/Tag"
import { FormInput } from "../../FormInput/FormInput"
import { getAllShows } from "../utils/getAllShows"
import { Inputs } from "../CreateQuoteForm"
import { Stack } from "../../../../components/Stack/Stack"

type Props = {
  show: string
  handleChange: FormikHandlers["handleChange"]
  setFieldValue: FormikHelpers<Inputs>["setFieldValue"]
}

const Show: React.FC<Props> = (props) => {
  return (
    <Stack flexDirection="column" spacing={8}>
      <FormInput
        autoFocus
        value={props.show}
        label="Show/Movie"
        onChange={props.handleChange}
        name="show"
      />
      <Stack spacing={4}>
        {getAllShows().map((show) => (
          <Tag
            text={show}
            key={show}
            onClick={() => props.setFieldValue("show", show)}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export { Show }
