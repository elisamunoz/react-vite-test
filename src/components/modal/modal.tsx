import { Root, Text } from "./modal.components"
import { Button } from '../../stories/Button'

export interface Props {
  open?: boolean
  onCancel?: VoidFunction
}

export const Modal = ({
  open = false,
  onCancel
}: React.PropsWithChildren<Props>) => {
  

  return open && (
    <Root open={open}>
      <Text>Hola yo soy un modal</Text>
      <Button
        label="Click me"
        onClick={onCancel} />
    </Root>
  )
}