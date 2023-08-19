import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import JumbotronInternal from '@src/contexts/Activity/Internal/Jumbotron'
import PastEvents from '@src/contexts/Activity/Internal/PastEvents'
import LastActivity from '@src/contexts/Activity/Internal/LastActivity'
import Footer from '@src/components/Navigation/Footer'

const Internal: React.FC = () => {
  return (
    <SEO title="SRE ITB | Internal Program">
      <Navbar />
      <JumbotronInternal />
      <PastEvents />
      <LastActivity />
      <Footer />
    </SEO>
  )
}

export default Internal
