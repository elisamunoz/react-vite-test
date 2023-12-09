import * as React from "react"
import { Root } from './button.styles'
import type { Props } from './button.types'

export const Button = ({
  children,
  size = 'medium',
  primary = false,
  outline = false,
  loading = false,
  disabled = false,
  className,
  onClick,
}: React.PropsWithChildren<Props>) => (
    <Root
      primary={primary}
      size={size}
      outline={outline}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}{loading}
    </Root>
);

export default Button
