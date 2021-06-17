import React from "react"
import { useFormikContext } from "formik"
import { Tag } from "../../../../components/Tag/Tag"
import { FormInput } from "../FormInput/FormInput"
import { getAllShows } from "../utils/getAllShows"
import { CreateFormValues } from "../CreateQuoteForm"
import { Stack } from "../../../../components/Stack/Stack"

const Show: React.FC<{}> = () => {
  const {
    values: { show },
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormikContext<CreateFormValues>()
  return (
    <Stack flexDirection="column" spacing={8}>
      <FormInput
        autoFocus
        onBlur={handleBlur}
        value={show}
        required
        label="Name of show or movie"
        onChange={handleChange}
        name="show"
      />
      <Stack gap={4} flexWrap="wrap">
        {getAllShows().map((show) => (
          <Tag
            text={show}
            key={show}
            onClick={() => setFieldValue("show", show)}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export { Show }
