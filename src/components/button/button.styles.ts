import styled, { css } from 'styled-components'
import type { RootProps } from './button.types'

export const buttonSizes = {
  small: css`
    font-size: 12px;
  `,
  medium: css`
    font-size: 16px;
  `,
  large: css`
    font-size: 20px;
  `,
  xlarge: css`
    font-size: 24px;
  `,
}

export const Root = styled.button<RootProps>`
  font-size: 16px;
  padding: 0.2em 1em;

  color: white;
  background: aquamarine;
  border: 1px solid currentcolor;
  border-radius: 5px;
  cursor: pointer;
  &:active,
  &:hover {
    opacity: 0.8;
  }

  ${props => props.primary && css`
    color: blue;
  `}

  ${props => props.disabled && css`
    background: grey;
    color: black;
    border-color: grey;
    pointer-events: none;
  `}

  ${({ size = 'medium' }) => buttonSizes[size]};
`

