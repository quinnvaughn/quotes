import { Line } from "../CreateQuoteForm"
import { FormikHandlers, ArrayHelpers } from "formik"
import { LineInput } from "./LineInput"
import { Stack } from "../../../../components/Stack/Stack"

type LineProps = {
  lines: Line[]
  characters: string[]
  handleChange: FormikHandlers["handleChange"]
  remove: ArrayHelpers["remove"]
}

const LineList: React.FC<LineProps> = ({
  lines,
  handleChange,
  remove,
  characters,
}) => {
  return (
    <Stack flexDirection="column" spacing={12}>
      {lines.map((line, idx) => (
        <LineInput
          characters={characters}
          remove={remove}
          character={line.character}
          handleChange={handleChange}
          idx={idx}
        />
      ))}
    </Stack>
  )
}

export { LineList }
