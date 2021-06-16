import { FieldArrayRenderProps, useFormikContext } from "formik"
import { Button } from "../../../../components/Button/Button"
import { Stack } from "../../../../components/Stack/Stack"
import { Inputs } from "../CreateQuoteForm"
import { LineList } from "./LineList"
import { LinesTop, LinesTitle } from "./Lines.styles"

type LineProps = {
  arrayHelpers: FieldArrayRenderProps
}

const Lines: React.FC<LineProps> = ({ arrayHelpers: { insert, remove } }) => {
  const {
    values: { lines },
  } = useFormikContext<Inputs>()
  return (
    <Stack flexDirection="column" spacing={4}>
      <LinesTop>
        <LinesTitle>Lines</LinesTitle>
        <Button
          type="button"
          secondary
          onClick={() => insert(lines.length, { character: "", line: "" })}
        >
          Add Line
        </Button>
      </LinesTop>
      <LineList remove={remove} />
    </Stack>
  )
}

export { Lines }
