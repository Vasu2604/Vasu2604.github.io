'use client'

import { motion } from 'framer-motion'
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiTensorflow, SiPytorch, SiDocker, SiGit,
  SiPostgresql, SiMongodb, SiKubernetes, SiAmazonwebservices
} from 'react-icons/si'

const technicalSkills = [
  { name: 'Python', icon: SiPython, color: '#3776AB', level: 95 },
  { name: 'Data Analysis', icon: SiPython, color: '#3776AB', level: 92 },
  { name: 'Data Storytelling', icon: SiPython, color: '#3776AB', level: 88 },
  { name: 'Data Visualization', icon: SiPython, color: '#3776AB', level: 90 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 90 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 88 },
  { name: 'React', icon: SiReact, color: '#61DAFB', level: 92 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#fff', level: 90 },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 87 },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', level: 93 },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', level: 91 },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 85 },
  { name: 'Git', icon: SiGit, color: '#F05032', level: 88 },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 86 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 84 },
]

const softSkills = [
  { name: 'Communication', level: 95 },
  { name: 'Team Work', level: 93 },
  { name: 'Problem Solving', level: 94 },
  { name: 'Leadership', level: 87 },
  { name: 'Time Management', level: 90 },
  { name: 'Student Support', level: 92 },
]

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Skills & <span className="gradient-text">Expertise</span>
      </h2>

      {/* Core Competencies (horizontal bars like screenshot) */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Core Competencies</h3>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
          {[
            { name: 'Machine Learning', level: 95, colors: ['#4f7cac','#357abd'] },
            { name: 'SQL/Postgres', level: 80, colors: ['#2e7d32','#43a047'] },
            { name: 'Fullstack Development', level: 90, colors: ['#d84343','#c62828'] },
            { name: 'Git', level: 88, colors: ['#e65100','#ef6c00'] },
            { name: 'MLOPS', level: 85, colors: ['#7b1fa2','#9c27b0'] },
            { name: 'SDE Skills', level: 84, colors: ['#00695c','#00897b'] },
          ].map((s, i) => (
            <div key={s.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-900 dark:text-white font-mono text-lg">{s.name}</span>
                <span className="text-gray-900 dark:text-white font-mono text-lg">{s.level}%</span>
              </div>
              <div className="w-full h-2.5 bg-gray-200 dark:bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1 }}
                  className="h-full rounded-full"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, ${s.colors[0]} 0 10px, ${s.colors[1]} 10px 20px)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technicalSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="glass p-3 rounded-2xl flex flex-col items-center gap-2 hover:bg-black/5 dark:hover:bg-white/10 transition-all group"
              >
                <Icon 
                  className="text-3xl transition-all" 
                  style={{ color: skill.color }}
                />
                <p className="text-gray-900 dark:text-white text-[10px] font-medium text-center">{skill.name}</p>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Soft Skills replaced per request (use circular UI like screenshot) */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Professional Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Communication', level: 95 },
            { name: 'Team Work', level: 93 },
            { name: 'Project Management', level: 90 },
            { name: 'Creativity', level: 89 },
          ].map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="relative flex flex-col items-center justify-center h-40">
              <svg className="w-32 h-32 rotate-[-90deg]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="#2d2d2d" strokeWidth="6" fill="none" />
                <motion.circle
                  cx="50" cy="50" r="45" fill="none"
                  stroke="#ff9800" strokeWidth="6" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: s.level / 100 }}
                  transition={{ duration: 1.2, delay: i * 0.1 }}
                />
              </svg>
              <div className="absolute text-center">
                <div className="text-gray-900 dark:text-white text-sm font-semibold">{s.name}</div>
                <div className="text-gray-700 dark:text-white/70 text-xs mt-1">{s.level}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
