import { Stack } from "../../../../components/Stack/Stack"
import { NoResultsEmoji } from "./NoResults.styles"

const NoResults = () => {
  return (
    <Stack spacing={16} flexDirection="column" alignItems="center">
      <NoResultsEmoji>😣</NoResultsEmoji>
      <div>No results were found.</div>
    </Stack>
  )
}

export { NoResults }
