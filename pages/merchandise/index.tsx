import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Comingsoon from '@src/contexts/ComingSoon/ComingSoon'

const Internal: React.FC = () => {
  return (
    <SEO title="SRE ITB | Merchandise">
      <Navbar />
      <Comingsoon />
    </SEO>
  )
}

export default Internal
