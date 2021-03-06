import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import { useQuoteState } from "../../hooks/useQuoteState"
import CreateQuoteForm from "./CreateQuoteForm/CreateQuoteForm"

const CreateQuote = () => {
  const { dispatch } = useQuoteState()
  return (
    <Dialog
      aria-label="Create Form Modal"
      onDismiss={() => dispatch({ type: "toggleModal" })}
    >
      <CreateQuoteForm />
    </Dialog>
  )
}

export { CreateQuote }
