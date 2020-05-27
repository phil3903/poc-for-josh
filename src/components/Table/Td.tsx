import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Data } from 'types'
import { isBoolean, isFunction } from 'helpers/typecheck'
// import isDate from 'date-fns/isDate'
// import format from 'date-fns/format'

export interface TableHeadingProps {
  cell: (data: Data) => JSX.Element | string | boolean | number
  row: Data
  className?: string
}

const Component: FC<TableHeadingProps> = ({ cell, row, className }) => {
  // stringify bools
  if (isBoolean(cell)) {
    return <Td className={className}>{String(cell)}</Td>
  }

  // call functions
  if (isFunction(cell)) {
    return <Td className={className}>{cell(row)}</Td>
  }

  // return normal render
  return <Td className={className}>{cell}</Td>
}

export default Component

const Td = styled.td`
  font-family: ${({ theme }) => theme.font.family};
  font-size: 14px;
  vertical-align: top;
  padding: 8px;
  border: 1px solid gray;
`

// check for dates
// const date = new Date(cell)
// if (isDate(date)) {
//   return <Component>{cell}</Component>
// }
