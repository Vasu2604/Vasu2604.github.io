'use client'

import { ReactNode } from 'react'
import { useDevice } from '../hooks/useDevice'

interface ResponsiveWrapperProps {
  children: ReactNode
  mobile?: ReactNode
  tablet?: ReactNode
  desktop?: ReactNode
  className?: string
}

export default function ResponsiveWrapper({ 
  children, 
  mobile, 
  tablet, 
  desktop, 
  className = '' 
}: ResponsiveWrapperProps) {
  const device = useDevice()

  const getContent = () => {
    if (device.isMobile && mobile) return mobile
    if (device.isTablet && tablet) return tablet
    if (device.isDesktop && desktop) return desktop
    return children
  }

  return (
    <div className={className}>
      {getContent()}
    </div>
  )
}
