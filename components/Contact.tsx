'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/vasav-patel/',
    color: '#0A66C2',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/Vasu2604',
    color: '#fff',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:patelvasav2604@gmail.com',
    color: '#EA4335',
  },
  {
    name: 'Phone',
    icon: FaPhone,
    href: 'tel:+16692491352',
    color: '#25D366',
  },
]

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Let&apos;s <span className="gradient-text">Connect!</span>
      </h2>

      <div className="glass p-8 rounded-3xl mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to collaborate? 🚀
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I&apos;m always eager to explore new opportunities and collaborations. 
          With a passion for solving complex problems through data science, AI, 
          and full-stack development, I&apos;m on a mission to make an impact.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          If you&apos;re looking for someone who brings both technical expertise 
          and a creative approach to projects, I&apos;d love to hear from you!
        </p>
        
        <motion.a
          href="mailto:patelvasav2604@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Get In Touch
        </motion.a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {socialLinks.map((link, index) => {
          const Icon = link.icon
          return (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="glass p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-black/5 dark:hover:bg-white/10 transition-all group"
              >
              <Icon 
                className={link.name === 'GitHub' ? "text-4xl transition-all text-black dark:text-white" : "text-4xl transition-all"}
                style={link.name === 'GitHub' ? undefined : { color: link.color }}
              />
              <span className="text-gray-900 dark:text-white font-semibold text-sm">{link.name}</span>
            </motion.a>
          )
        })}
      </div>
    </div>
  )
}
