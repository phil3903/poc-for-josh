import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Data } from 'types'
import { isBoolean, isFunction, isNumber, isString } from 'helpers/typecheck'
// import isDate from 'date-fns/isDate'
// import format from 'date-fns/format'

export interface TableHeadingProps {
  value?: (
    row: Data,
    data: Data[],
    rowIndex: number,
  ) => JSX.Element | string | boolean | number
  row: Data
  data: Data[]
  rowIndex: number
  className?: string
}

const TdComponent: FC<TableHeadingProps> = ({
  value,
  row,
  data,
  rowIndex,
  className,
}) => {
  // stringify bools
  if (isBoolean(value)) {
    return <Td className={className}>{String(value)}</Td>
  }

  // call functions
  if (isFunction(value)) {
    return <Td className={className}>{value(row, data, rowIndex)}</Td>
  }

  // return normal render
  if (isString(value) || isNumber(value)) {
    return <Td className={className}>{value}</Td>
  }

  // if not renderable, return an empty TD
  return <Td className={className}></Td>
}

const Td = styled.td`
  font-family: ${({ theme }) => theme.font.family};
  font-size: 14px;
  vertical-align: top;
  padding: 8px;
  border: 1px solid gray;
`

export default TdComponent
