import React from 'react'
import Image from 'next/image'

import Header from '@src/assets/Images/IYREF/REFWON/Hero/Header.webp'

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
            <h1 className='xl:text-[80px] md:text-[65px] text-[50px] font-bold leading-[60px] animate__animated animate__fadeInUp'>
              REFWON
            </h1>
            <h2 className='xl:text-[22px] md:text-[19px] text-[15px] px-[10vw] mt-[2.5vw] animate__animated animate__fadeInUp'>
              Renewable Energy Festival Workshop and Hands-on
            </h2>
            <div className="translate-y-[10vw] flex justify-center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKr1TN4RVm5iEV9Qa9zwj41Qzmzd8NVdX3TyOd1BauY7rXjg/viewform" target="_blank" rel="noopener noreferrer">
                <button
                className='font-normal mt-[50px] outline outline-1 text-[#FFFFFF] xl:text-[20px] md:text-[18px] text-[16px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer animate-bounce'
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
