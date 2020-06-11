import React, { FC, ChangeEvent, KeyboardEvent, useState } from 'react'
import { Input, IconButton } from 'components'
import { FiPlus } from 'react-icons/fi'

interface ListAddProps {
  onAdd: (value?: string | number) => void
}

const ListAdd: FC<ListAddProps> = ({ onAdd }) => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleAdd = () => {
    onAdd(value)
    setValue('')
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAdd(value)
      setValue('')
    }
  }

  return (
    <>
      <Input value={value} onChange={onChange} onKeyPress={handleKeyPress} />
      <IconButton onClick={handleAdd}>
        <FiPlus />
      </IconButton>
    </>
  )
}

export default ListAdd
