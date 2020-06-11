import React, { FC } from 'react'
import styled from '@emotion/styled'
import { replace, removeByIndex, add } from 'helpers/array'
import ListItem from './ListItem'
import ListAdd from './ListAdd'

interface ListProps {
  data: string[]
  onUpdate: (data: any) => void
}

const List: FC<ListProps> = ({ data, onUpdate }) => {
  const handleInput = (index: number, value?: string | number) => {
    onUpdate(replace(data, value, index))
  }

  const handleDelete = (index: number) => {
    onUpdate(removeByIndex(data, index))
  }

  const handleAdd = (value?: string | number) => {
    onUpdate(add(data, value || ''))
  }

  return (
    <Ul>
      {data.map((item, index) => (
        <Li key={index}>
          <ListItem
            value={item}
            onUpdate={(value) => handleInput(index, value)}
            onDelete={() => handleDelete(index)}
          />
        </Li>
      ))}
      <Li>
        <ListAdd onAdd={handleAdd} />
      </Li>
    </Ul>
  )
}

const Ul = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
`
const Li = styled.li`
  display: flex;
  margin-bottom: 8px;
  :last-child {
    border-top: 1px solid black;
    margin-top: 8px;
    margin-bottom: 0;
    padding-top: 8px;
  }
`

export default List
