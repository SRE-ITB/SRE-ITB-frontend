import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/Hero'
import Desc from '@src/contexts/IYREF/Desc'
import Session from '@src/contexts/IYREF/Session'
import Topics from '@src/contexts/IYREF/Topics'

const Internal: React.FC = () => {
  return (
    <SEO title="SRE ITB | IYREF">
      <Navbar />
      <Hero />
      <Desc />
      <Session />
      <Topics />
    </SEO>
  )
}

export default Internal
