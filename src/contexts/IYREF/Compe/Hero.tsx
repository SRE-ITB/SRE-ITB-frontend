import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

interface HeroProps {
  title: string
  desc: string
  background: StaticImageData
  linkRegister: string
}

const Hero = ({ title, desc, background, linkRegister }: HeroProps): JSX.Element => {
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

  const router = useRouter()
  const page = router.pathname.split('iyref/')[1]

  return (
    <div className='h-screen flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full'>
        <Image
          src={background}
          alt='Background'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
        <div className='w-full h-full opacity-30 bg-[#000000]'></div>
        <div className='absolute inset-0 justify-center items-center flex flex-col'>
          <div className='font-montserrat text-center text-white'>
            <h1 className='xl:text-[48px] md:text-[38px] text-[28px] font-bold leading-[40px] md:leading-[60px] px-5 animate__animated animate__fadeInUp'>
            {
              isWideScreen
                ? (
                <>
                  {title}<br />{page === 'nsx' ? 'IYREF 2024 x New Energy Nexus Indonesia' : 'IYREF 2024'}
                </>
                  )
                : (
                <>
                  {title} <br /> {page === 'nsx' ? 'IYREF 2024 x New Energy Nexus Indonesia' : 'IYREF 2024'}
                </>
                  )
            }
            </h1>
            <h2 className='xl:text-[20px] md:text-[16px] text-[13px] px-[10vw] mt-[30px] animate__animated animate__fadeInUp'>
              {desc}
            </h2>
            <div className="translate-y-[15px] flex flex-col justify-center">
              <a href={linkRegister} target='_blank' rel='noreferrer'>
                <button
                className='font-normal mt-[50px] outline outline-1 text-[#FFFFFF] xl:text-[20px] md:text-[18px] text-[16px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer animate-bounce'
                >
                  Join Now {page === 'bpc' ? '(FREE)' : ''}
                </button>
              </a>
              { page === 'bcc' && (
                <a href='https://bit.ly/WebinarBCCIYREF2024' target='_blank' rel='noreferrer'>
                  <button
                  className='font-normal mt-[10px] outline outline-1 text-[#FFFFFF] xl:text-[20px] md:text-[18px] text-[16px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer'
                  >
                    Join Webinar
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
