'use client'

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { FaUser, FaFolder, FaFile, FaEnvelope, FaGamepad, FaGithub, FaLinkedin, FaBars, FaBriefcase, FaWindowMaximize, FaRedo, FaMoon, FaSun } from 'react-icons/fa'
import Window from './Window'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Experience from './Experience'
import { useDevice } from '../hooks/useDevice'

type WindowType = 'profile' | 'projects' | 'skills' | 'contact' | 'experience' | null

const dockItems = [
  {
    name: 'Profile',
    icon: FaUser,
    color: 'from-purple-500 via-purple-600 to-pink-500',
    window: 'profile' as WindowType,
  },
  {
    name: 'Projects',
    icon: FaFolder,
    color: 'from-blue-500 via-blue-600 to-cyan-500',
    window: 'projects' as WindowType,
  },
  {
    name: 'Resume',
    icon: FaFile,
    href: 'https://drive.google.com/file/d/1qpoubIC2HQMEr1WS8GYIGA6k5o25FNRI/view?usp=sharing',
    color: 'from-green-500 via-emerald-600 to-teal-500',
    external: true,
  },
  {
    name: 'Contact',
    icon: FaEnvelope,
    color: 'from-orange-500 via-red-500 to-pink-500',
    window: 'contact' as WindowType,
  },
  {
    name: 'Skills',
    icon: FaGamepad,
    color: 'from-red-500 via-rose-600 to-pink-500',
    window: 'skills' as WindowType,
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/Vasu2604',
    color: 'from-gray-700 via-gray-800 to-gray-900',
    external: true,
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/vasav-patel/',
    color: 'from-blue-600 via-blue-700 to-indigo-700',
    external: true,
  },
]

