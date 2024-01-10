import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import Header from '@src/assets/Images/Activity/Hero/Header.png'

const Hero = (): JSX.Element => {
  const handleScroll = (sectionId: string): void => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: 'smooth'
      })
    }
  }

  const [isWideScreen, setIsWideScreen] = useState(false)
  useEffect(() => {
    function handleResize (): void {
      setIsWideScreen(window.innerWidth > 540)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='h-screen flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full'>
        <Image
          src={Header}
          alt='Our Program'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
        <div className='w-full h-full opacity-50 bg-[#000000]'></div>
        <div className='absolute inset-0 justify-center items-center md:items-start flex flex-col md:ml-[15vw]'>
          <div className='font-montserrat text-center md:text-left text-white sm:px-0 px-[6vw]'>
            <h1 className='italic xl:text-[48px] md:text-[40px] text-[32px] font-bold leading-[60px]'>
              Our Program
            </h1>
            <h2 className='italic xl:text-[24px] md:text-[22px] font-normal text-[20px]'>
              {isWideScreen
                ? (
                <>
                  Welcome to a new world, SRE invites you to<br />
                  keep update for amazing event.
                </>
                  )
                : (
                    'Welcome to a new world, SRE invites you to keep update for amazing event.'
                  )}
            </h2>
            <h3 className='italic font-normal text-[18px] mt-[30px]'>
              #RElevatingSREITB
            </h3>
            <button
              className='font-extrabold mt-[50px] bg-[#169470] text-[#FFFFFF] xl:text-[24px] md:text-[22px] text-[20px] px-[50px] py-[5px] rounded-full hover:outline hover:outline-3 transition-all cursor-pointer'
              onClick={() => handleScroll('internalProgram')}
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
