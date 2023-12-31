import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/About/Hero'
import VisionMission from '@src/contexts/About/VisionMission'
import AboutUsBanner from '@src/components/Banner/AboutUsBanner'
import BehindSRE from '@src/contexts/About/BehindSRE'
import Footer from '@src/components/Navigation/Footer'

const Landing: React.FC = () => {
  return (
    <SEO title="SRE ITB | About Us">
      <Navbar />
      <Hero />
      <VisionMission />
      <AboutUsBanner />
      <BehindSRE />
      <Footer />
    </SEO>
  )
}

export default Landing
