import styled from '@emotion/styled'

const H3 = styled.h3`
  font-size: 26px;
  line-height: 34px;
  margin-bottom: 16px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 24px;
    line-height: 29px;
  }
`

export default H3
