import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/CEOTalks/Hero'
import About from '@src/contexts/IYREF/CEOTalks/About'
import Session from '@src/contexts/IYREF/CEOTalks/Session'

const CEOTalksPage = (): JSX.Element => {
  return (
    <SEO title="IYREF ITB | CEOTalks">
      <Navbar />
      <Hero />
      <About />
      <Session />
    </SEO>
  )
}

export default CEOTalksPage
