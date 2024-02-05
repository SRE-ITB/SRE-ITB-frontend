import React from 'react'
import Image from 'next/image'

interface CompeHeroProps {
  title: any
  caption: string
  header: any
  buttonText: string
  linkRegister: string
}

const CompeHero = ({ title, caption, header, buttonText, linkRegister }: CompeHeroProps): JSX.Element => {
  return (
    <div className='h-screen flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full'>
        <Image
          src={header}
          alt='Header'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
        <div className='w-full h-full opacity-30 bg-[#000000]'></div>
        <div className='absolute inset-0 justify-center items-center flex flex-col'>
          <div className='font-montserrat text-center text-white'>
            <h1 className='xl:text-[48px] md:text-[38px] text-[28px] font-bold leading-[60px] animate__animated animate__fadeInUp'>
              {title}
            </h1>
            <h2 className='xl:text-[20px] md:text-[16px] text-[12px] px-[10vw] mt-[2.5vw] animate__animated animate__fadeInUp'>
              {caption}
            </h2>
            <div className="translate-y-[15px] flex justify-center">
              <a href={linkRegister} target="_blank" rel="noopener noreferrer">
                <button
                className='font-normal mt-[50px] outline outline-1 text-[#FFFFFF] xl:text-[20px] md:text-[18px] text-[16px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer animate-bounce'
                >
                  {buttonText}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompeHero
