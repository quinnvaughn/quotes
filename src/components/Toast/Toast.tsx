import { ToastProps } from "../../hooks/useToast"
import { StyledToast } from "./Toast.styles"

const Toast: React.FC<Omit<ToastProps, "id">> = ({ message, type }) => {
  return <StyledToast toastType={type}>{message}</StyledToast>
}

export { Toast }
