import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Comingsoon from '@src/contexts/ComingSoon/ComingSoon'

const BPCPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | BPC">
      <Navbar />
      <Comingsoon />
    </SEO>
  )
}

export default BPCPage
