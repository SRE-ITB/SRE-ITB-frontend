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
            The Company Visit, scheduled for March 15, 2024, encompasses two main events: the Company Seminar and the Company Tour, both conducted in-person. With a target participation of approximately 20 to 30 students, the number of attendees can be adjusted based on the policies of the hosting company. The Company Seminar aims to provide participants with an in-depth understanding of the industry and the visited company&apos;s vision. On the other hand, the Company Tour offers an exclusive opportunity for students to witness firsthand the company&apos;s operations, thereby enhancing their understanding of the working world. This event not only serves as an informational window into a specific industry but also provides valuable networking opportunities and broadens students&apos; perspectives on the professional sphere.
            </h2>
            <div className="translate-y-[15px] flex justify-center">
              <a href={''} target='_blank' rel='noreferrer'>
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
