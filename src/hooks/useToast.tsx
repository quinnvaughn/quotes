import React from "react"
import styled from "styled-components"
import { Stack } from "../components/Stack/Stack"
import { useReducer } from "react"

type ToastTypes = "success" | "error"

type ToastProps = {
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

const ToastContainer = styled.div`
  position: fixed;
  top: ${(p) => p.theme.sizes.md};
  right: ${(p) => p.theme.sizes.md};
`

type StyledToastProps = {
  toastType: ToastTypes
}

const StyledToast = styled.div<StyledToastProps>`
  background-color: ${(p) =>
    p.toastType === "success"
      ? p.theme.colors.toast.success
      : p.theme.colors.toast.error};
  cursor: pointer;
  font-size: ${(p) => p.theme.sizes.md};
  padding: ${(p) => p.theme.sizes.md};
  color: ${(p) => p.theme.colors.text.white};
`

const Toast: React.FC<ToastProps> = ({ message, type, id }) => {
  return <StyledToast toastType={type}>{message}</StyledToast>
}

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
              <Toast id={id} key={id} type={type} message={message} />
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
    type: ToastTypes
    message: string
    delay: number
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
