import Image from 'next/image'

import Vector1 from '@src/assets/Images/IYREF/Session/Vector1.svg'
import Vector2 from '@src/assets/Images/IYREF/Session/Vector2.svg'
import Butterfly from '@src/assets/Images/IYREF/Session/Butterfly.svg'

const Session = (): JSX.Element => {
  return (
    <div className='font-montserrat bg-green8 relative h-auto flex flex-col justify-center items-center overflow-x-hidden py-[150px] px-[10vw] sm:px-[15vw]'>
      <div className='absolute right-0 top-0 justify-end flex w-[20vw]'>
        <Image src={Vector2} alt="vector2" className=''/>
      </div>
      <h3 className="text-center text-[16px] xl:text-[20px] text-white">REFWON consists of two sessions, the first webinar discusses the development and future impact of renewable energy, while the second session focuses on developing soft skills for participating in paper-based competitions.</h3>
      <div className='absolute flex justify-center w-[20vw]'>
        <Image src={Butterfly} alt="butterfly" className=''/>
      </div>
      <div className='absolute left-0 bottom-0 flex w-[20vw]'>
        <Image src={Vector1} alt="vector1" className=''/>
      </div>
    </div>
  )
}

export default Session
