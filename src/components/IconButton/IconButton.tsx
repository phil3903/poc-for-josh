import React, { FC } from 'react'
import styled from '@emotion/styled'

interface ButtonProps {
  onClick: () => void
}

const IconButton: FC<ButtonProps> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>
}

const Button = styled.button`
  flex: 0;
  flex-grow: 0;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
`

export default IconButton
