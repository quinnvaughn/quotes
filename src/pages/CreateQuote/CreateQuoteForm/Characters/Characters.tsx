import { FieldArrayRenderProps, useFormikContext } from "formik"
import { useState } from "react"
import { Button } from "../../../../components/Button/Button"
import { Stack } from "../../../../components/Stack/Stack"
import { Tag } from "../../../../components/Tag/Tag"
import { CreateFormValues } from "../CreateQuoteForm"
import { CharacterInput } from "./Character.styles"
import { FormLabel } from "../FormLabel/FormLabel"
import { useEffect } from "react"
import { QuoteType, useQuoteState } from "../../../../hooks/useQuoteState"
import { BehaviorSubject } from "rxjs"
import { debounceTime, distinctUntilChanged, filter, map } from "rxjs/operators"

type Props = {
  arrayHelpers: FieldArrayRenderProps
}

const Characters: React.FC<Props> = ({ arrayHelpers: { insert, remove } }) => {
  const {
    setFieldValue,
    values: { show, lines, characters },
  } = useFormikContext<CreateFormValues>()

  const { state } = useQuoteState()
  const [subject, setSubject] = useState<BehaviorSubject<string> | null>(null)

  useEffect(() => {
    if (subject) {
      return subject.next(show)
    }
  }, [show])

  useEffect(() => {
    const getPreviousCharacters = (quotes: QuoteType[], show: string) => {
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

    const clearCharacters = () => {
      setFieldValue("characters", [])
    }

    if (subject === null) {
      const sub = new BehaviorSubject<string>("")
      setSubject(sub)
    } else {
      const observable = subject
        .pipe(
          map((s) => s.trim()),
          distinctUntilChanged(),
          filter((s) => s.length >= 2),
          debounceTime(300)
        )
        .subscribe((show) => {
          clearCharacters()
          const previousCharacters = getPreviousCharacters(state.quotes, show)
          addPreviousCharacters(previousCharacters)
        })

      return () => {
        observable.unsubscribe()
        subject.unsubscribe()
      }
    }
  }, [subject])

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
        <FormLabel text="Characters" required />
        <Stack spacing={4}>
          <CharacterInput
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            disabled={text.length === 0 || characters.includes(text)}
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
            key={ch}
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
