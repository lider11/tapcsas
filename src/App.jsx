import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AboutSection from './components/sections/AboutSection'
import CTASection from './components/sections/CTASection'
import HeroSection from './components/sections/HeroSection'
import MissionVisionSection from './components/sections/MissionVisionSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ServicesSection from './components/sections/ServicesSection'
import ValueSection from './components/sections/ValueSection'
import { benefits, hero, navLinks, pillars, projects, services } from './content/home'

function App() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <div className="bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white">
        <Navbar links={navLinks} />
        <HeroSection hero={hero} />
      </div>

      <main>
        <AboutSection />
        <ServicesSection services={services} />
        <ProjectsSection projects={projects} />
        <MissionVisionSection pillars={pillars} />
        <ValueSection benefits={benefits} />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

export default App
