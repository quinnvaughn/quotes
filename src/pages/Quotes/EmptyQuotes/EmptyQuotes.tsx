import { Stack } from "../../../components/Stack/Stack"
import {
  EmptyQuoteEmoji,
  EmptyQuoteNoQuote,
  EmptyQuoteText,
} from "./EmptyQuotes.styles"

const EmptyQuotes = () => {
  return (
    <Stack alignItems="center" flexDirection="column" spacing={8}>
      <EmptyQuoteEmoji>😭</EmptyQuoteEmoji>
      <EmptyQuoteNoQuote>No quotes</EmptyQuoteNoQuote>
      <EmptyQuoteText>
        You don't have any quotes. Add some to check out your awesome quotes.
      </EmptyQuoteText>
    </Stack>
  )
}

export { EmptyQuotes }
