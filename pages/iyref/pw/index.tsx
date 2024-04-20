import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Comingsoon from '@src/contexts/ComingSoon/ComingSoon'

const PWPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | PW">
      <Navbar />
      <Comingsoon />
    </SEO>
  )
}

export default PWPage
