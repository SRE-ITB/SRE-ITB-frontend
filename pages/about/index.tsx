import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/About/Hero'
import VisionMission from '@src/contexts/About/VisionMission'
import Banner from '@src/contexts/About/Banner'
import BehindSRE from '@src/contexts/About/BehindSRE'
import Family from '@src/contexts/About/Family'
import Footer from '@src/components/Navigation/Footer'

const AboutPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | About Us">
      <Navbar />
      <Hero />
      <VisionMission />
      <Banner />
      <BehindSRE />
      <Family />
      <Footer />
    </SEO>
  )
}

export default AboutPage
