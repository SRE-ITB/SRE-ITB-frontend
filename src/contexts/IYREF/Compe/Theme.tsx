import React from 'react'
import Image from 'next/image'

import ThemeCard from '@src/components/Card/ThemeCard'
import FinalistCard from '@src/components/Card/FinalistCard'

import Bird1 from '@src/assets/Images/IYREF/Compe/Events/bird_1.svg'
import Bird2 from '@src/assets/Images/IYREF/Compe/Events/bird_2.svg'
import Leaves from '@src/assets/Images/IYREF/Compe/transparent_leaves.png'
import Hexagon from '@src/assets/Images/IYREF/Compe/Hexagon.png'

interface ThemeProps {
  type: string
  theme: string
  subtheme?: string[]
  addText: string
  benefits: Array<{
    title: string
    contents?: string[]
  }>
}

const Theme = ({ type, theme, subtheme, addText, benefits }: ThemeProps): JSX.Element => {
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
      <div>
        <div className='my-[50px] space-y-3'>
          <h2 className='text-green11 text-center text-[16px]'>
            {type} IYREF 2024&apos;s THEME
          </h2>
          <p className='font-gradient text-[24px] lg:text-[30px] xl:text-[32px] text-center font-bold px-5 lg:px-0'>
            &quot;{theme}&quot;
          </p>
        </div>
        <div className='grid grid-cols-3 flex-wrap mt-[10px] gap-10 lg:gap-0 items-center justify-center mb-[180px] lg:mb-[300px]'>
          { subtheme?.map((text: string, index: React.Key | null | undefined) => (
            <ThemeCard key={index} text={text} />
          ))}
        </div>
      </div>
      <div className='space-y-10 mb-[80px] lg:mb-[100px] z-10 mt-[200px] lg:mt-[100px]'>
          <h2 className='text-green11 text-center text-[24px] md:text-[28px] lg:text-[32px] font-bold'>
              Total Competition Prize Up To
          </h2>
          <p className='font-gradient text-[48px] md:text-[72px] lg:text-[96px] text-center font-bold'>
              IDR 30.000.000
          </p>
      </div>
      <div className='mb-[100px] lg:mb-[300px]'>
        <div className='mb-[20px]'>
          <p className='text-green11 text-[16px] text-center px-[25px]'>
            {addText}
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-5 justify-center items-center'>
        {benefits.map((benefit: { title: string, contents?: string[] }, index: React.Key | null | undefined) => (
          benefit.contents && benefit.contents.length > 0
            ? (
            <FinalistCard key={index} title={benefit.title} contents={benefit.contents} />
              )
            : (
              <div className='h-[75px] w-auto bg-white border-[2px] border-green9 px-[25px] rounded-2xl text-center flex justify-center items-center drop-shadow-green'>
                {benefit.title}
              </div>
              )
        ))}
        </div>
      </div>
    </div>
  )
}

export default Theme
