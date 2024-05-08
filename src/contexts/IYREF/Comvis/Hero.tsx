import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Header from '@src/assets/Images/IYREF/Comvis/Hero/Header.png'

const Hero = (): JSX.Element => {
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
          alt='Background'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
        <div className='w-full h-full opacity-30 bg-[#000000]'></div>
        <div className='absolute inset-0 justify-center items-center flex flex-col'>
          <div className='font-montserrat text-center text-white'>
            <h1 className='xl:text-[48px] md:text-[38px] text-[28px] font-bold leading-[40px] md:leading-[60px] animate__animated animate__fadeInUp'>
            {
              isWideScreen
                ? (
                <>
                  Company Visit IYREF 2024
                </>
                  )
                : (
                <>
                  Company Visit<br />IYREF 2024
                </>
                  )
            }
            </h1>
            <h2 className='xl:text-[20px] md:text-[16px] text-[13px] px-[10vw] mt-[30px] animate__animated animate__fadeInUp'>
              Company Visit is one of Integrated Youth Renewable Energy Festival (IYREF) 2024 events, where participant will get the chance to visit a renewable energy related company to learn more knowledge about renewable energy and alot more  from a real company.
              <br />
              <br />
              By Participating in this Company Visit, participants will escalate their knowledge about Renewable Energy, increase their networking with Professionals, getting a chance to attend Seminar held by SUN Energy, getting an experience inside a renewable energy Company.
            </h2>
            <div className="translate-y-[15px] flex justify-center">
              <a href={'https://docs.google.com/forms/d/e/1FAIpQLSdaExMF_VpL6CwqAcMZHOtFt-vvW2OGqY2yuTk7oHFv_JJgsA/viewform'} target='_blank' rel='noreferrer'>
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
