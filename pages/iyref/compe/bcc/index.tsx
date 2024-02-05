import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/BCC/Hero'

const BCCPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | BCC">
      <Navbar />
      <Hero />
    </SEO>
  )
}

export default BCCPage
