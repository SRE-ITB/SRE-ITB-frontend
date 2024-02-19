import React from 'react'
import Image from 'next/image'
import Pot from '@src/assets/Images/IYREF/Comvis/Benefits/Pot.svg'
import Plant from '@src/assets/Images/IYREF/Comvis/Benefits/Plant.svg'
import Bird from '@src/assets/Images/IYREF/Comvis/Benefits/bird_2.svg'

const Benefits = (): JSX.Element => {
  return (
    <div className='font-monstserrat relative h-auto flex flex-col justify-center items-center overflowx-x-hidden py-[150px] px-[10vw] sm:px-[15vw]'>
      <div>
        <Image src={Bird} alt="bird"/>
      </div>
      <h2 className="text-[24px] md:text-[36px] xl:text-[44px] text-center pb-[50px] font-extrabold mt-[80px] font-gradient">
        What Will You Get After Company Visit?
      </h2>
      <div className='border-2 bg-white border-green8 rounded-lg mb-[3vw] shadow-xl w-full'>
        <h4 className='p-[20px] text-[17px] md:text-[18px] xl:text-[20px] text-center text-green11'>
            Diverse Connections : Forge new relationships, explore varied environments.
        </h4>
      </div>
      <div className='border-2 bg-white border-green8 rounded-lg mb-[3vw] shadow-xl w-full'>
        <h4 className='p-[20px] text-[17px] md:text-[18px] xl:text-[20px] text-center text-green11'>
            Industry Immersion : Learn by directly experiencing and observing the industry.
        </h4>
      </div>
      <div className='border-2 bg-white border-green8 rounded-lg mb-[5vw] shadow-xl w-full mb-[150px]'>
        <h4 className='p-[20px] text-[17px] md:text-[18px] xl:text-[20px] text-center text-green11'>
            Portfolio Enrichment : Engage in intriguing activities to enhance your portfolio.
        </h4>
      </div>
      <div className='absolute bottom-0 md:bottom-[-80px] md:left-[-195px] z-[-50] w-[330px] md:w-[450px] lg:w-[510px]'>
        <Image src={Pot} alt="pot" />
      </div>
      <div className='absolute hidden md:block bottom-[150px] z-[-50] right-0 w-[280px] overflow-hidden'>
        <Image src={Plant} alt="plant" />
      </div>
    </div>
  )
}

export default Benefits
