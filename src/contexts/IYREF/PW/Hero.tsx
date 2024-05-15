import React from 'react'
import Image from 'next/image'
import Header from '@src/assets/Images/IYREF/PW/Hero/PW_hero.jpg'

const Hero = (): JSX.Element => {
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
                Policy Workshop<br />NEX STEP XChange 2024
            </h1>
            <h2 className='xl:text-[20px] md:text-[16px] text-[13px] px-[10vw] mt-[30px] animate__animated animate__fadeInUp'>
              <div className='font-bold'>
                &quot;Shaping West Java&apos;s Energy Transition Policies for a Sustainable Future&quot;
              </div>
              <br />
                Participants interact with their speakers via offline workshop sessions. The 2 speakers provide a forum for helpful criticism and recommendations during these focused sessions, such as &apos;Planning, progress, challenges, and opportunities of energy transition in various area.&apos; from ESDM, and &apos;How to develop the right policies so that the energy transition can be achieved while still prioritizing the no one left behind element&apos; from Koaksi.
              <br /><br />
                The four-session approach will thoroughly assess the concept, open discussion speaker to participants, participants only discussion and presentation, guaranteeing that participants receive interactive, focused direction and improvement for their competition experience.
              <br /><br />
                Time: 09.30 - 16.00 WIB
              <br />
                Location: Aula Sipil ITB Ganesha Bandung
            </h2>
            <div className="translate-y-[15px] flex justify-center">
              <a href={'http://cutt.ly/nexstep_workshop'} target='_blank' rel='noreferrer'>
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
