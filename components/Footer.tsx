'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-2">
            &copy; {new Date().getFullYear()} Vasav Patel. All Rights Reserved
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Built with 💜 by Vasav Patel
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
