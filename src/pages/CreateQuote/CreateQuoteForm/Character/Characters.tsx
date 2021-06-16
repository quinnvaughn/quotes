import { FieldArrayRenderProps, useFormikContext } from "formik"
import { useState } from "react"
import { Button } from "../../../../components/Button/Button"
import { Stack } from "../../../../components/Stack/Stack"
import { Tag } from "../../../../components/Tag/Tag"
import { StyledLabel } from "../../FormInput/FormInput.styles"
import { Inputs } from "../CreateQuoteForm"
import { CharacterInput } from "./Character.styles"

type Props = {
  arrayHelpers: FieldArrayRenderProps
}

const Characters: React.FC<Props> = ({ arrayHelpers: { insert, remove } }) => {
  const {
    setFieldValue,
    values: { lines, characters },
  } = useFormikContext<Inputs>()
  const [text, setText] = useState("")

  const removeCharactersEverywhere = (character: string, idx: number) => {
    const newLines = lines.map((line) => {
      if (line.character === character) {
        return { ...line, character: "" }
      }
      return line
    })
    remove(idx)
    setFieldValue("lines", newLines)
  }

  const addCharacter = () => {
    insert(characters.length, text)
    setText("")
  }

  return (
    <Stack flexDirection="column" spacing={8}>
      <Stack flexDirection="column" spacing={4}>
        <StyledLabel>Characters</StyledLabel>
        <Stack spacing={4}>
          <CharacterInput
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            disabled={text.length === 0}
            type="button"
            secondary
            onClick={() => addCharacter()}
          >
            Add Character
          </Button>
        </Stack>
      </Stack>
      <Stack spacing={4}>
        {characters.map((ch, idx) => (
          <Tag
            text={ch}
            removable
            onClick={() => removeCharactersEverywhere(ch, idx)}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export { Characters }
