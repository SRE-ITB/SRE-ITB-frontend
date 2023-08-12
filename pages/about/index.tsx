import Navbar from '@src/components/Navbar/Navbar'
import History from '@src/contexts/About/History/History'
import VisionMission from '@src/contexts/About/VisionMission/VisionMission'
import OurTeam from '@src/contexts/About/OurTeam/OurTeam'
import Footer from '@src/components/Footer/Footer'

const Landing: React.FC = () => {
  return (
    <div className="h-auto relative">
      <Navbar />
      <History />
      <VisionMission />
      <OurTeam />
      <Footer />
    </div>
  )
}

export default Landing
