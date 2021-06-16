import React from "react"
import { useFormikContext } from "formik"
import { Tag } from "../../../../components/Tag/Tag"
import { FormInput } from "../FormInput/FormInput"
import { getAllShows } from "../utils/getAllShows"
import { Inputs } from "../CreateQuoteForm"
import { Stack } from "../../../../components/Stack/Stack"

const Show: React.FC<{}> = () => {
  const {
    values: { show },
    handleChange,
    setFieldValue,
  } = useFormikContext<Inputs>()
  return (
    <Stack flexDirection="column" spacing={8}>
      <FormInput
        autoFocus
        value={show}
        label="Show/Movie"
        onChange={handleChange}
        name="show"
      />
      <Stack spacing={4}>
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
