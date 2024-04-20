import React from 'react'
import Image from 'next/image'
import Birds from '@src/assets/Images/IYREF/REParty/birds.svg'
import Img1 from '@src/assets/Images/IYREF/REParty/image1.jpg'
import Img2 from '@src/assets/Images/IYREF/REParty/image2.jpg'
import Img3 from '@src/assets/Images/IYREF/REParty/image3.jpg'
import Turbine from '@src/assets/Images/IYREF/REParty/turbine.svg'
import Mountain from '@src/assets/Images/IYREF/REParty/mountain.svg'

const REParty = (): JSX.Element => {
  return (
    <div className='font-monstserrat relative h-screen flex flex-col items-center'>
      <Image src={Birds} alt='Birds-Image' className='h-[4vw] absolute mt-[6vw] right-[8vw]'/>
      <div className='mt-[12vh] flex flex-col items-center px-[16vw] text-center'>
        <p className='font-normal text-[16px] xl:text-[24px] text-[#346E3C]'>Celebrate</p>
        <p className='mt-[4vh] font-bold text-[24px] xl:text-[40px] font-gradient px-[2vw]'>Integrated Youth Renewable Energy Festival (IYREF) 2024</p>
        <p className='mt-[6vh] font-normal text-[16px] xl:text-[24px] text-[#346E3C]'>with awards and captivating performances at REParty. It's not just our closing event dedicated to renewable energy but also served as a source of inspiration and cherished memories for all. Don’t miss out on this unforgettable evening!</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-[4vh] mx-[4vw] mt-[20vh]'>
        <Image src={Img1} alt='Image-1' className='rounded-xl'/>
        <Image src={Img2} alt='Image-2' className='rounded-xl'/>
        <Image src={Img3} alt='Image-3' className='rounded-xl'/>
      </div>
      <Image src={Turbine} alt='Turbine-Image' className='mt-[30vh] h-[62vw] w-full'/>
      <Image src={Mountain} alt='Mountain-Image' className='mt-[-30vw] h-[62vw] w-full'/>
    </div>
  )
}

export default REParty
