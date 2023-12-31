import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/About/Hero'
import VisionMission from '@src/contexts/About/AboutV2/VisionMission'
import AboutUsBanner from '@src/components/Banner/AboutUsBanner'
import BehindSRE from '@src/contexts/About/AboutV2/BehindSRE'
import OurTeam from '@src/contexts/About/OurTeam'
import Footer from '@src/components/Navigation/Footer'

const Landing: React.FC = () => {
  return (
    <SEO title="SRE ITB | About Us">
      <Navbar />
      <Hero />
      <VisionMission />
      <AboutUsBanner />
      <BehindSRE />
      <OurTeam />
      <Footer />
    </SEO>
  )
}

export default Landing
