import React from 'react'
import Image from 'next/image'
import ThemeCard from '@src/components/Card/ThemeCard'
import FinalistCard from '@src/components/Card/FinalistCard'
import FinalistContentCard from '@src/components/Card/FinalistContentCard'
import ThemeComp from '@src/contexts/IYREF/Compe/ThemeComp'
import FinalistComp from '@src/contexts/IYREF/Compe/FinalistComp'

import Bird1 from '@src/assets/Images/IYREF/Compe/Events/bird_1.svg'
import Bird2 from '@src/assets/Images/IYREF/Compe/Events/bird_2.svg'
import Leaves from '@src/assets/Images/IYREF/Compe/transparent_leaves.png'
import Hexagon from '@src/assets/Images/IYREF/Compe/Hexagon.png'

const Theme = (): JSX.Element => {
  return (
    <div className='font-montserrat h-auto flex flex-col justify-center items-center overflow-x-hidden mt-[100px] lg:mt-[200px]'>
        <div className="w-[250px] hidden lg:block top-[1320px] right-[230px] absolute">
            <Image src={Bird1} alt="bird1" className="" />
        </div>
        <div className="w-[300px] top-[1500px] lg:top-[1320px] absolute left-0 z-0">
            <Image src={Leaves} alt="leaves" className="" />
        </div>
        <div className="w-[280px] hidden lg:block top-[1800px] right-[100px] absolute">
            <Image src={Hexagon} alt="hexagon" className="" />
        </div>
        <div className="w-[70px] lg:w-[340px] top-[2820px] lg:top-[2380px] lg:left-[80px] absolute">
            <Image src={Bird2} alt="bird2" className="" />
        </div>
        <ThemeComp
            title='NEC IYREF 2024&apos;s THEME'
            text='&quot;The Role of Youth in Advancing Renewable Energy Initiatives&quot;'
            content={
                <div className='flex flex-col lg:flex-row mt-[10px] gap-10 lg:gap-0 items-center justify-center mb-[180px] lg:mb-[300px]'>
                    <ThemeCard
                    text='Energy Intermittency'
                    />
                    <ThemeCard
                    text='Inclusivity in Energy Access'
                    />
                    <ThemeCard
                    text='Integration of Renewable Energy in Youth Curriculum'
                    />
                </div>
            }
        />
        <div className='space-y-10 mb-[80px] lg:mb-[100px] z-10'>
            <h2 className='text-green11 text-center text-[24px] md:text-[28px] lg:text-[32px] font-bold'>
                Total Competition Prize Up To
            </h2>
            <p className='font-gradient text-[48px] md:text-[72px] lg:text-[96px] text-center font-bold'>
                IDR 30.000.000
            </p>
        </div>
        <FinalistComp
        text='All competition participants are eligible for a complimentary review of their abstract by professional judges'
        content={
            <div className='flex flex-col lg:flex-row gap-5 justify-center items-center'>
                <FinalistCard
                title='For Top 50 finalist'
                content={
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <FinalistContentCard
                        text = "FREE Webinar Session : How To Write an Essay"
                        />
                        <FinalistContentCard
                        text = "E-Certificates for all participants"
                        />
                    </div>
                }
                />
                <FinalistCard
                title='For Top 5 finalist'
                content={
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <FinalistContentCard
                        text = "All Top 50&apos;s Benefits"
                        />
                        <FinalistContentCard
                        text = "EXCLUSIVE Coaching Session : How To Pitch"
                        />
                    </div>
                }
                />
            </div>
        }
        />
    </div>
  )
}

export default Theme
