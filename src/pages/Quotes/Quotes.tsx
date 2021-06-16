import React from "react"
import { Stack } from "../../components/Stack/Stack"
import { Header } from "./Header/Header"
import { QuoteList } from "./QuoteList/QuoteList"
import { QuotesContainer } from "./Quotes.styles"

const Quotes: React.FC<{}> = () => {
  return (
    <QuotesContainer>
      <Stack flexDirection="column" spacing={40}>
        <Header />
        <QuoteList />
      </Stack>
    </QuotesContainer>
  )
}

export { Quotes }
