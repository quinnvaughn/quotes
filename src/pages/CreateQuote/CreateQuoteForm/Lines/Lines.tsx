import { FieldArrayRenderProps, FormikHandlers } from "formik"
import { Button } from "../../../../components/Button/Button"
import { Stack } from "../../../../components/Stack/Stack"
import { Line } from "../CreateQuoteForm"
import { LineList } from "./LineList"
import { LinesTop, LinesTitle } from "./Lines.styles"

type LineProps = {
  lines: Line[]
  characters: string[]
  handleChange: FormikHandlers["handleChange"]
  arrayHelpers: FieldArrayRenderProps
}

const Lines: React.FC<LineProps> = ({
  lines,
  handleChange,
  characters,
  arrayHelpers: { insert, remove },
}) => {
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
      <LineList
        characters={characters}
        remove={remove}
        handleChange={handleChange}
        lines={lines}
      />
    </Stack>
  )
}

export { Lines }
