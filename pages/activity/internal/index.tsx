import Navbar from '@src/components/Navigation/Navbar'
import JumbotronInternal from '@src/contexts/Activity/Internal/Jumbotron'
import PastEvents from '@src/contexts/Activity/Internal/PastEvents'
import LastActivity from '@src/contexts/Activity/Internal/LastActivity'
import Footer from '@src/components/Navigation/Footer'

const Internal: React.FC = () => {
  return (
    <div className="h-auto relative">
      <Navbar />
      <JumbotronInternal />
      <PastEvents />
      <LastActivity />
      <Footer />
    </div>
  )
}

export default Internal
