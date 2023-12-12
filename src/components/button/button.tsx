import type { PropsWithChildren } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Ellipsis from "../ellipsis"
import { Root } from './button.styles'
import type { Props } from './button.types'

export const Button = ({
  children,
  size = 'medium',
  primary = false,
  outline = false,
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'right',
  className,
  onClick,
}: PropsWithChildren<Props>) => {
  const isDisabled = disabled || loading

  return (
    <Root
      primary={primary}
      size={size}
      outline={outline}
      disabled={isDisabled}
      loading={loading}
      className={className}
      onClick={onClick}
      iconPosition={iconPosition}
    >
      {loading
        ? <Ellipsis />
        : (
        <>
          {children}
          {icon && <FontAwesomeIcon icon={icon} />}
        </>
        )
      }
    </Root>
  );
}
