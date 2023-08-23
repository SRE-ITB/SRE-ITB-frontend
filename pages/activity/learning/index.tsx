import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import JumbotronLearning from '@src/contexts/Activity/Learning/Jumbotron'
import PastEvents from '@src/contexts/Activity/Learning/PastEvents'
import LastActivity from '@src/contexts/Activity/Learning/LastActivity'
import Footer from '@src/components/Navigation/Footer'

const Learning: React.FC = () => {
  return (
    <SEO title="SRE ITB | Learning Program">
      <Navbar />
      <JumbotronLearning />
      <PastEvents />
      <LastActivity />
      <Footer />
    </SEO>
  )
}

export default Learning
