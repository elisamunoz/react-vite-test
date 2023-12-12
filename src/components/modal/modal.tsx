import type { PropsWithChildren } from "react"
import { Root, Text } from "./modal.styles"
import type { Props } from "./Modal.types"

export const Modal = ({
  children,
  open = false,
  text
}: PropsWithChildren<Props>) => {
  
  return open && (
    <Root open={open}>
      <Text>{text}</Text>
      {children}
    </Root>
  )
}