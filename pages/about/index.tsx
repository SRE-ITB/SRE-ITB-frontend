import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/About/Hero'
import History from '@src/contexts/About/History'
import AboutUsBanner from '@src/components/Banner/AboutUsBanner'
import VisionMission from '@src/contexts/About/VisionMission'
import OurTeam from '@src/contexts/About/OurTeam'
import Footer from '@src/components/Navigation/Footer'

const Landing: React.FC = () => {
  return (
    <SEO title="SRE ITB | About Us">
      <Navbar />
      <Hero />
      <History />
      <AboutUsBanner />
      <VisionMission />
      <OurTeam />
      <Footer />
    </SEO>
  )
}

export default Landing
