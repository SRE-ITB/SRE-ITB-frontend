import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/BPC/Hero'

const BPCPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | BPC">
      <Navbar />
      <Hero />
    </SEO>
  )
}

export default BPCPage
