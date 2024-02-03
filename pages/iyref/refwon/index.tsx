import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/REFWON/Hero'
import Desc from '@src/contexts/IYREF/REFWON/Desc'
import Session from '@src/contexts/IYREF/REFWON/Session'
import Topics from '@src/contexts/IYREF/REFWON/Topics'
import Submission from '@src/contexts/IYREF/REFWON/Submission'
import Time from '@src/contexts/IYREF/REFWON/Time'
import Speakers from '@src/contexts/IYREF/REFWON/Speakers'
import Footer from '@src/components/Navigation/Footer'

const REFWONPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | REFWON">
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

export default REFWONPage
