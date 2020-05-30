import React, { FC } from 'react'
import { useUniqueKeys } from 'hooks'
import { Data, ExtraTableData } from 'types'
import styled from '@emotion/styled'
import Tbody from './Tbody'
import Thead from './Thead'
import Th from './Th'
import Td from './Td'
import Tr from './Tr'

interface TableProps {
  title?: string
  data: Data[]
  extraData?: ExtraTableData
  exclude?: string[]
  include?: string[]
  isScrollable?: boolean
  className?: string
}

const TableComponent: FC<TableProps> = ({
  data,
  extraData,
  exclude,
  include,
  isScrollable,
  className,
}) => {
  const keys = useUniqueKeys({ data, extraData, include, exclude })
  return (
    <Table className={className}>
      <Thead>
        <Tr>
          {keys.map((key) => (
            <Th key={key} heading={key} />
          ))}
        </Tr>
      </Thead>
      <Tbody isScrollable={isScrollable}>
        {data &&
          data.map((obj, index) => {
            // spread the extra data to each object
            const row = { ...obj, ...extraData }
            return (
              <Tr key={index}>
                {keys.map((key) => (
                  <Td
                    key={key}
                    value={row[key]}
                    rowIndex={index}
                    row={row}
                    data={data}
                  />
                ))}
              </Tr>
            )
          })}
      </Tbody>
    </Table>
  )
}

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid gray;
`

export default TableComponent
