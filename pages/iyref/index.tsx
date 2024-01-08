import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/Hero'
import Desc from '@src/contexts/IYREF/Desc'
import Session from '@src/contexts/IYREF/Session'

const Internal: React.FC = () => {
  return (
    <SEO title="SRE ITB | IYREF">
      <Navbar />
      <Hero />
      <Desc />
      <Session />
    </SEO>
  )
}

export default Internal
