'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

const experiences = [
  {
    type: 'work',
    title: 'Teaching Assistant',
    company: 'San Jose State University (Part-time, On-site)',
    period: 'January 2025 - Present',
    description: [
      'Supported the course by grading assignments, quizzes, and exams with timely, helpful feedback.',
      'Co-created clear grading rubrics and simplified workflows so students received results faster.',
      'Analyzed class data and built an easy-to-use dashboard to make insights simple and visual.',
      'Planned engaging class activities that connected theory to real examples.',
      'Held regular office hours and offered one-on-one help to keep students on track.',
      'Coordinated closely with the instructor and department to align goals and maintain high standards.',
      'Skills: Communication, Microsoft Office, Time management, Student support, Data Analysis, Data Storytelling, Data Visualization',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer Intern',
    company: 'Raj Vijtech Pvt Ltd',
    period: 'July 2023 - December 2023',
    description: [
      'Used data analysis to turn marketing and sales data into clear insights that strengthened campaigns and helped the team focus on the right leads.',
      'Built an automatic reporting system that gathered data, refreshed spreadsheets on a schedule, and shared simple summaries with stakeholders.',
      'Conducted deep dives on lead behavior and offer timing to explain what moves deals forward and where to focus next.',
      'Created simple checks and alerts to keep reports accurate and on time, serving as the point person when issues came up.',
      'Worked closely with marketing, sales, and IT to answer key questions and translate findings into practical next steps.',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Webby Genius Infotech Pvt. Ltd',
    period: 'June 2022 - June 2023',
    description: [
      'Led the design and launch of a university portal and chatbot, giving students and staff fast, reliable access to information.',
      'Turned team requirements into clear, well-scoped features and delivered them from start to finish.',
      'Set up a smooth update process so new releases went live without interrupting users.',
      'Kept the system healthy with simple checks, alerts, and status views to spot issues early and fix them quickly.',
      'Organized how data moved and was stored so pages stayed responsive during busy times.',
      'Worked closely with product, IT, and support to plan priorities and hand off features with clear guides.',
    ],
  },
  {
    type: 'work',
    title: 'Data Science & Business Analytics Intern',
    company: 'The Sparks Foundation',
    period: '2022',
    description: [
      'Created data visualization graphics for complex datasets',
      'Translated machine learning technology benefits for non-technical audiences',
    ],
  },
]

const education = [
  {
    degree: "Master's Degree - Artificial Intelligence",
    school: 'San Jose State University',
    period: 'January 2024 - Present',
    description: 'Pursuing advanced topics in machine learning, NLP, advanced data mining, and IoT',
  },
  {
    degree: "Bachelor's Degree - Computer Science and Business Systems",
    school: 'NMIMS Deemed-to-be-University',
    period: '2019 - 2023',
    description: 'Graduated with strong foundation in algorithms, data structures, and software development',
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              My Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Work Experience */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-primary-400" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-2xl hover:shadow-neon transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="text-accent-600 dark:text-accent-400 mr-2">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-accent-400" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-2xl hover:shadow-neon-accent transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                      <p className="text-accent-600 dark:text-accent-400 font-semibold">{edu.school}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2 md:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


