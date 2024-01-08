import Image from 'next/image'

import vector1 from '@src/assets/IYREF/vector1.svg'
import vector2 from '@src/assets/IYREF/vector2.svg'
import butterfly from '@src/assets/IYREF/butterfly.svg'

const Session = (): JSX.Element => {
  return (
    <div className='font-montserrat bg-green8 relative h-auto flex flex-col justify-center items-center overflow-x-hidden py-[150px] px-[10vw] sm:px-[15vw]'>
      <div className='absolute right-0 top-0 justify-end flex w-[20vw]'>
        <Image src={vector2} alt="vector2" className=''/>
      </div>
      <h3 className="text-center text-[16px] xl:text-[20px] text-white">REFWON consists of two sessions, the first webinar discusses the development and future impact of renewable energy, while the second session focuses on developing soft skills for participating in paper-based competitions.</h3>
      <div className='absolute flex justify-center w-[20vw]'>
        <Image src={butterfly} alt="butterfly" className=''/>
      </div>
      <div className='absolute left-0 bottom-0 flex w-[20vw]'>
        <Image src={vector1} alt="vector1" className=''/>
      </div>
    </div>
  )
}

export default Session
