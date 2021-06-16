import styled from "styled-components"
import { animated } from "react-spring"
import { ToastTypes } from "../../hooks/useToast"

type StyledToastProps = {
  toastType: ToastTypes
}

const StyledToast = styled(animated.div)<StyledToastProps>`
  background-color: ${(p) =>
    p.toastType === "success"
      ? p.theme.colors.toast.success
      : p.theme.colors.toast.error};
  cursor: pointer;
  font-size: ${(p) => p.theme.sizes.md};
  padding: ${(p) => p.theme.sizes.md};
  color: ${(p) => p.theme.colors.text.white};
`

const ToastContainer = styled.div`
  position: fixed;
  top: ${(p) => p.theme.sizes.md};
  right: ${(p) => p.theme.sizes.md};
`

export { StyledToast, ToastContainer }
