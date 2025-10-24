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
    // Fallback static background - Create office scene with CSS
    return (
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          x: !isMobile ? cursorX : 0,
          y: !isMobile ? cursorY : 0,
        }}
      >
        {/* Office Scene Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          {/* City Skyline Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-700">
            {/* Window Frame */}
            <div className="absolute inset-0">
              {/* Window Panes */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-600/20 border-r border-slate-500/30"></div>
                <div className="absolute top-0 left-1/3 w-1/3 h-full bg-slate-600/20 border-r border-slate-500/30"></div>
                <div className="absolute top-0 left-2/3 w-1/3 h-full bg-slate-600/20"></div>
              </div>
              
              {/* City Buildings */}
              <div className="absolute bottom-0 left-0 w-full h-1/2">
                {/* Building silhouettes */}
                <div className="absolute bottom-0 left-0 w-1/4 h-full bg-slate-800"></div>
                <div className="absolute bottom-0 left-1/4 w-1/6 h-3/4 bg-slate-700"></div>
                <div className="absolute bottom-0 left-1/3 w-1/5 h-full bg-slate-900"></div>
                <div className="absolute bottom-0 left-1/2 w-1/6 h-2/3 bg-slate-800"></div>
                <div className="absolute bottom-0 left-2/3 w-1/5 h-5/6 bg-slate-700"></div>
                <div className="absolute bottom-0 left-4/5 w-1/5 h-full bg-slate-900"></div>
                
                {/* Building Windows (lights) */}
                <div className="absolute bottom-0 left-0 w-1/4 h-full">
                  <div className="absolute top-1/4 left-1/4 w-1 w-1 h-1 bg-yellow-400"></div>
                  <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-yellow-300"></div>
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400"></div>
                  <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-yellow-300"></div>
                </div>
              </div>
              
              {/* Rain Effect */}
              <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-px h-4 bg-blue-300/30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, 100],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Desk and Computer */}
          <div className="absolute bottom-0 left-0 w-full h-1/3">
            {/* Desk Surface */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-amber-900/80"></div>
            
            {/* Computer Monitor */}
            <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-slate-300 rounded-lg">
              <div className="absolute inset-1 bg-slate-800 rounded"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-900 to-slate-900 rounded"></div>
            </div>
            
            {/* Keyboard */}
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-slate-200 rounded"></div>
            
            {/* Mouse */}
            <div className="absolute bottom-1/4 left-1/2 transform translate-x-8 w-3 h-2 bg-slate-200 rounded"></div>
            
            {/* Books */}
            <div className="absolute bottom-1/2 left-1/4 w-4 h-8 bg-red-600"></div>
            <div className="absolute bottom-1/2 left-1/3 w-4 h-6 bg-blue-600"></div>
            <div className="absolute bottom-1/2 left-1/2 transform translate-x-16 w-4 h-7 bg-green-600"></div>
            
            {/* Lamp */}
            <div className="absolute bottom-1/2 right-1/4 w-2 h-8 bg-amber-600"></div>
            <div className="absolute bottom-1/2 right-1/4 transform -translate-y-2 w-4 h-2 bg-yellow-300 rounded-full opacity-60"></div>
          </div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
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
      {/* Fallback office scene background in case video doesn't load */}
      <div 
        className="absolute inset-0"
        style={{
          display: videoLoaded && !videoError ? 'none' : 'block'
        }}
      >
        {/* Office Scene Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          {/* City Skyline Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-700">
            {/* Window Frame */}
            <div className="absolute inset-0">
              {/* Window Panes */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-600/20 border-r border-slate-500/30"></div>
                <div className="absolute top-0 left-1/3 w-1/3 h-full bg-slate-600/20 border-r border-slate-500/30"></div>
                <div className="absolute top-0 left-2/3 w-1/3 h-full bg-slate-600/20"></div>
              </div>
              
              {/* City Buildings */}
              <div className="absolute bottom-0 left-0 w-full h-1/2">
                {/* Building silhouettes */}
                <div className="absolute bottom-0 left-0 w-1/4 h-full bg-slate-800"></div>
                <div className="absolute bottom-0 left-1/4 w-1/6 h-3/4 bg-slate-700"></div>
                <div className="absolute bottom-0 left-1/3 w-1/5 h-full bg-slate-900"></div>
                <div className="absolute bottom-0 left-1/2 w-1/6 h-2/3 bg-slate-800"></div>
                <div className="absolute bottom-0 left-2/3 w-1/5 h-5/6 bg-slate-700"></div>
                <div className="absolute bottom-0 left-4/5 w-1/5 h-full bg-slate-900"></div>
                
                {/* Building Windows (lights) */}
                <div className="absolute bottom-0 left-0 w-1/4 h-full">
                  <div className="absolute top-1/4 left-1/4 w-1 w-1 h-1 bg-yellow-400"></div>
                  <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-yellow-300"></div>
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400"></div>
                  <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-yellow-300"></div>
                </div>
              </div>
              
              {/* Rain Effect */}
              <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-px h-4 bg-blue-300/30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, 100],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Desk and Computer */}
          <div className="absolute bottom-0 left-0 w-full h-1/3">
            {/* Desk Surface */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-amber-900/80"></div>
            
            {/* Computer Monitor */}
            <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-slate-300 rounded-lg">
              <div className="absolute inset-1 bg-slate-800 rounded"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-900 to-slate-900 rounded"></div>
            </div>
            
            {/* Keyboard */}
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-slate-200 rounded"></div>
            
            {/* Mouse */}
            <div className="absolute bottom-1/4 left-1/2 transform translate-x-8 w-3 h-2 bg-slate-200 rounded"></div>
            
            {/* Books */}
            <div className="absolute bottom-1/2 left-1/4 w-4 h-8 bg-red-600"></div>
            <div className="absolute bottom-1/2 left-1/3 w-4 h-6 bg-blue-600"></div>
            <div className="absolute bottom-1/2 left-1/2 transform translate-x-16 w-4 h-7 bg-green-600"></div>
            
            {/* Lamp */}
            <div className="absolute bottom-1/2 right-1/4 w-2 h-8 bg-amber-600"></div>
            <div className="absolute bottom-1/2 right-1/4 transform -translate-y-2 w-4 h-2 bg-yellow-300 rounded-full opacity-60"></div>
          </div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-transparent dark:bg-black/40"></div>
    </motion.div>
  )
}
