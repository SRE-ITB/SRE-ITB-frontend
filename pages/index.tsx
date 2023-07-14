import Jumbroton from '@src/contexts/Jumbroton/Jumbroton'
import Description from '@src/contexts/Description/Description'
import Youtube from '@src/contexts/Youtube/Youtube'
import Footer from '@src/components/Footer/Footer'

const Landing: React.FC = () => {
  return (
    <div className="h-auto relative">
      <Jumbroton />
      <Description />
      <Youtube />
      <Footer />
    </div>
  )
}

export default Landing
