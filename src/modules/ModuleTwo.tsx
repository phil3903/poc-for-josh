import React, { FC, useEffect, useState } from 'react'
import useSWR from 'swr'
import { Table, Button, Text } from 'components'
import { Modal, Overlay } from 'components'
import { Data } from 'types'

// load portal with dynamic as it doesn't work with SSR
import dynamic from 'next/dynamic'
const Portal = dynamic(() => import('../components/Portal/Portal'), {
  ssr: false,
})

const ModuleTwo: FC = () => {
  const { data, error, isValidating } = useSWR(
    '/facts/random?animal_type=cat&amount=3',
  )

  const [modalTitle, setModalTitle] = useState<string>('')
  const [isModalVisible, setModalVisibilty] = useState<boolean>(false)

  // manipulate the data how you need
  useEffect(() => {
    console.log(data)
  }, [data, error, isValidating])

  const handleShowModal = (title: string, data: Data) => {
    setModalTitle(title)
    setModalVisibilty(true)
  }

  const handleHideModal = () => {
    setModalVisibilty(false)
  }

  return (
    <div>
      <Table
        title="Module Two"
        exclude={['id', 'deleted', 'used', '__v']}
        data={data}
        extraData={{
          subscribe: (data) => {
            return <Text>subscribe {data.captureData}</Text>
          },
          controls: (data) => (
            <Button onClick={() => handleShowModal(data._id, data)}>test</Button>
          ),
        }}
      />

      {/* Use Portals to send Componets to the top of our app */}
      <Portal>
        <Overlay isOpen={isModalVisible} onMouseDown={handleHideModal} />
        <Modal
          title={modalTitle}
          isVisible={isModalVisible}
          onClose={handleHideModal}
        >
          <div>do stuff</div>
        </Modal>
      </Portal>
    </div>
  )
}

export default ModuleTwo
