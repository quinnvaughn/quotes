import React from "react"
import { Stack } from "../../../components/Stack/Stack"
import { getFilteredQuotes, useQuoteState } from "../../../hooks/useQuoteState"
import { Quote } from "../Quote/Quote"

const QuoteList: React.FC<{}> = () => {
  const { state } = useQuoteState()
  const quotes = getFilteredQuotes(state)
  return (
    <Stack flexDirection="column" spacing={16}>
      {quotes.map((quote) => (
        <Quote key={quote.id} {...quote} />
      ))}
    </Stack>
  )
}

export { QuoteList }
