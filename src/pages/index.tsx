import React from 'react'
import { NextPage } from 'next'
import { Page } from 'components'
import { ModuleOne, ModuleTwo } from 'modules'

const IndexPage: NextPage = () => {
  return (
    <Page>
      <ModuleOne />
      <ModuleTwo />
    </Page>
  )
}

export default IndexPage
