import React, { FC } from 'react'
import styled from '@emotion/styled'
import { IconButton, H3, Button } from 'components'
import { FiX } from 'react-icons/fi'

interface ModalProps {
  title: string
  children: any
  isVisible: boolean
  onClose?: () => void
}

const Modal: FC<ModalProps> = ({ title, children, isVisible, onClose }) => {
  return (
    <Wrapper isVisible={isVisible}>
      <TitleBar>
        <H3>{title}</H3>
        {onClose ? (
          <IconContainer>
            <IconButton onClick={onClose}>
              <FiX />
            </IconButton>
          </IconContainer>
        ) : null}
      </TitleBar>
      {children}
      <ActionBar>
        <Button onClick={onClose}>Close</Button>
      </ActionBar>
    </Wrapper>
  )
}

interface WrapperProps {
  isVisible: boolean
}

const Wrapper = styled.div<WrapperProps>`
  padding: 32px 40px 16px 40px;
  position: fixed;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  max-width: 600px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  background: ${({ theme }) => theme.color.white[100]};
  transition: opacity 1s ease;
`

const IconContainer = styled.div``

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  border-bottom: 1px solid black;
`

const ActionBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
`

export default Modal
