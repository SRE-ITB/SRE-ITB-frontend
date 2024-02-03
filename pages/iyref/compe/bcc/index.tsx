import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Comingsoon from '@src/contexts/ComingSoon/ComingSoon'

const BCCPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | BCC">
      <Navbar />
      <Comingsoon />
    </SEO>
  )
}

export default BCCPage
