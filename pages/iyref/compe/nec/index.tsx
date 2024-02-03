import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Comingsoon from '@src/contexts/ComingSoon/ComingSoon'

const NECPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | NEC">
      <Navbar />
      <Comingsoon />
    </SEO>
  )
}

export default NECPage
