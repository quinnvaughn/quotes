import React from "react"
import { Button } from "../../../components/Button/Button"
import { Stack } from "../../../components/Stack/Stack"
import { useQuoteState } from "../../../hooks/useQuoteState"
import { HeaderInput, HeaderTitle, HeaderTop } from "./Header.styles"

const Header: React.FC<{}> = () => {
  const { state, dispatch } = useQuoteState()
  return (
    <Stack flexDirection="column" spacing={12}>
      <HeaderTop>
        <HeaderTitle>your quotes</HeaderTitle>
        <Button secondary onClick={() => dispatch({ type: "toggleModal" })}>
          Create quote
        </Button>
      </HeaderTop>
      <HeaderInput
        placeholder="Search for quote"
        value={state.filterText}
        onChange={(e) =>
          dispatch({ type: "setFilterText", payload: e.target.value })
        }
      />
    </Stack>
  )
}

export { Header }
