import Navbar from '@src/components/Navbar/Navbar'
import JumbotronProject from '@src/contexts/Activity/Project/JumbotronProject'
import PastEvents from '@src/contexts/Activity/Internal/PastEvents'
import LastActivity from '@src/contexts/Activity/Internal/LastActivity'
import Footer from '@src/components/Footer/Footer'

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
