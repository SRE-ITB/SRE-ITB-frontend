import Jumbroton from "@src/contexts/Jumbroton/Jumbroton"
import Description from "@src/contexts/Description/Description"
const Landing: React.FC = () => {
  return (
    <div className='h-screen relative font-[Montserrat-Bold]'>
      <Jumbroton/>
      <Description/>
    </div>
  )
}

export default Landing
