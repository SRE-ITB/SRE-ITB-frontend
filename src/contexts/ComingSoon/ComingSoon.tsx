import React from 'react'

import Header from '@src/assets/Images/Comingsoon/header.webp'
import leaf from '@src/assets/Images/Comingsoon/leaf.png'

const Hero = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Header.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full' style={backgroundImageStyle}>
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
              <img src={leaf.src} alt="leaf-icon" className="w-[100px] h-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
