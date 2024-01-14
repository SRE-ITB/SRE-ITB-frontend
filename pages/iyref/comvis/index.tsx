import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Comingsoon from '@src/contexts/ComingSoon/ComingSoon'

const ComvisPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | ComVis">
      <Navbar />
      <Comingsoon />
    </SEO>
  )
}

export default ComvisPage
