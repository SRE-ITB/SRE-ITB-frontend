import Image from 'next/image'
import React, { useState } from 'react'
import AlertBox from '@src/components/Alert/AlertBox'

import Header from '@src/assets/Images/Home/Hero/Header.webp'

const Hero = (): JSX.Element => {
  const [showAlert, setShowAlert] = useState(false)

  const handleJoinClick = (): void => {
    setShowAlert(true)
  }

  const handleConfirm = (): void => {
    setShowAlert(false)
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full'>
        <Image
          src={Header}
          alt='header'
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          className='z-[-50]'
        />
        <div className='w-full h-full opacity-75 bg-[#046669]'></div>
        <div className='absolute inset-0 justify-center items-center md:items-start flex flex-col md:ml-[15vw]'>
          <div className='font-montserrat text-center md:text-left text-white relative'>
            <h1 className='italic xl:text-[48px] md:text-[40px] text-[32px] font-bold leading-[40px] md:leading-[60px] animate__animated animate__fadeInUp'>
              Society Of<br />
              Renewable Energy
            </h1>
            <h2 className='italic xl:text-[24px] md:text-[22px] font-normal text-[20px] animate__animated animate__fadeInUp'>
              Institut Teknologi Bandung.
            </h2>
            <h3 className='italic font-normal text-[18px] mt-[30px] animate__animated animate__fadeInUp'>
              #RElevatingSREITB
            </h3>
            {/* INGET INI YG DIUBAH, KL EROR */}
            <div>
              <button
                onClick={handleJoinClick}
                className='font-extrabold mt-[50px] outline outline-2 text-[#FFFFFF] xl:text-[24px] md:text-[22px] text-[20px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer animate-bounce'
              >
                Join Us
              </button>
            </div>
            {showAlert && (
              <AlertBox isConfirm={false} content={'We’re sorry, registration for SRE ITB 2023/24 has been closed!'} onConfirm={handleConfirm} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
