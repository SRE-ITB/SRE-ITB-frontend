import React from 'react'
import Image from 'next/image'
import Stars from '@src/assets/Images/IYREF/REParty/stars.svg'

const REParty2 = (): JSX.Element => {
  return (
    <div className='font-monstserrat relative h-screen px-[10vw] flex flex-col justify-center items-center text-center text-white bg-black overflow-x-hidden'>
        <Image src={Stars} alt='Stars-Image'/>
        <p className='mt-[10vh] font-medium text-[16px] xl:text-[24px]'>Step into a world where innovation meets sustainability at REFest. REFest is an exhibition event that displays various renewable energy products from various communities. Discover a curated selection of products designed to integrate seamlessly into everyday life, promoting a more sustainable lifestyle. This is a unique opportunity to gain knowledge, ask questions, and be inspired by those at the forefront of the green movement. Join us at REFest and be a part of the movement towards a more sustainable future.</p>
    </div>
  )
}

export default REParty2
