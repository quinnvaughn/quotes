import styled from "styled-components"

const EmptyQuoteEmoji = styled.div`
  font-size: ${(p) => p.theme.sizes.xl};
  line-height: 0.75;
`

const EmptyQuoteNoQuote = styled.div`
  font-size: ${(p) => p.theme.sizes.lg};
  font-weight: 700;
`

const EmptyQuoteText = styled.div`
  font-size: ${(p) => p.theme.sizes.smplus};
  color: ${(p) => p.theme.colors.gray.medium};
`

export { EmptyQuoteEmoji, EmptyQuoteNoQuote, EmptyQuoteText }
