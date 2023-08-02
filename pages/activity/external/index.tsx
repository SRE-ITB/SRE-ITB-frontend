import Navbar from '@src/components/Navbar/Navbar'
import JumbotronExternal from '@src/contexts/Activity/External/JumbotronExternal'
import Carousel from '@src/contexts/Activity/External/Activity'
import LastActivity from '@src/contexts/Activity/External/LastActivity'
import Footer from '@src/components/Footer/Footer'

const External: React.FC = () => {
  return (
    <div className="h-auto relative">
        <Navbar />
        <JumbotronExternal />
        <Carousel />
        <LastActivity />
        <Footer />
    </div>
  )
}

export default External
