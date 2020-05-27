import styled from '@emotion/styled'
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onTouchStart?: (e: React.TouchEvent<HTMLButtonElement>) => void
}

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  max-height: 70px;
  align-items: center;
  border-radius: 72px;
  transition: 0.5s all;
  outline: none;
  pointer-events: all;
  border-style: solid;
  cursor: pointer;
  &:hover {
    background: blue;
    border-color: blue;
    color: white;
  }
  &:disabled {
    background: gray;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: block;
    width: 100%;
  }
`
export default Button
