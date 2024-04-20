import React from 'react'
import Image from 'next/image'
import hero from '@src/assets/Images/IYREF/REParty/hero.jpg'

const Hero = (): JSX.Element => {
  return (
    <div className='font-monstserrat justify-center items-center text-center text-white'>
      <Image src={hero} alt="hero" className='h-[40vh] w-full'/>
      <p className='absolute inset-0 flex justify-center items-center font-bold text-[28px] sm:font-extrabold sm:text-[48px] h-[40vh]'>REParty</p>
    </div>
  )
}

export default Hero
