import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import JumbotronExternal from '@src/contexts/Activity/External/Jumbotron'
import PastEvents from '@src/contexts/Activity/External/PastEvents'
import LastActivity from '@src/contexts/Activity/External/LastActivity'
import Footer from '@src/components/Navigation/Footer'

const External: React.FC = () => {
  return (
    <SEO title="SRE ITB | External Program">
      <Navbar />
      <JumbotronExternal />
      <PastEvents />
      <LastActivity />
      <Footer />
    </SEO>
  )
}

export default External
