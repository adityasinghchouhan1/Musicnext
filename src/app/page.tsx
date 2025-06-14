import FeacturesCourses from "./components/FeacturesCourses";
import HeroSection from "./components/HeroSection";
import MSchoolTesimonialCards from "./components/TesimonialCards";
import WhyChooseUs from './components/WhyChooseUs'

export default function Home(){
  return(
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">   
    <HeroSection/>
    <FeacturesCourses/>
    <WhyChooseUs/>
    <MSchoolTesimonialCards/>
</main>
  )
}
