import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Jumbotron from '@src/contexts/Home/Jumbotron'
import Description from '@src/contexts/Home/Description'
import Carousel from '@src/contexts/Home/Activity'
import FooterLandingPage from '@src/components/Navigation/FooterLandingPage'

const Landing: React.FC = () => {
  return (
    <SEO title="SRE ITB">
      <Navbar />
      <Jumbotron />
      <Description />
      <Carousel />
      <FooterLandingPage />
    </SEO>
  )
}

export default Landing
