import React, { useState } from 'react'
import { NextPage } from 'next'
import { Page, List } from 'components'
import { ModuleOne } from 'modules'

const mockApiData = ['item 1', 'item 2', 'item 3']

const IndexPage: NextPage = () => {
  const [editableData, setEditableData] = useState(mockApiData)

  const handleUpdate = (data: any) => {
    console.log(data)
    setEditableData(data)
  }
  return (
    <Page>
      <ModuleOne />
      <List data={editableData} onUpdate={handleUpdate} />
    </Page>
  )
}

export default IndexPage
