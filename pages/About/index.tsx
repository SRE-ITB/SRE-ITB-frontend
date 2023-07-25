import Navbar from '@src/components/Navbar/Navbar'
import History from '@src/contexts/About/History/History'
import VisionMission from '@src/contexts/About/VisionMission/VisionMission'
import Footer from '@src/components/Footer/Footer'

const Landing: React.FC = () => {
  return (
    <div className="h-auto relative">
      <Navbar />
      <History />
      <VisionMission />
      <Footer />
    </div>
  )
}

export default Landing
