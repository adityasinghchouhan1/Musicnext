import { Inspiration } from 'next/font/google'
import FeacturesCourses from './components/FeacturesCourses'
import HeroSection from './components/HeroSection'
import MSchoolTesimonialCards from './components/TesimonialCards'
import UpcomingWebinars from './components/UpcomingWebinars'
import WhyChooseUs from './components/WhyChooseUs'
import Instructores from './components/Instructores'

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeacturesCourses />
      <WhyChooseUs />
      <MSchoolTesimonialCards />
      <UpcomingWebinars />
      <Instructores />
    </main>
  )
}
