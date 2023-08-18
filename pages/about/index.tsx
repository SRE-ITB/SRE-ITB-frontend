import Navbar from '@src/components/Navigation/Navbar'
import History from '@src/contexts/About/History'
import VisionMission from '@src/contexts/About/VisionMission'
import OurTeam from '@src/contexts/About/OurTeam'
import Footer from '@src/components/Navigation/Footer'

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
