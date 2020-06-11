import React, { FC, ChangeEvent, useState, useEffect } from 'react'
import { Input, IconButton } from 'components'
import { FiTrash } from 'react-icons/fi'

interface ListItemProps {
  value?: string | number
  onUpdate: (value?: string | number) => void
  onDelete: () => void
}

const ListItem: FC<ListItemProps> = ({ value, onUpdate, onDelete }) => {
  const [editableValue, setEditableValue] = useState(value)

  //update if the prop updates
  useEffect(() => {
    setEditableValue(value)
  }, [value])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditableValue(e.target.value)
  }

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    onUpdate(e.target.value)
  }

  return (
    <>
      <Input value={editableValue} onChange={onChange} onBlur={onBlur} />
      <IconButton onClick={onDelete}>
        <FiTrash />
      </IconButton>
    </>
  )
}

export default ListItem
