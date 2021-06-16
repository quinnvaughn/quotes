import React from "react"
import { TagContainer } from "./Tag.styles"
import { AiOutlineClose } from "react-icons/ai"
import { Stack } from "../Stack/Stack"

type TagProps = {
  onClick: () => void
  text: string
  removable?: boolean
}

const Tag: React.FC<TagProps> = ({ text, onClick, removable }) => {
  return (
    <TagContainer onClick={() => (removable ? {} : onClick())}>
      {removable ? (
        <Stack spacing={4}>
          <span>{text}</span>
          <AiOutlineClose onClick={onClick} />
        </Stack>
      ) : (
        <span>{text}</span>
      )}
    </TagContainer>
  )
}

export { Tag }
