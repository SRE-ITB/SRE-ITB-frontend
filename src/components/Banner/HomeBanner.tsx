import Image from 'next/image'

import LampuTangan from '@src/assets/AssetsV2/LampuTangan.svg'
import Map from '@src/assets/AssetsV2/LandingPage/SreMap.svg'

const HomeBanner = (): JSX.Element => {
  return (
    <div className='mb-12 bg-gradient h-90vh md:h-fit flex items-center justify-center'>
      <div className='flex flex-col md:flex-row-reverse md:justify-center w-full justify-start gap-y-8 items-start md:items-center py-[50px] md:py-[80px]'>
        <div className='md:w-3/4 w-full items-center flex justify-center relative'>
          <div
            className='z-10 top-[-30px] ml-[5vw] bg-green7 text-center absolute rounded-full text-white font-montserrat px-12 py-2 left-0'
            style={{ boxShadow: '2px 4px 25px rgb(0,0,0,0.25)' }}
          >
            <p className='text-[10px] md:text-[12px] lg:text-[16px]'>With More Than</p>
            <p className='md:text-[16px] lg:text-xl text-[12px] font-bold'>2000+ Members</p>
          </div>
          <Image
            src={Map}
            alt="Map SRE Indonesia"
          />
          <div
            className='z-10 bottom-[-30px] mr-[5vw] bg-green7 text-center absolute right-0 rounded-full text-white font-montserrat px-8 py-2'
            style={{ boxShadow: '2px 4px 25px rgb(0,0,0,0.25)' }}
          >
            <p className='text-[10px] md:text-[12px] lg:text-[16px]'>We are currently spread across</p>
            <p className='md:text-[16px] lg:text-xl text-[12px] font-bold'>40+ Universites</p>
          </div>
        </div>
        <div className='md:w-1/4 w-1/2'>
          <Image
            src={LampuTangan}
            alt="Lampu SRE"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
