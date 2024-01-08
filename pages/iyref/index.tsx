import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/hero'

const Internal: React.FC = () => {
  return (
    <SEO title="SRE ITB | IYREF">
      <Navbar />
      <Hero />
    </SEO>
  )
}

export default Internal
