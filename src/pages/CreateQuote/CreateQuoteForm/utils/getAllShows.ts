import { QuoteType } from '../../../../hooks/useQuoteState'

export function getAllShows() {
    const getQuotes = window.localStorage.getItem('quotes-list')
    const data: QuoteType[] = getQuotes ? JSON.parse(getQuotes) : []

    if (data.length > 0) {
        const shows = data.map((quote) => quote.show)

        return [...new Set(shows)]
    }
    return []
}
