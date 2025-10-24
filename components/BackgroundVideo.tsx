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
    // Check if video file exists and can be loaded (both mobile and desktop)
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
          setUseFallback(false)
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
  }, [])

  if (videoError || !videoLoaded || useFallback) {
    // Simple fallback background
    return (
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          x: !isMobile ? cursorX : 0,
          y: !isMobile ? cursorY : 0,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
        onLoadedData={() => {
          setVideoLoaded(true)
          setUseFallback(false)
        }}
        onCanPlay={() => {
          setVideoLoaded(true)
          setUseFallback(false)
        }}
        style={{
          objectFit: 'cover'
        }}
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      {/* Simple fallback background in case video doesn't load */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        style={{
          display: videoLoaded && !videoError ? 'none' : 'block'
        }}
      >
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
      </div>
      <div className="absolute inset-0 bg-transparent dark:bg-black/40"></div>
    </motion.div>
  )
}
