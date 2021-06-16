import React from "react"
import { Stack } from "../components/Stack/Stack"
import { useReducer } from "react"
import { Toast } from "../components/Toast/Toast"
import { ToastContainer } from "../components/Toast/Toast.styles"

export type ToastTypes = "success" | "error"

export type ToastProps = {
  message: string
  type: ToastTypes
  id: string
}

type State = {
  toasts: ToastProps[]
}

type Action =
  | { type: "addToast"; toast: ToastProps }
  | { type: "deleteToast"; id: string }

type Dispatch = (action: Action) => void

type Props = {
  state: State
  dispatch: Dispatch
}

const ToastContext = React.createContext<Props | undefined>(undefined)

function toastReducer(state: State, action: Action): State {
  switch (action.type) {
    case "addToast": {
      return { ...state, toasts: [...state.toasts, action.toast] }
    }
    case "deleteToast": {
      const updatedToasts = state.toasts.filter((t) => t.id !== action.id)
      return {
        ...state,
        toasts: updatedToasts,
      }
    }
    default: {
      throw new Error("unhandled action")
    }
  }
}

export const ToastProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, {
    toasts: [],
  })

  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
      <ToastContainer>
        <Stack flexDirection="column" spacing={8}>
          {state.toasts &&
            state.toasts.map(({ id, message, type }) => (
              <Toast key={id} type={type} message={message} />
            ))}
        </Stack>
      </ToastContainer>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = React.useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToasts must be used within a ToastProvider")
  }

  const { dispatch } = context

  function toast({
    type = "success",
    message,
    delay = 4000,
  }: {
    type?: ToastTypes
    message: string
    delay?: number
  }) {
    const id = Math.random().toString().substr(2, 9)
    dispatch({
      type: "addToast",
      toast: {
        type,
        message,
        id,
      },
    })

    setTimeout(() => {
      dispatch({ type: "deleteToast", id })
    }, delay)
  }

  return toast
}
