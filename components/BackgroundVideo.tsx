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
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    // For mobile, prefer the static background image for better performance
    if (isMobile) {
      setUseFallback(true)
      return
    }
    
    // Check if video file exists and can be loaded (desktop only)
    const checkVideo = async () => {
      try {
        const video = document.createElement('video')
        video.src = '/background-video.mp4'
        video.muted = true
        video.playsInline = true
        
        const canPlay = await new Promise((resolve) => {
          video.oncanplay = () => resolve(true)
          video.onerror = () => resolve(false)
          video.load()
        })
        
        if (canPlay) {
          setVideoLoaded(true)
        } else {
          setVideoError(true)
          setUseFallback(true)
        }
      } catch (error) {
        setVideoError(true)
        setUseFallback(true)
      }
    }
    
    checkVideo()
  }, [isMobile])

  if (videoError || !videoLoaded || useFallback) {
    // Fallback static background - Use the same background image as desktop
    return (
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          x: !isMobile ? cursorX : 0,
          y: !isMobile ? cursorY : 0,
        }}
      >
        {/* Use the same background image as desktop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/back.jpg')"
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        </div>
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
        onError={() => {
          setVideoError(true)
          setUseFallback(true)
        }}
        onLoadedData={() => setVideoLoaded(true)}
        onCanPlay={() => setVideoLoaded(true)}
        style={{
          // Ensure video plays on mobile
          objectFit: 'cover'
        }}
      >
        <source src="/background-video.mp4" type="video/mp4" />
        <source src="/public/background-video.mp4" type="video/mp4" />
      </video>
      {/* Fallback background image in case video doesn't load */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/back.jpg')",
          display: videoLoaded && !videoError ? 'none' : 'block'
        }}
      >
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
      </div>
      <div className="absolute inset-0 bg-transparent dark:bg-black/40"></div>
    </motion.div>
  )
}
