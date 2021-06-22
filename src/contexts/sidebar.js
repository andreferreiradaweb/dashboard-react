import React, { createContext, useContext, useState } from 'react'

const SidebarContext = createContext({})

export const SidebarProvider = ({ children }) => {

  const [size, setSize] = useState('small')

  const handleSize = () => {
    setSize(size === 'large' ? 'small' : 'large')
  }

  const contextValues = {
    size,
    handleSize
  }

  return (
    <SidebarContext.Provider value={contextValues}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useModalContext must be used with a ModalProvider')
  }
  return context
}
