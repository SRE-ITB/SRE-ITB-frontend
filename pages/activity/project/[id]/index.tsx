import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Article from '@src/contexts/Activity/Article'
import Footer from '@src/components/Navigation/Footer'

const Internal: React.FC = () => {
  return (
    <SEO title="SRE ITB | Latest Update">
      <Navbar />
      <Article />
      <Footer />
    </SEO>
  )
}

export default Internal
