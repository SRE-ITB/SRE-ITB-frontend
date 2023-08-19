import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import JumbotronProject from '@src/contexts/Activity/Project/Jumbotron'
import PastEvents from '@src/contexts/Activity/Project/PastEvents'
import LastActivity from '@src/contexts/Activity/Project/LastActivity'
import Footer from '@src/components/Navigation/Footer'

const Internal: React.FC = () => {
  return (
    <SEO title="SRE ITB | Project">
      <Navbar />
      <JumbotronProject />
      <PastEvents />
      <LastActivity />
      <Footer />
    </SEO>
  )
}

export default Internal
