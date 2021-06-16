import styled from "styled-components"
import { ToastTypes } from "../../hooks/useToast"

type StyledToastProps = {
  toastType: ToastTypes
}

const StyledToast = styled.div<StyledToastProps>`
  background-color: ${(p) =>
    p.toastType === "success"
      ? p.theme.colors.toast.success
      : p.theme.colors.toast.error};
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
