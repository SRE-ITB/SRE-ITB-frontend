import Image from 'next/image'
import React from 'react'

interface SpeakerCardProps {
  session: string
  picture: any
  name: string
}

const SpeakerCard = ({ session, picture, name }: SpeakerCardProps): JSX.Element => {
  return (
    <div className='w-[375px] h-[625px] lg:w-[475px] lg:h-[735px] flex flex-col text-center items-center justify-evenly border-[1px] border-green12 rounded-xl bg-white'>
        <div className='flex flex-col justify-between'>
            <h3 className='text-[16px] lg:text-[20px]'><span className='text-transparent bg-clip-text bg-gradient-to-r from-green5 to-green8'>{session}</span></h3>
            <h2 className='text-[24px] lg:text-[36px]'><span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-green5 to-green8'>SPEAKER</span></h2>
        </div>
        <div className='w-[325px] h-[350px] lg:w-[425px] lg:h-[450px]'>
            <Image src={picture} alt={name} className=''/>
        </div>
        <p className='w-[325px] text-[20px]'><span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-green5 to-green8'>{name}</span></p>
    </div>
  )
}

export default SpeakerCard
