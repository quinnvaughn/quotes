import React from "react"
import { useQuoteState } from "./hooks/useQuoteState"
import { CreateQuote } from "./pages/CreateQuote/CreateQuote"
import { Quotes } from "./pages/Quotes/Quotes"

const App: React.FC<{}> = () => {
  const { state } = useQuoteState()
  return (
    <>
      <Quotes />
      {state.openModal && <CreateQuote />}
    </>
  )
}

export default App
