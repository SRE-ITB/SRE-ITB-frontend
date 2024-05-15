import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/PW/Hero'

const PWPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | PW">
      <Navbar />
      <Hero />
    </SEO>
  )
}

export default PWPage
