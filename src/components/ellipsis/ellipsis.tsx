// https://codepen.io/AlexWarnes/pen/jXYYKL?editors=1000

import * as React from "react"
import { Container, Bubble } from './ellipsis.styles'
import type { Props } from './ellipsis.types'

export const Ellipsis = ({
  size = '60px',
  color,
  className,
}: React.PropsWithChildren<Props>) => (
  <Container color={color} size={size} className={className}>
    <Bubble />
    <Bubble />
    <Bubble />
  </Container>
)

export default Ellipsis
