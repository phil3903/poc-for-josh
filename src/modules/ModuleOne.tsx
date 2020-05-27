import React, { FC, useEffect } from 'react'
import useSWR from 'swr'
import { Table, Button, Text } from 'components'
import { Data } from 'types'
import styled from '@emotion/styled'

export interface ModuleOneProps {}

const ModuleOne: FC<ModuleOneProps> = ({}) => {
  const { data, error, isValidating } = useSWR(
    '/facts/random?animal_type=cat&amount=3',
  )

  console.log(data, error, isValidating)

  // manipulate the data how you need
  useEffect(() => {
    console.log(data)
  }, [data, error, isValidating])

  const handleClick = (data: Data) => {
    console.log(data)
  }

  return (
    <Wrapper>
      <Table
        title="Module One"
        exclude={['id', 'deleted', 'used', '__v']}
        data={data}
        extraData={{
          subscribe: (data) => {
            return <Text>subscribe {data.captureData}</Text>
          },
          controls: (data) => (
            <Button onClick={() => handleClick(data)}>test</Button>
          ),
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 64px;
`

export default ModuleOne
