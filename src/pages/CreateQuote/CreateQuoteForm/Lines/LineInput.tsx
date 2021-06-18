import { ArrayHelpers, useFormikContext } from "formik"
import {
  CustomLineInput,
  CustomSelect,
  DeleteLine,
  LineTop,
} from "./Lines.styles"
import { Stack } from "../../../../components/Stack/Stack"
import { CreateFormValues } from "../CreateQuoteForm"
import { FormLabel } from "../FormLabel/FormLabel"

type LineInputProps = {
  idx: number
  character: string
  remove: ArrayHelpers["remove"]
}

const LineInput: React.FC<LineInputProps> = ({ idx, character, remove }) => {
  const {
    values: { characters },
    handleChange,
  } = useFormikContext<CreateFormValues>()
  return (
    <Stack flexDirection="column" spacing={8}>
      <LineTop>
        <FormLabel text="Line" required />
        {idx !== 0 && <DeleteLine onClick={() => remove(idx)} />}
      </LineTop>
      <Stack spacing={8}>
        <CustomSelect
          value={character}
          name={`lines.${idx}.character`}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select a character
          </option>
          {characters.map((ch) => (
            <option key={ch} value={ch}>
              {ch}
            </option>
          ))}
        </CustomSelect>
        <CustomLineInput onChange={handleChange} name={`lines.${idx}.line`} />
      </Stack>
    </Stack>
  )
}

export { LineInput }
