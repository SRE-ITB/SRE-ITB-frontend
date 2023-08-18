import Navbar from '@src/components/Navigation/Navbar'
import JumbotronProject from '@src/contexts/Activity/Project/Jumbotron'
import PastEvents from '@src/contexts/Activity/Project/PastEvents'
import LastActivity from '@src/contexts/Activity/Project/LastActivity'
import Footer from '@src/components/Navigation/Footer'

const Internal: React.FC = () => {
  return (
    <div className="h-auto relative">
      <Navbar />
      <JumbotronProject />
      <PastEvents />
      <LastActivity />
      <Footer />
    </div>
  )
}

export default Internal
