import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Hero />
    </div>
  )
}
