import React from 'react'
import { NextPage } from 'next'
import { Page } from 'components'
import { ModuleOne } from 'modules'

const IndexPage: NextPage = () => {
  return (
    <Page>
      <ModuleOne />
    </Page>
  )
}

export default IndexPage
