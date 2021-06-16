import { Inputs } from "../CreateQuoteForm"
import { ArrayHelpers, useFormikContext } from "formik"
import { LineInput } from "./LineInput"
import { Stack } from "../../../../components/Stack/Stack"

type LineProps = {
  remove: ArrayHelpers["remove"]
}

const LineList: React.FC<LineProps> = ({ remove }) => {
  const {
    values: { lines },
  } = useFormikContext<Inputs>()
  return (
    <Stack flexDirection="column" spacing={12}>
      {lines.map((line, idx) => (
        <LineInput remove={remove} character={line.character} idx={idx} />
      ))}
    </Stack>
  )
}

export { LineList }
