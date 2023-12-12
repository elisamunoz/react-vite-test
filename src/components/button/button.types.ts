import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const BUTTON_SIZES = [
  'small',
  'medium',
  'large',
  'xlarge',
] as const

export interface RootProps {
  className?: string
  primary?: boolean
  size?: typeof BUTTON_SIZES[number]
  outline?: boolean
  loading?: boolean
  disabled?: boolean
  icon?: IconProp
  iconPosition?: 'right' | 'left' 
}

export interface TextProps {
  hidden: boolean
}
export interface Props extends RootProps {
  onClick?: VoidFunction
}

