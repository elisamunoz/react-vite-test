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
  display: flex;
  gap: 10px;
  font-size: 16px;
  padding: 0.2em 1em;

  color: white;
  background: #ea7186;
  border: 1px solid transparent;
  border-radius: 5px;
  width: fit-content;
  cursor: pointer;
  &:active,
  &:hover {
    opacity: 0.8;
  }

  ${props => props.primary && css`
    background: #7a77b9;
  `}

  ${props => props.loading && css`
    pointer-events: none;
  `}

  ${props => props.disabled && css`
    background: grey;
    color: black;
    border-color: grey;
    pointer-events: none;
  `}

  flex-direction: ${props => props.iconPosition === 'left'
    ? 'row-reverse'
    : 'row'
  };

  ${({ size = 'medium' }) => buttonSizes[size]};
`

