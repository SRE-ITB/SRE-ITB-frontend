import React from 'react'
import Image from 'next/image'

import Header from '@src/assets/Images/IYREF/Hero/Header.webp'

const Hero = (): JSX.Element => {
  return (
    <div className='h-screen flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full'>
        <Image
          src={Header}
          alt='Header'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
        <div className='w-full h-full opacity-30 bg-[#000000]'></div>
        <div className='absolute inset-0 justify-center items-center flex flex-col'>
          <div className='font-montserrat text-center text-white'>
            <h1 className='xl:text-[80px] md:text-[65px] text-[50px] font-bold leading-[60px]'>
              REFWON
            </h1>
            <h2 className='xl:text-[22px] md:text-[19px] text-[15px] px-[10vw] mt-[2.5vw]'>
              Renewable Energy Festival Workshop and Hands-on
            </h2>
            <div className="translate-y-[10vw] flex justify-center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJoGWnY4bzPAk-bNoB6wXIWBgcMNWxgoPUSl1KSbwZsb4-Sw/viewform" target="_blank" rel="noopener noreferrer">
                <button
                className='font-normal mt-[50px] outline outline-1 text-[#FFFFFF] xl:text-[20px] md:text-[18px] text-[16px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer'
                >
                  Register
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
