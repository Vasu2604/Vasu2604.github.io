'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface ResponsiveContextType {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isTouch: boolean
  screenWidth: number
  screenHeight: number
  orientation: 'portrait' | 'landscape'
  deviceType: 'mobile' | 'tablet' | 'desktop'
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined)

export function ResponsiveProvider({ children }: { children: ReactNode }) {
  const [responsive, setResponsive] = useState<ResponsiveContextType>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouch: false,
    screenWidth: 0,
    screenHeight: 0,
    orientation: 'portrait',
    deviceType: 'desktop'
  })

  useEffect(() => {
    const updateResponsive = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      
      const isMobile = width < 768
      const isTablet = width >= 768 && width < 1024
      const isDesktop = width >= 1024
      
      let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop'
      if (isMobile) deviceType = 'mobile'
      else if (isTablet) deviceType = 'tablet'
      
      const orientation = height > width ? 'portrait' : 'landscape'

      setResponsive({
        isMobile,
        isTablet,
        isDesktop,
        isTouch,
        screenWidth: width,
        screenHeight: height,
        orientation,
        deviceType
      })
    }

    updateResponsive()
    window.addEventListener('resize', updateResponsive)
    window.addEventListener('orientationchange', updateResponsive)
    
    return () => {
      window.removeEventListener('resize', updateResponsive)
      window.removeEventListener('orientationchange', updateResponsive)
    }
  }, [])

  return (
    <ResponsiveContext.Provider value={responsive}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export function useResponsive() {
  const context = useContext(ResponsiveContext)
  if (context === undefined) {
    throw new Error('useResponsive must be used within a ResponsiveProvider')
  }
  return context
}
