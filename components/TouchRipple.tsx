'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Ripple {
  id: number
  x: number
  y: number
}

export default function TouchRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (touch) {
        const newRipple = {
          id: Date.now(),
          x: touch.clientX,
          y: touch.clientY,
        }
        
        setRipples(prev => [...prev, newRipple])
        
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id))
        }, 1000)
      }
    }

    window.addEventListener('touchstart', handleTouch, { passive: true })
    
    return () => {
      window.removeEventListener('touchstart', handleTouch)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            className="absolute"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="w-16 h-16 -ml-8 -mt-8 rounded-full border-2 border-purple-400/50 bg-purple-400/10" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

