import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import ThemeCard from '@src/components/Card/ThemeCard'
import FinalistCard from '@src/components/Card/FinalistCard'

import Bird1 from '@src/assets/Images/IYREF/Compe/Illustration/bird_1.svg'
import Bird2 from '@src/assets/Images/IYREF/Compe/Illustration/bird_2.svg'
import Leaves from '@src/assets/Images/IYREF/Compe/Illustration/Leaves.svg'
import Hexagon from '@src/assets/Images/IYREF/Compe/Events/Hexagon.svg'

interface ThemeProps {
  type: string
  theme: string
  themeDesc?: string
  subtheme?: string[]
  addText: string
  benefits: Array<{
    title: string
    contents?: string[]
  }>
}

const Theme = ({ type, theme, subtheme, addText, benefits, themeDesc }: ThemeProps): JSX.Element => {
  const router = useRouter()
  const page = router.pathname.split('iyref/')[1]

  return (
    <div className='relative font-montserrat h-auto flex flex-col justify-center items-center overflow-y-hidden'>
      <div className='relative w-full z-10 mt-20'>
        <div className='my-[50px] space-y-3 mx-[10vw]'>
          { page !== 'nsx'
            ? (
                <p className='text-green11 text-center text-[16px]'>
                  {type} IYREF 2024&apos;s THEME
                </p>
              )
            : (
                ''
              )
          }
          <h2 className='font-gradient text-[24px] lg:text-[30px] xl:text-[32px] text-center font-bold px-5 lg:px-0 leading-[30px] sm:leading-normal'>
            &quot;{theme}&quot;
          </h2>
          { page === 'nsx'
            ? (
                <h3 className='text-center font-semibold text-[16px]'>
                  {themeDesc}
                </h3>
              )
            : (
                ''
              )
          }
        </div>
        <div className='flex-wrap flex mt-[10px] justify-center mb-[5vw] mx-[10vw] z-10'>
          { subtheme?.map((text: string, index: React.Key | null | undefined) => (
            <ThemeCard key={index} text={text} />
          ))}
        </div>
        <div className="w-[300px] bottom-0 absolute left-0 z-[-5]">
          <Image src={Leaves} alt="leaves" className="" />
        </div>
        <div className="w-[250px] hidden lg:block bottom-0 right-[70px] absolute z-[-5]">
          <Image src={Bird1} alt="bird1" className="" />
        </div>
      </div>
      <div className='space-y-5 mb-[80px] lg:mb-[100px] z-10 mt-[5vw] mx-[5vw]'>
          <h2 className='text-green11 text-center text-[20px] md:text-[28px] lg:text-[32px] font-bold'>
              Total Competition Prize Up To
          </h2>
          <p className='font-gradient text-[48px] md:text-[72px] lg:text-[96px] text-center font-bold leading-[50px] sm:leading-normal'>
              {page === 'nsx' ? 'IDR 14.000.000' : 'IDR 30.000.000'}
          </p>
      </div>
      <div className='mb-[100px] lg:mb-[300px] px-[5vw] w-full relative'>
        <div className='mb-[20px]'>
          <p className='text-green11 text-[16px] text-center'>
            {addText}
          </p>
        </div>
        <div className={`gap-5 ${benefits.some(benefit => benefit.contents && benefit.contents.length > 0) ? 'flex-wrap flex justify-center' : 'mx-[10vw] flex flex-col'}`}>
          {benefits.map((benefit: { title: string, contents?: string[] }, index: React.Key | null | undefined) => (
            benefit.contents && benefit.contents.length > 0
              ? (
              <FinalistCard key={index} title={benefit.title} contents={benefit.contents} />
                )
              : (
                <div className='w-auto py-5 bg-white border-[2px] border-green9 px-[25px] rounded-2xl text-center flex justify-center items-center drop-shadow-green'>
                  {benefit.title}
                </div>
                )
          ))}
          <div className="w-[280px] hidden lg:flex justify-end bottom-0 right-[10vw] absolute z-[-5]">
            <Image src={Hexagon} alt="hexagon" className="" />
          </div>
        </div>
      </div>
      <div className="w-[70px] lg:w-[340px] bottom-[5vw] left-[20vw] absolute">
        <Image src={Bird2} alt="bird2" className="" />
      </div>
    </div>
  )
}

export default Theme
