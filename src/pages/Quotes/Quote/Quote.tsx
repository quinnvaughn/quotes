import React from 'react'
import { QuoteType, useQuoteState } from '../../../hooks/useQuoteState'
import {
    DeleteQuote,
    QuoteContainer,
    QuoteLine,
    QuoteLink,
    QuoteShow,
    QuoteTop,
} from './Quote.styles'

const Quote: React.FC<QuoteType> = ({ id, lines, link, show }) => {
    const { dispatch } = useQuoteState()
    return (
        <QuoteContainer>
            <QuoteTop>
                <QuoteShow>{show}</QuoteShow>
                <DeleteQuote
                    onClick={() =>
                        dispatch({ type: 'deleteQuote', payload: id })
                    }
                />
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
