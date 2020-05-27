import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal: FC = ({ children }) => {
  const el = document.createElement('div')

  useEffect(() => {
    const portalRoot = document.getElementById('portal')
    portalRoot!.appendChild(el)
    return () => {
      portalRoot!.removeChild(el)
    }
  })

  return createPortal(children, el)
}

export default Portal
