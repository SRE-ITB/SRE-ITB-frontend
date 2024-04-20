import React from 'react'
import Image from 'next/image'

import Header from '@src/assets/Images/ComingSoon/Header.webp'
import Leaf from '@src/assets/Images/Illustration/LeafWhite.png'

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
        <div className='w-full h-full opacity-50 bg-[#000000]'></div>
        <div className='absolute inset-0 justify-center items-center flex flex-col'>
          <div className='font-montserrat text-center text-white'>
            <h1 className='xl:text-[48px] md:text-[40px] text-[32px] font-bold leading-[60px] text-shadow white-text-shadow'>
              Exciting News Await
            </h1>
            <h2 className='xl:text-[22px] md:text-[19px] text-[15px] px-[10vw] mt-[2.5vw]'>
              We&apos;re cooking up something extraordinary behind the scenes. Stay tuned for a grand reveal that will redefine your experience. Our team is working tirelessly to bring you innovation, creativity, and a touch of magic.
            </h2>
            <div className="translate-y-[10vw] flex justify-center">
              <img src={Leaf.src} alt="leaf-icon" className="w-[100px] h-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
