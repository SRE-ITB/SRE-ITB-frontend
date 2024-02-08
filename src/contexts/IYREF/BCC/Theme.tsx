import React from 'react'
import Image from 'next/image'
import ThemeComp from '@src/contexts/IYREF/Compe/ThemeComp'
import FinalistComp from '@src/contexts/IYREF/Compe/FinalistComp'

import Bird1 from '@src/assets/Images/IYREF/Compe/Events/bird_1.svg'
import Bird2 from '@src/assets/Images/IYREF/Compe/Events/bird_2.svg'
import Leaves from '@src/assets/Images/IYREF/Compe/transparent_leaves.png'
import Hexagon from '@src/assets/Images/IYREF/Compe/Hexagon.png'

const Theme = (): JSX.Element => {
  return (
    <div className='font-montserrat h-auto flex flex-col justify-center items-center overflow-x-hidden mt-[100px] lg:mt-[200px]'>
        <div className="w-[250px] hidden lg:block top-[750px] right-[70px] absolute">
            <Image src={Bird1} alt="bird1" className="" />
        </div>
        <div className="w-[300px] top-[1000px] lg:top-[750px] absolute left-0 z-0">
            <Image src={Leaves} alt="leaves" className="" />
        </div>
        <div className="w-[280px] hidden lg:block top-[1420px] right-[100px] absolute">
            <Image src={Hexagon} alt="hexagon" className="" />
        </div>
        <div className="w-[70px] lg:w-[340px] top-[1820px] lg:top-[1950px] lg:left-[80px] absolute">
            <Image src={Bird2} alt="bird2" className="" />
        </div>
        <ThemeComp
            title='BCC IYREF 2024&apos;s THEME'
            text='&quot;Innovation to Reach The Implementation of Renewable Energies in Industry 5.0&quot;'
            content= {null}
        />
        <div className='space-y-10 mb-[80px] lg:mb-[100px] z-10 mt-[200px] lg:mt-[100px]'>
            <h2 className='text-green11 text-center text-[24px] md:text-[28px] lg:text-[32px] font-bold'>
                Total Competition Prize Up To
            </h2>
            <p className='font-gradient text-[48px] md:text-[72px] lg:text-[96px] text-center font-bold'>
                IDR 30.000.000
            </p>
        </div>
        <FinalistComp
        text='Register for FREE and Enjoy the Benefits'
        content={
            <div className='flex flex-col gap-5 font-medium font-montserrat text-[12px] md:text-[15px] lg:text-[20px] text-green11 mx-[25px]'>
                <div className='h-[75px] w-auto bg-white border-[2px] border-green9 px-[25px] rounded-2xl text-center flex justify-center items-center drop-shadow-green'>
                    FREE WEBINAR “Navigating BCC Strategies for Successful Pitch Deck Development”
                </div>
                <div className='h-[75px] w-auto bg-white border-[2px] border-green9 px-[25px] rounded-2xl text-center flex justify-center items-center drop-shadow-green'>
                    2 EXCLUSIVE COACHING SESSIONS
                </div>
                <div className='h-[75px] w-auto bg-white border-[2px] border-green9 px-[25px] rounded-2xl text-center flex justify-center items-center drop-shadow-green'>
                    E-CERTIFICATES FOR ALL PARTICIPANTS
                </div>
            </div>
        }
        />
    </div>
  )
}

export default Theme
