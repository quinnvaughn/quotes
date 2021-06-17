import { Property } from "csstype"
import { Fragment } from "react"
import { useMemo, Children } from "react"
import { Spacer, StyledStack } from "./Stack.styles"

export type StackProps = {
  spacing?: number
  alignItems?: Property.AlignItems
  flexDirection?: Property.FlexDirection
  flexShrink?: Property.FlexShrink
  flexGrow?: Property.FlexGrow
  flexBasis?: Property.FlexBasis
  flexWrap?: Property.FlexWrap
  justifyContent?: Property.JustifyContent
  gap?: number
}

const Stack: React.FC<StackProps> = ({
  spacing,
  alignItems = "stretch",
  flexShrink = 0,
  flexDirection = "row",
  flexGrow = 0,
  flexBasis = "auto",
  justifyContent = "flex-start",
  flexWrap = "nowrap",
  gap,
  children,
}) => {
  const childrenArr = useMemo(() => {
    return Children.toArray(children).filter((child: any) => {
      if (!child) {
        return false
      }
      return true
    })
  }, [children])

  const spacerProps = useMemo(() => {
    const x = ["row", "row-reverse"].includes(flexDirection)
      ? spacing
      : undefined
    const y = ["column", "column-reverse"].includes(flexDirection)
      ? spacing
      : undefined
    return { x, y }
  }, [flexDirection, spacing])
  return (
    <StyledStack
      gap={gap}
      spacing={spacing}
      alignItems={alignItems}
      flexBasis={flexBasis}
      flexShrink={flexShrink}
      flexDirection={flexDirection}
      flexGrow={flexGrow}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
    >
      {childrenArr.map((child, idx, arr) => {
        return (
          <Fragment key={idx}>
            {child}
            {spacing && spacing > 0 && idx < arr.length - 1 && (
              <Spacer {...spacerProps} />
            )}
          </Fragment>
        )
      })}
    </StyledStack>
  )
}

export { Stack }
