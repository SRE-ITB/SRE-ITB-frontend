import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Comingsoon from '@src/contexts/ComingSoon/ComingSoon'

const MerchandisePage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | Merchandise">
      <Navbar />
      <Comingsoon />
    </SEO>
  )
}

export default MerchandisePage
