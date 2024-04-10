import React from 'react'
import Image from 'next/image'
import Header from '@src/assets/Images/IYREF/CEOTalks/Hero/Header.png'

const Hero = (): JSX.Element => {
  return (
    <div className='h-screen flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full'>
        <Image
          src={Header}
          alt='Background'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
        <div className='w-full h-full opacity-30 bg-[#000000]'></div>
        <div className='absolute inset-0 justify-center items-center flex flex-col'>
          <div className='font-montserrat text-center text-white'>
            <h1 className='xl:text-[48px] md:text-[38px] text-[28px] font-bold leading-[40px] md:leading-[60px] animate__animated animate__fadeInUp'>
                CEOTalks
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
