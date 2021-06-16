import { ArrayHelpers, FormikHandlers } from "formik"
import {
  CustomLineInput,
  CustomSelect,
  DeleteLine,
  LineTop,
} from "./Lines.styles"
import { StyledLabel } from "../../FormInput/FormInput.styles"
import { useQuoteState } from "../../../../hooks/useQuoteState"
import { Stack } from "../../../../components/Stack/Stack"

type LineInputProps = {
  handleChange: FormikHandlers["handleChange"]
  idx: number
  character: string
  characters: string[]
  remove: ArrayHelpers["remove"]
}

const LineInput: React.FC<LineInputProps> = ({
  idx,
  handleChange,
  character,
  characters,
  remove,
}) => {
  const { state } = useQuoteState()
  return (
    <Stack flexDirection="column" spacing={8}>
      <LineTop>
        <StyledLabel>Line</StyledLabel>
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
            <option value={ch}>{ch}</option>
          ))}
        </CustomSelect>
        <CustomLineInput onChange={handleChange} name={`lines.${idx}.line`} />
      </Stack>
    </Stack>
  )
}

export { LineInput }
