import Image from 'next/image'

import LampuTangan from '@src/assets/AssetsV2/LampuTangan.svg'
import Map from '@src/assets/AssetsV2/LandingPage/SreMapLarge.svg'

const HomeBanner = () => {
  return (
    <div className='bg-gradient h-[650px] md:h-[400px] lg:h-[500px] py-16 mt-4 mb-[100px] flex items-center justify-center'>
      <div className='flex flex-col md:flex-row-reverse md:justify-center md:items-start w-full justify-start gap-y-8'>
        <div className='w-full items-center flex justify-center'>
          <Image 
            src={Map}
            alt="Map SRE Indonesia lg:mr-[250px]"
            width={512}
            height={300}
          />
        </div>
        <div className='w-full'>
          <Image 
            src={LampuTangan}
            alt="Lampu SRE"
            className='w-full'
          />
        </div>
      </div>
      <div 
        className='bg-green7 text-center absolute rounded-full text-white font-montserrat px-12 py-2 translate-y-[-265px] md:translate-y-[-145px] left-12 md:left-[400px] lg:left-[550px] xl:left-[750px]'
        style={{ boxShadow: "2px 4px 25px rgb(0,0,0,0.25)"}}
      >
        <p className='text-[10px] md:text-[12px] lg:text-[16px]'>With More Than</p>
        <p className='md:text-[16px] lg:text-xl text-[12px] font-bold'>2000+ Members</p>
      </div>
      <div 
        className='bg-green7 text-center absolute right-12 rounded-full text-white font-montserrat px-8 py-2 translate-y-[-65px] md:translate-y-[75px]'
        style={{ boxShadow: "2px 4px 25px rgb(0,0,0,0.25)"}}
      >
        <p className='text-[10px] md:text-[12px] lg:text-[16px]'>We are currently spread across</p>
        <p className='md:text-[16px] lg:text-xl text-[12px] font-bold'>40+ Universites</p>
      </div>
    </div>
  )
}

export default HomeBanner