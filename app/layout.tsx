import type { Metadata } from 'next'
import { Inter, Space_Mono, Kaushan_Script } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono'
})
const kaushanScript = Kaushan_Script({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-kaushan'
})

export const metadata: Metadata = {
  title: 'Vasav Patel - AI/ML Engineer & Full Stack Developer',
  description: 'Portfolio of Vasav Patel - Master\'s student in AI at San Jose State University. Specializing in Machine Learning, Data Science, and Full Stack Development.',
  keywords: ['Vasav Patel', 'AI Engineer', 'ML Engineer', 'Data Scientist', 'Full Stack Developer', 'San Jose State University'],
  authors: [{ name: 'Vasav Patel' }],
  openGraph: {
    title: 'Vasav Patel - AI/ML Engineer',
    description: 'Portfolio showcasing AI/ML projects, experience, and skills',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} ${kaushanScript.variable} antialiased bg-black`}>
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}

