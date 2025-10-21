'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'SwiftCart Order Manager',
    description: 'A stunning, production-ready order management system with real-time WebSocket updates and comprehensive metrics dashboard',
    image: '/images/SWIFTCART.png',
    link: 'https://github.com/Vasu2604/SwiftCart-Order-Manager', // Replace with your GitHub link
    tech: ['React', 'Node.js', 'WebSocket', 'Dashboard'],
  },
  {
    title: 'RideGrid',
    description: 'A Playbook for Planet-Scale Ride-Hailing - Advanced ride-hailing system with intelligent routing and real-time optimization',
    image: '/images/RideGrid.jpeg',
    link: 'https://github.com/Vasu2604/RideGrid', // Replace with your GitHub link
    tech: ['Microservices', 'Real-time', 'Scalability', 'AI/ML'],
  },
  {
    title: 'MedAgentica',
    description: '🏥 Multi-Agent Medical Assistant with Agentic RAG - Intelligent medical assistant powered by advanced AI agents',
    image: '/images/MedAgentica.jpeg',
    link: 'https://github.com/Vasu2604?tab=repositories', // Replace with your GitHub link
    tech: ['AI Agents', 'RAG', 'Medical AI', 'LLM'],
  },
  {
    title: 'OskiBot',
    description: "RAG Based University's Chatbot powered by AI to answer student queries instantly",
    image: '/images/chatbot-speech.png',
    link: 'https://github.com/Vasu2604/Oskibot',
    tech: ['Python', 'LangChain', 'RAG', 'NLP'],
  },
  {
    title: 'Personal Finance LLM',
    description: 'Fintech LLM for intelligent financial advice and portfolio management',
    image: '/images/LLM.jpg',
    link: 'https://github.com/Vasu2604/Personal-Finance-LLM',
    tech: ['LLM', 'FinTech', 'Python', 'AI'],
  },
  {
    title: 'Credit Scoring Model',
    description: 'ML-powered credit scoring system for accurate creditworthiness prediction',
    image: '/images/Credit-score.png',
    link: 'https://github.com/Vasu2604/Credit-Scoring-Model-using-ML',
    tech: ['Machine Learning', 'Python', 'Scikit-learn'],
  },
  {
    title: 'GlobeTrotter',
    description: '2D adventure game with engaging gameplay and interactive elements',
    image: '/images/game-frog.png',
    link: 'https://github.com/Vasu2604/GlobeTrotter',
    tech: ['Game Dev', 'Python', 'Pygame'],
  },
]

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rX = (py - 0.5) * -10 // tilt up/down
    const rY = (px - 0.5) * 12  // tilt left/right
    rotateX.set(rX)
    rotateY.set(rY)
  }

  const handleLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.03 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group relative border border-white/10 shadow-xl cursor-pointer"
    >
      {/* Animated gradient border */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-pink-500/40 blur-xl" />
      </div>

      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        {/* Sweep shine */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-white/10 via-white/40 to-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-[1200ms]" />
        </div>
        {/* Corner shine */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 glass-dark p-2.5 rounded-lg hover:bg-white/20 transition-all"
        >
          <FaGithub className="text-lg text-white" />
        </a>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Outline glow on hover */}
      <motion.div
        layoutId="project-glow"
        className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20"
      />
    </motion.div>
  )
}

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0">
      {/* Animated title with floating elements */}
      <motion.div 
        className="relative mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        {/* Floating decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-sm animate-pulse" />
        <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Animated underline */}
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

             {/* Enhanced grid with stagger animation */}
             <motion.div 
               className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.3 }}
             >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`bg-${i}`}
            className="absolute w-32 h-32 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-2xl"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </div>
  )
}
