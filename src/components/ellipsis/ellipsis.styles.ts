import styled, { keyframes } from 'styled-components'
// import { getColor } from '@themes/selectors'
import type { Props } from './ellipsis.types'

const pulseAnimation = keyframes`
  0%   { opacity: 1;   transform: scale(1); }
  100% { opacity: .25; transform: scale(.75); }
`

export const Bubble = styled.div`
  width: .25em;
  height: .25em;
  border-radius: 50%;
  background: currentColor;
  animation: ${pulseAnimation} .6s ease 0s infinite alternate;
`
export const Container = styled.div<Props>`
  font-size: ${props => props.size};
  color: ${props => props.color};

  width: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Bubble}:nth-of-type(1){ animation-delay: 0; }
  ${Bubble}:nth-of-type(2){ animation-delay: .2s; }
  ${Bubble}:nth-of-type(3){ animation-delay: .4s; }
`
 /* color: ${props => props.color || getColor('main')}; */