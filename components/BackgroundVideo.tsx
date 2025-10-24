'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface BackgroundVideoProps {
  cursorX: any
  cursorY: any
  isMobile: boolean
}

export default function BackgroundVideo({ cursorX, cursorY, isMobile }: BackgroundVideoProps) {
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Check if video file exists
    const video = document.createElement('video')
    video.src = '/background-video.mp4'
    video.onerror = () => setVideoError(true)
    video.onloadeddata = () => setVideoLoaded(true)
  }, [])

  if (videoError || !videoLoaded) {
    // Fallback static background
    return (
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          x: !isMobile ? cursorX : 0,
          y: !isMobile ? cursorY : 0,
        }}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/back.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
          </div>
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-transparent dark:bg-black/40"></div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="fixed inset-0 z-0"
      style={{
        x: !isMobile ? cursorX : 0,
        y: !isMobile ? cursorY : 0,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute w-full h-full object-cover"
        onError={() => setVideoError(true)}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-transparent dark:bg-black/40"></div>
    </motion.div>
  )
}
