import { FieldArrayRenderProps, useFormikContext } from "formik"
import { useState } from "react"
import { Button } from "../../../../components/Button/Button"
import { Stack } from "../../../../components/Stack/Stack"
import { Tag } from "../../../../components/Tag/Tag"
import { Inputs } from "../CreateQuoteForm"
import { CharacterInput } from "./Character.styles"
import { FormLabel } from "../FormLabel/FormLabel"
import { useEffect } from "react"
import { QuoteType, useQuoteState } from "../../../../hooks/useQuoteState"
import { useDebounce } from "../../../../hooks/useDebounce"
import { useCallback } from "react"

type Props = {
  arrayHelpers: FieldArrayRenderProps
}

const Characters: React.FC<Props> = ({ arrayHelpers: { insert, remove } }) => {
  const {
    setFieldValue,
    touched,
    values: { show, lines, characters },
  } = useFormikContext<Inputs>()
  const { state } = useQuoteState()
  const debouncedShow = useDebounce(show, 300)
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

  const grabPreviousCharacters = (quotes: QuoteType[]) => {
    const allCharacters = quotes.reduce<string[]>((chars, quote) => {
      if (quote.show === show) {
        const showChars = quote.lines.map((line) => line.character)
        return [...chars, ...showChars]
      }
      return chars
    }, [])
    return [...new Set(allCharacters)]
  }

  const addPreviousCharacters = (chars: string[]) => {
    for (let char of chars) {
      if (!characters.includes(char)) {
        insert(characters.length, char)
      }
    }
  }

  const addCharacter = () => {
    insert(characters.length, text)
    setText("")
  }

  const memoizedGrab = useCallback(
    (quotes: QuoteType[]) => grabPreviousCharacters(quotes),
    [grabPreviousCharacters]
  )

  useEffect(() => {
    if (debouncedShow.length > 0 && touched.show) {
      setFieldValue("characters", [])
      addPreviousCharacters(memoizedGrab(state.quotes))
    }
  }, [debouncedShow, touched.show])

  return (
    <Stack flexDirection="column" spacing={8}>
      <Stack flexDirection="column" spacing={4}>
        <FormLabel text="Characters" required />
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
      <Stack gap={4} flexWrap="wrap">
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
