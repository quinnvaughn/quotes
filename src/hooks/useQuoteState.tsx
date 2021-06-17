import React, { useEffect } from "react"
import { useContext } from "react"
import { createSelector } from "reselect"
import { v4 as uuid } from "uuid"

type Line = {
  character: string
  line: string
}

export type QuoteType = {
  id: string
  lines: Line[]
  show: string
  link?: string
}

type NewQuote = Omit<QuoteType, "id">

const key = "quotes-list"

type Action =
  | { type: "addQuote"; payload: NewQuote }
  | { type: "deleteQuote"; payload: string }
  | { type: "setFilterText"; payload: string }
  | { type: "toggleModal" }
  | { type: "addCharacter"; payload: string }
  | { type: "deleteCharacter"; payload: string }
  | { type: "setCharacter"; payload: { character: string; idx: number } }
type Dispatch = (action: Action) => void
type State = {
  quotes: QuoteType[]
  filterText: string
  openModal: boolean
  characters: string[]
  lines: Line[]
}

const QuoteStateContext =
  React.createContext<
    | {
        state: State
        dispatch: Dispatch
      }
    | undefined
  >(undefined)

const getQuotesList = () => {
  const storedData = window.localStorage.getItem(key)
  return storedData !== null ? (JSON.parse(storedData) as QuoteType[]) : []
}

const initialState: State = {
  filterText: "",
  lines: [],
  quotes: getQuotesList(),
  openModal: false,
  characters: [],
}

const quotesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "addQuote": {
      const newQuote: QuoteType = { id: uuid(), ...action.payload }
      const newData = [newQuote, ...state.quotes]
      return { ...state, quotes: newData }
    }
    case "addCharacter": {
      const newCharacters = [...state.characters, action.payload]
      return { ...state, characters: newCharacters }
    }
    case "deleteCharacter": {
      const newCharacters = state.characters.filter(
        (ch) => ch !== action.payload
      )
      const filteredLines = state.lines.map((line) => {
        if (line.character === action.payload) {
          return { ...line, character: "" }
        }
        return { ...line }
      })
      return { ...state, characters: newCharacters, lines: filteredLines }
    }
    case "deleteQuote": {
      const newData = state.quotes.filter(
        (quote) => quote.id !== action.payload
      )
      return { ...state, quotes: newData }
    }
    case "setFilterText": {
      return { ...state, filterText: action.payload }
    }
    case "toggleModal": {
      const currentToggle = state.openModal
      return { ...state, openModal: !currentToggle }
    }
    default: {
      throw new Error("Not a function")
    }
  }
}

const getQuotes = (state: State) => state.quotes
const getFilterText = (state: State) => state.filterText

const getFilteredQuotes = createSelector(
  [getQuotes, getFilterText],
  (quotes, filterText) => {
    const lowercaseText = filterText.toLowerCase()
    const quotesByShow = quotes.filter((quote) =>
      quote.show.toLowerCase().includes(lowercaseText)
    )

    const quotesByCharacter = quotes.filter((quote) =>
      quote.lines.filter((line) =>
        line.character.toLowerCase().includes(lowercaseText)
      ).length > 0
        ? true
        : false
    )

    const allQuotes = [...quotesByShow, ...quotesByCharacter]

    const quotesSet = [...new Set(allQuotes)]

    return quotesSet
  }
)

const QuotesProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = React.useReducer(quotesReducer, initialState)

  const value = { state, dispatch }

  return (
    <QuoteStateContext.Provider value={value}>
      {children}
    </QuoteStateContext.Provider>
  )
}

function useQuoteState() {
  const context = useContext(QuoteStateContext)

  if (context === undefined) {
    throw new Error("useQuoteState must be used within a Provider")
  }

  const { state, dispatch } = context

  const updateLocalStorage = (data: QuoteType[]) => {
    window.localStorage.setItem(key, JSON.stringify(data))
  }

  useEffect(() => {
    updateLocalStorage(state.quotes)
  }, [state.quotes])

  return { state, dispatch }
}

export { useQuoteState, QuotesProvider, getFilteredQuotes }
