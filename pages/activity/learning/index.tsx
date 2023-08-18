import Navbar from '@src/components/Navigation/Navbar'
import JumbotronLearning from '@src/contexts/Activity/Learning/Jumbotron'
import PastEvents from '@src/contexts/Activity/Learning/PastEvents'
import LastActivity from '@src/contexts/Activity/Learning/LastActivity'
import Footer from '@src/components/Navigation/Footer'

const Learning: React.FC = () => {
  return (
    <div className="h-auto relative">
        <Navbar />
        <JumbotronLearning />
        <PastEvents />
        <LastActivity />
        <Footer />
    </div>
  )
}

export default Learning
