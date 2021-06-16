import React from "react"
import { Stack } from "../../../components/Stack/Stack"
import { QuoteType, useQuoteState } from "../../../hooks/useQuoteState"
import { useToast } from "../../../hooks/useToast"
import {
  CopyAndPaste,
  DeleteQuote,
  QuoteContainer,
  QuoteLine,
  QuoteLink,
  QuoteShow,
  QuoteTop,
} from "./Quote.styles"
import { linesToText } from "./utils/linesToText"

const Quote: React.FC<QuoteType> = ({ id, lines, link, show }) => {
  const { dispatch } = useQuoteState()
  const toast = useToast()
  return (
    <QuoteContainer>
      <QuoteTop>
        <QuoteShow>{show}</QuoteShow>
        <Stack spacing={8}>
          <CopyAndPaste
            onClick={() => {
              navigator.clipboard.writeText(linesToText(lines))
              toast({
                message: "Successfully copied quote!",
                type: "success",
                delay: 4000,
              })
            }}
          />
          <DeleteQuote
            onClick={() => dispatch({ type: "deleteQuote", payload: id })}
          />
        </Stack>
      </QuoteTop>
      {lines.map((line) => (
        <QuoteLine key={line.line}>
          {line.character}: {line.line}
        </QuoteLine>
      ))}
      {link && (
        <QuoteLink href={link} target="_blank" rel="noreferrer">
          {link}
        </QuoteLink>
      )}
    </QuoteContainer>
  )
}

export { Quote }
