import type { PropsWithChildren } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import isBrowser from '../helpers/is-browser'
import isSmallScreen from '../helpers/is-small-screen'

interface SidebarContextProps {
  isOpenOnSmallScreens: boolean
  isPageWithSidebar: boolean
  // eslint-disable-next-line no-unused-vars
  setOpenOnSmallScreens: (isOpen: boolean) => void
}

const SidebarContext = createContext<SidebarContextProps>(undefined!)

export function SidebarProvider({ children }: PropsWithChildren) {
  const [location, setLocation] = useState('/dashboard')
  const [isOpen, setOpen] = useState(false)

  // Save latest state to localStorage
  useEffect(() => {
    window.localStorage.setItem('isSidebarOpen', isOpen.toString())
  }, [isOpen])

  // Close Sidebar on page change on mobile
  useEffect(() => {
    if (isSmallScreen()) {
      setOpen(false)
    }
  }, [location])

  // Close Sidebar on mobile tap inside main content
  useEffect(() => {
    function handleMobileTapInsideMain(event: MouseEvent) {
      const main = document.querySelector('main')
      const isClickInsideMain = main?.contains(event.target as Node)

      if (isSmallScreen() && isClickInsideMain) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleMobileTapInsideMain)
    return () => {
      document.removeEventListener('mousedown', handleMobileTapInsideMain)
    }
  }, [])

  useEffect(() => {
    if (isBrowser()) {
      setOpen(window.localStorage.getItem('isSidebarOpen') === 'true')
      setLocation(window.location.pathname)
    }
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        isOpenOnSmallScreens: isOpen,
        isPageWithSidebar: true,
        setOpenOnSmallScreens: setOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebarContext(): SidebarContextProps {
  const context = useContext(SidebarContext)

  if (typeof context === 'undefined') {
    throw new Error(
      'useSidebarContext should be used within the SidebarContext provider!'
    )
  }

  return context
}
