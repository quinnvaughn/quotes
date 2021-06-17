import React from "react"
import { Stack } from "../../../components/Stack/Stack"
import { getFilteredQuotes, useQuoteState } from "../../../hooks/useQuoteState"
import { EmptyQuotes } from "../EmptyQuotes/EmptyQuotes"
import { Quote } from "../Quote/Quote"

const QuoteList: React.FC<{}> = () => {
  const { state } = useQuoteState()
  const quotes = getFilteredQuotes(state)
  return (
    <Stack flexDirection="column" spacing={16}>
      {state.quotes.length === 0 ? (
        <EmptyQuotes />
      ) : (
        quotes.map((quote) => <Quote key={quote.id} {...quote} />)
      )}
    </Stack>
  )
}

export { QuoteList }
