/** @jsx jsx */
import { FC, useEffect } from 'react'
import useSWR from 'swr'
import { Table, Button, Text } from 'components'
import { Data } from 'types'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/react'

export interface ModuleOneProps {}

const ModuleOne: FC<ModuleOneProps> = ({}) => {
  const { data, error, isValidating } = useSWR(
    '/facts/random?animal_type=cat&amount=3',
  )

  // manipulate the data how you need
  useEffect(() => {}, [data, error, isValidating])

  const handleClick = (row: Data, index: number, data: Data[]) => {
    console.log(row, index, data)
  }

  return (
    <Wrapper>
      <Table
        isScrollable
        include={['_id', 'subscribe', 'source', 'controls']}
        data={data}
        extraData={{
          subscribe: (row) => {
            return <Text>subscribe {row.captureData}</Text>
          },
          controls: (row, index, data) => (
            <Button onClick={() => handleClick(row, index, data)}>test</Button>
          ),
        }}
        css={tableCss}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 64px;
`

const tableCss = css`
  background: blue;
`

export default ModuleOne
