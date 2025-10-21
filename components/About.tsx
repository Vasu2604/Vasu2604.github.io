'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaBriefcase, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

interface AboutProps {
  handleOpenExperience?: () => void
}

const contactInfo = [
  { icon: FaUser, label: 'Full Name', value: 'Vasav Patel' },
  { icon: FaPhone, label: 'Phone', value: '+1 669 249 1352' },
  { icon: FaEnvelope, label: 'Email', value: 'patelvasav2604@gmail.com' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'San Jose, CA, USA' },
]

export default function About({ handleOpenExperience }: AboutProps) {
  return (
    <div className="max-w-4xl mx-auto relative px-4 md:px-0">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`about-bg-${i}`}
            className="absolute w-20 h-20 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.1, 0.3, 0.1, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Profile Section */}
      <motion.div 
        className="flex flex-col md:flex-row items-center mb-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="mb-6 relative"
          whileHover={{ scale: 1.05, rotateY: 5 }}
        >
          {/* Animated border with pulsing effect */}
          <motion.div 
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-75 blur-sm"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
                 <div 
                   className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary-500 shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                 >
            <img
              src="/images/profile.jpg"
              alt="Vasav Patel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            
            {/* Floating particles around image */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${10 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
        
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center md:text-left">
          Hi, I&apos;m <span className="gradient-text">Vasu</span>
        </h1>
        <div className="text-lg md:text-xl text-blue-700 dark:text-blue-300 mb-6 text-center md:text-left">
          <TypeAnimation
            sequence={[
              'SOFTWARE ENGINEER', 1500,
              'FULL STACK ENGINEER', 1500,
              'AI/ML ENGINEER', 1500,
              'DATA SCIENTIST', 1500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={50}
            deletionSpeed={60}
            className="tracking-wide"
          />
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl leading-relaxed mb-4">
          I&apos;m Vasav Patel, a Master&apos;s student in Artificial Intelligence at San Jose State University, 
          with a Bachelor&apos;s in Computer Science and Business Systems from NMIMS Deemed-to-be-University, 
          Mumbai. Across academia and industry, I&apos;ve built a strong foundation in AI, machine learning, and 
          data science—alongside hands-on software engineering experience in Java, Python, SQL, Node, SDLC, 
          AWS, quality assurance, system design, and distributed systems. I love building scalable, reliable, 
          data-driven applications with integrity.
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl leading-relaxed mb-6">
          I&apos;m on a quest to use AI to solve real-world puzzles and spark innovation. Always chasing the next 
          tech upgrade, I enjoy tackling new challenges and bringing a bit of geeky magic to every project—one 
          algorithm at a time. When I&apos;m not coding, I&apos;m hiking with my squad, caring for my plants, or reading 
          under a book. Feel free to reach out if you&apos;d like to chat over mutual interests.
        </p>

        {handleOpenExperience && (
          <div className="mt-4">
            <motion.button
              onClick={handleOpenExperience}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-white/10 bg-white text-gray-900 dark:bg-white/5 dark:text-white shadow-md hover:bg-gray-50 dark:hover:bg-white/10"
            >
              <FaBriefcase className="text-primary-400" />
              <span className="text-sm font-medium">View Experience</span>
            </motion.button>
          </div>
        )}
      </motion.div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        {contactInfo.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg">
                  <Icon className="text-base text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                  <p className="text-gray-900 dark:text-white font-medium text-sm">{item.value}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Interest Tags */}
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        {['Distributed Systems', 'Enterprise Software', 'Parallel Computing', 'Cloud Computing', 'Machine Learning', 'AI'].map((interest) => (
          <span
            key={interest}
            className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:bg-blue-500/30 transition-colors"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  )
}