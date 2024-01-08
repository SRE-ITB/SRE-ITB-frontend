import Image from 'next/image'

import plant from '@src/assets/IYREF/plant.svg'

const Desc = (): JSX.Element => {
  return (
    <div className='font-montserrat relative h-auto flex flex-col justify-center items-center overflow-x-hidden py-[150px] px-[10vw] sm:px-[15vw]'>
      <div className='w-[25vw] sm:w-[15vw] z-[-10] bottom-0 right-[-6vw] sm:right-[-4vw] absolute flex'>
        <Image src={plant} alt="plant" className=''/>
      </div>
      <h2 className="text-green8 text-[24px] md:text-[36px] xl:text-[48px] font-bold text-center mb-[20px]">What is REFWON?</h2>
      <h3 className="text-center text-[16px] xl:text-[20px]">REFWON (Renewable Energy Festival Workshop and Hands-on) is a bold event held via Zoom Meeting</h3>
    </div>
  )
}

export default Desc
