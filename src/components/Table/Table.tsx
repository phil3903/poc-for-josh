import React, { FC } from 'react'
import { useUniqueKeys } from 'hooks'
import { Data, ExtraTableData } from 'types'
import styled from '@emotion/styled'
import Th from './Th'
import Td from './Td'
import Tr from './Tr'

interface TableProps {
  title?: string
  data: Data[]
  exclude?: string[]
  extraData?: ExtraTableData
  className?: string
}

const Component: FC<TableProps> = ({ data, exclude, extraData, className }) => {
  const keys = useUniqueKeys(data, exclude, extraData)

  return (
    <Table className={className}>
      <thead>
        <tr>
          {keys.map((key) => (
            <Th key={key} heading={key} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((data, rowIndex) => {
            // spread the extra data to each object
            const row = { ...data, ...extraData }
            return (
              <Tr key={rowIndex}>
                {keys.map((key) => (
                  <Td key={key} cell={row[key]} row={data} />
                ))}
              </Tr>
            )
          })}
      </tbody>
    </Table>
  )
}

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid gray;
`

export default Component
