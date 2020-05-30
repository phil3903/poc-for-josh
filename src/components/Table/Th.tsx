import React, { FC } from 'react'
import styled from '@emotion/styled'
import { splitAndCapitalize } from 'helpers/string'

export interface ThProps {
  onClick?: (key: string) => void
  heading: string
}

const ThComponent: FC<ThProps> = ({ heading, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(heading)
    }
  }
  return <Th onClick={handleClick}>{splitAndCapitalize(heading)}</Th>
}

const Th = styled.th`
  font-family: ${({ theme }) => theme.font.family};
  padding: 8px;
  border: 1px solid gray;
`

export default ThComponent
