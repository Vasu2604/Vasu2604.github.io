'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface WindowProps {
  title: string
  onClose: () => void
  children: React.ReactNode
  initialPosition?: { x: number; y: number }
}

export default function Window({ title, onClose, children, initialPosition = { x: 100, y: 100 } }: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Dynamic window sizing based on device
  const getWindowStyles = () => {
    if (isMobile) {
      return {
        top: '10%',
        left: '5%',
        width: '90vw',
        maxWidth: '90vw',
        maxHeight: '80vh',
        marginLeft: '0'
      }
    } else if (isTablet) {
      return {
        top: '8%',
        left: '50%',
        width: '85vw',
        maxWidth: '85vw',
        maxHeight: '85vh',
        marginLeft: '-42.5vw'
      }
    } else {
      return {
        top: '5%',
        left: '50%',
        width: isMaximized ? '90vw' : '850px',
        maxWidth: '90vw',
        maxHeight: 'calc(100vh - 200px)',
        marginLeft: isMaximized ? '-45vw' : '-425px'
      }
    }
  }

  const windowStyles = getWindowStyles()

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.2 }}
      drag={!isMaximized && !isMobile}
      dragMomentum={false}
      className="fixed z-50 rounded-2xl overflow-hidden shadow-2xl"
      style={windowStyles}
    >
      {/* Window */}
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-300 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col" style={{ maxHeight: windowStyles.maxHeight }}>
        {/* Title Bar */}
        <div className="bg-gray-100/90 dark:bg-gray-800/90 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-gray-300 dark:border-white/10 cursor-move">
          <div className="flex items-center gap-2">
            {/* Traffic Lights */}
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              aria-label="Close"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
              aria-label="Minimize"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
              aria-label="Maximize"
            />
          </div>
          <div className="text-gray-800 dark:text-white text-xs sm:text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
            {title}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          {children}
        </div>
      </div>
    </motion.div>
  )
}