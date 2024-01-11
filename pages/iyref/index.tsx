import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/Hero'
import Desc from '@src/contexts/IYREF/Desc'
import Session from '@src/contexts/IYREF/Session'
import Topics from '@src/contexts/IYREF/Topics'
import Submission from '@src/contexts/IYREF/Submission'
import Time from '@src/contexts/IYREF/Time'
import Speakers from '@src/contexts/IYREF/Speakers'
import Footer from '@src/components/Navigation/Footer'

const Internal: React.FC = () => {
  return (
    <SEO title="SRE ITB | IYREF">
      <Navbar />
      <Hero />
      <Desc />
      <Session />
      <Topics />
      <Submission />
      <Time />
      <Speakers />
      <Footer />
    </SEO>
  )
}

export default Internal
