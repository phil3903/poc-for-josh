import styled from '@emotion/styled'

const Tr = styled.tr`
  :nth-of-type(2) {
    background: ${({ theme }) => theme.color.white[200]};
  }
  &:hover {
    background: ${({ theme }) => theme.color.white[300]};
  }
`

export default Tr
