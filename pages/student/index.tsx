import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Comingsoon from '@src/contexts/ComingSoon/ComingSoon'
import Footer from '@src/components/Navigation/Footer'

const Internal: React.FC = () => {
  return (
    <SEO title="SRE ITB | Student">
      <Navbar />
      <Comingsoon />
      <Footer />
    </SEO>
  )
}

export default Internal
