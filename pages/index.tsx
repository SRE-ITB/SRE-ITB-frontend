import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/Home/Hero'
import About from '@src/contexts/Home/About'
import Banner from '@src/contexts/Home/Banner'
import Activity from '@src/contexts/Home/Activity'
import Footer from '@src/components/Navigation/Footer'

const HomePage: React.FC = () => {
  return (
    <SEO title="SRE ITB">
      <Navbar />
      <Hero />
      <About />
      <Banner />
      <Activity />
      <Footer />
    </SEO>
  )
}

export default HomePage
