import React from 'react'
import Image from 'next/image'
import Leaves from '@src/assets/Images/IYREF/Ongoing/leaves.svg'
import Leaves2 from '@src/assets/Images/IYREF/Ongoing/leaves2.svg'
import Birds from '@src/assets/Images/IYREF/Ongoing/birds.svg'
import Footer from '@src/assets/Images/Navigation/Footer/FooterIllustration.svg'

const Ongoing = (): JSX.Element => {
  return (
    <div className='font-monstserrat h-screen flex flex-col justify-center items-center overflow-x-hidden overflow-y-hidden bg-gradient'>
      <div className='w-full flex sm:mt-[15vw]'>
        <div className='mt-[10vw] ml-[10vw]'><Image src={Birds}/></div>
        <div className='ml-auto'><Image src={Leaves2} height={200}/></div>
      </div>
      <div className='text-white p-[5vw] bg-white bg-opacity-10 rounded-xl inline-block sm:mt-[-3vw]'>
        <div className='font-normal text-[24px] sm:text-[32px]'>On Going Events</div>
        <div className='font-medium text-[24px] sm:text-[36px] mt-[5vw]'>Business Plan Competition IYREF 2024</div>
      </div>
      <div className='w-full flex mt-[15vw] sm:mt-[-2vw]'>
        <div><Image src={Leaves} height={250}/></div>
        <div className='-rotate-[12deg] relative translate-x-[18vw] mt-[2vw]'><Image src={Footer}/></div>
      </div>
    </div>
  )
}

export default Ongoing
