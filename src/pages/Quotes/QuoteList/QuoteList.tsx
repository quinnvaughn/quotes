import React from "react"
import { Stack } from "../../../components/Stack/Stack"
import { getFilteredQuotes, useQuoteState } from "../../../hooks/useQuoteState"
import { EmptyQuotes } from "../EmptyQuotes/EmptyQuotes"
import { NoResults } from "./NoResults/NoResults"
import { Quote } from "../Quote/Quote"

const QuoteList: React.FC<{}> = () => {
  const { state } = useQuoteState()
  const filteredQuotes = getFilteredQuotes(state)
  return (
    <Stack flexDirection="column" spacing={16}>
      {state.quotes.length === 0 ? (
        <EmptyQuotes />
      ) : filteredQuotes.length === 0 ? (
        <NoResults />
      ) : (
        filteredQuotes.map((quote) => <Quote key={quote.id} {...quote} />)
      )}
    </Stack>
  )
}

export { QuoteList }
