import styled from '@emotion/styled'

interface StyledProps {
  isOpen: boolean
  animationSpeed?: number
  onMouseDown?: () => void
}

const Overlay = styled.div<StyledProps>`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: gray;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 0.9 : 0)};
`

export default Overlay
