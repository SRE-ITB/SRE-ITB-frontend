<<<<<<< HEAD
import Jumbroton from "@src/contexts/Jumbroton/Jumbroton"
import Description from "@src/contexts/Description/Description"
const Landing: React.FC = () => {
  return (
    <div className='h-screen relative font-[Montserrat-Bold]'>
      <Jumbroton/>
      <Description/>
=======
import Youtube from '@src/components/Youtube/Youtube'
import Footer from '@src/components/Footer/Footer'

const Landing: React.FC = () => {
  return (
    <div className="h-auto relative">
      <Youtube />
      <Footer />
>>>>>>> 98c97611fdb56201a82914c889b5084e4c96e112
    </div>
  )
}

export default Landing
