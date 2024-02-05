import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/NEC/Hero'

const NECPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | NEC">
      <Navbar />
      <Hero />
    </SEO>
  )
}

export default NECPage
