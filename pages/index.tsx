import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/Home/Hero'
import About from '@src/contexts/Home/About'
import HomeBanner from '@src/components/Banner/HomeBanner'
import Activity from '@src/contexts/Home/Activity'
import Footer from '@src/components/Navigation/Footer'

const Landing: React.FC = () => {
  return (
    <SEO title="SRE ITB">
      <Navbar />
      <Hero />
      <About />
      <HomeBanner />
      <Activity />
      <Footer />
    </SEO>
  )
}

export default Landing