function DockIcon({ item, index, mouseX, onClick, active }: any) {
  const ref = useRef<HTMLButtonElement>(null)
  const Icon = item.icon
  const [hovered, setHovered] = useState(false)

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [44, 64, 44])
  const liftSync = useTransform(distance, [-150, 0, 150], [0, -16, 0])
  const rotateSync = useTransform(distance, [-150, 0, 150], [-8, 0, 8])

  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })
  const y = useSpring(liftSync, { mass: 0.2, stiffness: 200, damping: 15 })
  const rotateZ = useSpring(rotateSync, { mass: 0.2, stiffness: 200, damping: 15 })

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      style={{ width: active ? (width as any) : 52, y: active ? (y as any) : 0, rotateZ: active ? (rotateZ as any) : 0 }}
      whileTap={{ scale: 0.85 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group aspect-square rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg transition-all duration-300"
    >
      {/* Gradient Background with Animation */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
      
      {/* Shine Effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </div>

      {/* Icon */}
      <Icon className="relative z-10 text-white text-xl drop-shadow-lg" />

      {/* Reflection */}
      <div className="absolute -bottom-12 left-0 right-0 h-12 bg-gradient-to-b from-white/5 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Tooltip above icon */}
      <motion.div
        initial={{ opacity: 0, y: 6, scale: 0.85 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? -6 : 6, scale: hovered ? 1 : 0.85 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="absolute left-1/2 bottom-full -mb-3 -translate-x-1/2 pointer-events-none z-[60]"
      >
        <div className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-black/90 backdrop-blur-md border border-white/20 shadow-xl whitespace-nowrap">
          {item.name}
        </div>
      </motion.div>
      {/* Per-icon hover indicator */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-1 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  )
}

// Simple insertion-sort visualizer to demonstrate DSA flair
function SortingVisualizer({ active }: { active: boolean }) {
  const [steps, setSteps] = useState<number[][]>([])
  const [stepIdx, setStepIdx] = useState(0)

  const generateSteps = (n = 14) => {
    const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 90) + 10)
    const snapshots: number[][] = [arr.slice()]
    for (let i = 1; i < arr.length; i++) {
      let j = i
      while (j > 0 && arr[j - 1] > arr[j]) {
        const t = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = t
        snapshots.push(arr.slice())
        j--
      }
    }
    return snapshots
  }

  useEffect(() => {
    if (!active) return
    const s = generateSteps()
    setSteps(s)
    setStepIdx(0)
  }, [active])

  useEffect(() => {
    if (!active || steps.length === 0) return
    const id = setInterval(() => {
      setStepIdx((i) => (i + 1 < steps.length ? i + 1 : i))
    }, 120)
    return () => clearInterval(id)
  }, [active, steps])

  const current = steps[stepIdx] ?? []

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute -top-28 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="backdrop-blur-2xl bg-black/40 border border-white/10 rounded-2xl px-3 py-2 shadow-2xl w-[260px]">
            <div className="flex items-end gap-[6px] h-20">
              {current.map((v, idx) => (
                <motion.div
                  key={idx}
                  layout
                  className="w-[10px] rounded-md bg-gradient-to-t from-purple-500 via-blue-500 to-teal-400 shadow-[0_0_10px_rgba(99,102,241,0.6)]"
                  animate={{ height: `${Math.max(8, v)}%` }}
                  transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                />
              ))}
            </div>
            <div className="mt-2 text-[10px] text-center text-white/70 tracking-wide">Insertion Sort — live</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Hero() {
  const [openWindow, setOpenWindow] = useState<WindowType>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isDockHover, setIsDockHover] = useState(false)
  const [isSwitchingWindow, setIsSwitchingWindow] = useState(false)
  const [rippleKey, setRippleKey] = useState(0)
  const mouseX = useMotionValue(Infinity)
  const dockLocalX = useMotionValue(0)
  const labelX = useMotionValue(0)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const menuRef = useRef<HTMLDivElement>(null)
  const dockRef = useRef<HTMLDivElement>(null)
  const switchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  
  // Device detection
  const device = useDevice()

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
  }, [])

  // Apply theme to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const openWithTransition = (next: WindowType) => {
    if (!next || (openWindow === next && !isSwitchingWindow)) return

    if (switchTimeoutRef.current) {
      clearTimeout(switchTimeoutRef.current)
      switchTimeoutRef.current = null
    }

    setIsMenuOpen(false)

    if (openWindow && openWindow !== next) {
      setIsSwitchingWindow(true)
      setOpenWindow(null)
      setRippleKey((key) => key + 1)

      switchTimeoutRef.current = setTimeout(() => {
        setOpenWindow(next)
        setIsSwitchingWindow(false)
        switchTimeoutRef.current = null
      }, 160)
      return
    }

    setOpenWindow(next)
    setIsSwitchingWindow(false)
  }


  const handleDockItemClick = (item: typeof dockItems[0]) => {
    if (item.external && item.href) {
      window.open(item.href, '_blank')
    } else if (item.window) {
      openWithTransition(item.window)
    }
  }

  const menuItems = [
    { name: 'Projects', icon: FaFolder, action: () => { openWithTransition('projects'); setIsMenuOpen(false) } },
    { name: 'About', icon: FaUser, action: () => { openWithTransition('profile'); setIsMenuOpen(false) } },
    { name: 'Resume', icon: FaFile, action: () => window.open('https://drive.google.com/file/d/1qpoubIC2HQMEr1WS8GYIGA6k5o25FNRI/view?usp=sharing', '_blank') },
    { name: 'Contact', icon: FaEnvelope, action: () => { openWithTransition('contact'); setIsMenuOpen(false) } },
    { name: 'Experience', icon: FaBriefcase, action: () => { openWithTransition('experience'); setIsMenuOpen(false) } },
    { name: 'Skills', icon: FaGamepad, action: () => { openWithTransition('skills'); setIsMenuOpen(false) } },
    { name: 'Reset layout', icon: FaRedo, action: () => { setOpenWindow(null); setIsMenuOpen(false) } },
  ]

  return (
    <section
      className="relative min-h-screen flex items-end justify-center overflow-hidden"
      onMouseMove={(e) => {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
      }}
    >
      {/* Responsive Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-xl bg-white/80 dark:bg-black/30 border-b border-gray-200 dark:border-white/10">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between">
            {/* Left - Menu Button and Name */}
            <div ref={menuRef} className="flex items-center gap-2">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded blur-sm opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Button Container */}
                <div className="relative backdrop-blur-xl bg-gray-100 dark:bg-white/10 px-2 py-1 rounded border border-gray-300 dark:border-white/20 shadow-md flex items-center gap-1.5">
                  <FaBars className="text-gray-700 dark:text-white text-[10px] sm:text-xs" />
                  <span className="text-gray-700 dark:text-white font-medium text-[10px] sm:text-xs hidden sm:inline">Menu</span>
                </div>
              </motion.button>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <h1 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white/90 tracking-wide">
                  Vasav Patel
                </h1>
              </motion.div>
            </div>

            {/* Right - Theme Toggle */}
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              
              {/* Button Container */}
              <div className="relative backdrop-blur-xl bg-gray-100 dark:bg-white/10 p-1.5 sm:p-2 rounded-full border border-gray-300 dark:border-white/20 shadow-md">
                {isDarkMode ? (
                  <FaSun className="text-yellow-300 text-xs sm:text-sm" />
                ) : (
                  <FaMoon className="text-indigo-600 text-xs sm:text-sm" />
                )}
              </div>
            </motion.button>
          </div>
        </div>
      </div>
      {/* Video Background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          x: useSpring(useTransform(cursorX, [0, typeof window !== 'undefined' ? window.innerWidth : 1], [-8, 8]), { stiffness: 80, damping: 20 }),
          y: useSpring(useTransform(cursorY, [0, typeof window !== 'undefined' ? window.innerHeight : 1], [-6, 6]), { stiffness: 80, damping: 20 }),
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-transparent dark:bg-black/40"></div>
      </motion.div>

      {/* Enhanced Cursor-follow effects */}
      <motion.div
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-10 w-56 h-56 rounded-full"
        style={{
          left: cursorX,
          top: cursorY,
          background:
            'radial-gradient(closest-side, rgba(124,58,237,0.18), rgba(59,130,246,0.12), rgba(236,72,153,0.06), transparent)',
          filter: 'blur(10px)'
        }}
      />
      
      {/* Secondary cursor trail */}
      <motion.div
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-9 w-32 h-32 rounded-full"
        style={{
          left: cursorX,
          top: cursorY,
          background:
            'radial-gradient(closest-side, rgba(168,85,247,0.15), rgba(59,130,246,0.08), transparent)',
          filter: 'blur(8px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating geometric shapes */}
      {typeof window !== 'undefined' && (
        <div className="fixed inset-0 z-8 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className={`w-8 h-8 ${
                i % 3 === 0 ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full' :
                i % 3 === 1 ? 'bg-gradient-to-r from-blue-500/20 to-pink-500/20 transform rotate-45' :
                'bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg'
              }`} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Enhanced Floating Particles with Different Types */}
      {typeof window !== 'undefined' && (
        <div className="fixed inset-0 z-5 pointer-events-none">
          {/* Small particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`small-${i}`}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 15 + 25,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
          
          {/* Medium glowing particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`medium-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-sm"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 20 + 30,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
          
          {/* Large floating orbs */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute w-16 h-16 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 rounded-full blur-xl"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 40 + 60,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      )}

      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-xl bg-white/80 dark:bg-black/30 border-b border-gray-200 dark:border-white/10">
          <div className="max-w-screen-2xl mx-auto px-3 py-1.5 flex items-center justify-between">
            {/* Left - Menu Button and Name */}
            <div ref={menuRef} className="flex items-center gap-2">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded blur-sm opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Button Container */}
                <div className="relative backdrop-blur-xl bg-gray-100 dark:bg-white/10 px-2 py-1 rounded border border-gray-300 dark:border-white/20 shadow-md flex items-center gap-1.5">
                  <FaBars className="text-gray-700 dark:text-white text-[10px]" />
                  <span className="text-gray-700 dark:text-white font-medium text-[10px]">Menu</span>
                </div>
              </motion.button>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <h1 className="text-sm font-semibold text-gray-800 dark:text-white/90 tracking-wide">
                  Vasav Patel
                </h1>
              </motion.div>
            </div>

            {/* Right - Theme Toggle */}
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              
              {/* Button Container */}
              <div className="relative backdrop-blur-xl bg-gray-100 dark:bg-white/10 p-1.5 rounded-full border border-gray-300 dark:border-white/20 shadow-md">
                {isDarkMode ? (
                  <FaSun className="text-yellow-300 text-xs" />
                ) : (
                  <FaMoon className="text-indigo-600 text-xs" />
                )}
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Responsive Menu Dropdown */}
      <div className="fixed top-12 sm:top-14 left-3 sm:left-4 z-[60]">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-56 sm:w-64"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-2xl" />
              
              {/* Menu Container */}
              <div className="relative backdrop-blur-2xl bg-white/95 dark:bg-gray-900/95 rounded-xl border border-gray-200 dark:border-white/20 shadow-2xl overflow-hidden">
                {/* Top Border Shine */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                
                {/* Menu Items */}
                <div className="p-2 space-y-0.5">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.button
                        key={item.name}
                        onClick={item.action}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 3, backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)' }}
                        className="w-full flex items-center gap-2 px-2 py-2 sm:py-1.5 rounded-md text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white transition-all duration-200 group min-h-[44px]"
                      >
                        <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="text-[8px] sm:text-[10px] text-white" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{item.name}</span>
                      </motion.button>
                    )
                  })}
                </div>

                {/* Bottom Border Shine */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Transition ripple when switching windows */}
      <AnimatePresence>
        {isSwitchingWindow && (
          <motion.div
            key={`ripple-${rippleKey}`}
            initial={{ opacity: 0.25, scale: 0 }}
            animate={{ opacity: 0, scale: 6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none"
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-3xl" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Windows */}
      <AnimatePresence>
        {openWindow === 'profile' && (
          <Window title="About" onClose={() => setOpenWindow(null)}>
            <About handleOpenExperience={() => openWithTransition('experience')} />
          </Window>
        )}
        {openWindow === 'projects' && (
          <Window title="Projects" onClose={() => setOpenWindow(null)}>
            <Projects />
          </Window>
        )}
        {openWindow === 'skills' && (
          <Window title="Skills" onClose={() => setOpenWindow(null)}>
            <Skills />
          </Window>
        )}
        {openWindow === 'contact' && (
          <Window title="Contact" onClose={() => setOpenWindow(null)}>
            <Contact />
          </Window>
        )}
               {openWindow === 'experience' && (
                 <Window title="Experience" onClose={() => setOpenWindow(null)}>
                   <Experience />
                 </Window>
               )}
               {/* Footer inside a small window to show credits */}
               {openWindow === null && (
                <div className="fixed bottom-3 right-3 z-30 pointer-events-none">
                  <div className="pointer-events-auto text-[11px] text-gray-700 dark:text-white/70 bg-white/80 dark:bg-black/40 backdrop-blur-xl rounded-lg border border-gray-200 dark:border-white/10 px-3 py-1.5 shadow-md">
                    <span className="text-gray-600 dark:text-white/60">Designed by Vasav Patel</span>
                  </div>
                </div>
               )}
      </AnimatePresence>

             {/* Universal Adaptive Dock */}
             <div className={`fixed bottom-4 z-40 left-1/2 transform -translate-x-1/2 w-full px-4 ${
               device.isMobile ? 'max-w-sm' : 
               device.isTablet ? 'max-w-2xl' : 
               'max-w-4xl'
             }`}>
        {/* Desktop/Tablet Dock - Enhanced for all screen sizes */}
        {!device.isMobile && (
          <motion.div
            ref={dockRef}
            onMouseMove={(e) => {
              mouseX.set(e.pageX)
              const rect = dockRef.current?.getBoundingClientRect()
              if (rect) {
                dockLocalX.set(e.clientX - rect.left)
              }
            }}
            onMouseEnter={() => setIsDockHover(true)}
            onMouseLeave={() => {
              mouseX.set(Infinity)
              setIsDockHover(false)
            }}
            animate={{ 
              y: isDockHover ? -8 : 0, 
              scale: isDockHover ? 1.05 : 1,
              rotateX: isDockHover ? 5 : 0,
              rotateY: isDockHover ? 2 : 0
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-3xl" />
            
            {/* Glass Container */}
            <div className="relative backdrop-blur-2xl bg-white/80 dark:bg-white/10 rounded-3xl border border-gray-300 dark:border-white/20 shadow-2xl">
              {/* Top Border Shine */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              
              {/* Dock Items Container - Responsive */}
              <div className={`flex items-end gap-1 px-2 py-2 overflow-x-auto ${
                device.isTablet ? 'gap-1.5 px-3 py-2.5' : 'gap-2 px-4 py-3'
              }`}>
                {dockItems.map((item, index) => (
                  <DockIcon
                    key={item.name}
                    item={item}
                    index={index}
                    mouseX={mouseX}
                    onClick={() => handleDockItemClick(item)}
                    active={isDockHover}
                  />
                ))}
              </div>

              {/* Active Indicator */}
              <div className={`absolute -bottom-1 left-0 right-0 flex justify-center gap-1 px-2 ${
                device.isTablet ? 'gap-1.5 px-3' : 'gap-2 px-4'
              }`}>
                {dockItems.map((item) => (
                  item.window === openWindow && (
                    <motion.div
                      key={item.name}
                      layoutId="active-indicator"
                      className="w-1 h-1 rounded-full bg-white shadow-lg shadow-white/50"
                    />
                  )
                ))}
              </div>
            </div>

            {/* Bottom Reflection */}
            <div className="absolute inset-x-0 -bottom-8 h-8 bg-gradient-to-b from-white/5 to-transparent blur-md rounded-3xl" />
          </motion.div>
        )}

        {/* Mobile Dock - Enhanced Grid Layout */}
        {device.isMobile && (
          <div className="relative backdrop-blur-2xl bg-white/80 dark:bg-white/10 rounded-2xl border border-gray-300 dark:border-white/20 shadow-2xl p-2">
            <div className="grid grid-cols-4 gap-1">
              {dockItems.slice(0, 8).map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleDockItemClick(item)}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center gap-1 p-1.5 rounded-xl hover:bg-white/10 transition-all min-h-[50px]"
                  >
                    <div className={`w-6 h-6 rounded-xl flex items-center justify-center ${item.color}`}>
                      <Icon className="text-white text-xs" />
                    </div>
                    <span className="text-[10px] text-gray-700 dark:text-white/90 text-center leading-tight">
                      {item.name}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
