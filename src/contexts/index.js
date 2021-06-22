import React from 'react'

import { SidebarProvider } from './sidebar'

export const AppContexts = ({ children }) => (
  <SidebarProvider>
    {children}
  </SidebarProvider>
)
