import { useState } from 'react'

export const useMobileNavbar = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const toggle = () => {
    setIsOpen(state => !state)
  }

  const close = () => {
    setIsOpen(false)
  }

  const open = () => {
    setIsOpen(true)
  }

  return {
    isOpen,
    toggle,
    close,
    open
  }
}
