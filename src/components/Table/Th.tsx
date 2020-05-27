import React, { FC } from 'react'
import styled from '@emotion/styled'
import { splitAndCapitalize } from 'helpers/string'

export interface TableHeadingProps {
  onClick?: (key: string) => void
  heading: string
}

const Component: FC<TableHeadingProps> = ({ heading, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(heading)
    }
  }
  return <Th onClick={handleClick}>{splitAndCapitalize(heading)}</Th>
}

export default Component

const Th = styled.th`
  font-family: ${({ theme }) => theme.font.family};
  padding: 8px;
  border: 1px solid gray;
`
