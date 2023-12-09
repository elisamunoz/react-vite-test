import styled, { keyframes } from 'styled-components'

const fadeInAnimation = keyframes`
 0%   { opacity: 0; margin-top: 20px; }
 100% { opacity: 1; margin-top: 0; }
`

export const Root = styled.dialog`
  position: absolute;
  padding: 100px;
  margin: 0;
  min-width: 300px;
  max-width: 90vw;

  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  gap: 20px;
  background-color: lightgray;
  color: #3c5556;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 999;
  overflow: hidden;
  border: none;
  border-radius: 5px;

  animation: 1s ease-out 0s 1 ${fadeInAnimation};
  animation-fill-mode: forwards;
  &::backdrop {
    background-color: red;
  }
`

export const Text = styled.h4`
  font-weight: 700;
  margin: 0;
  font-size: 25px;
`
