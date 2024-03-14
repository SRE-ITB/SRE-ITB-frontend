import React from 'react'
import Image from 'next/image'
import Leaves from '@src/assets/Images/IYREF/Ongoing/leaves.svg'
import Leaves2 from '@src/assets/Images/IYREF/Ongoing/leaves2.svg'
import Birds from '@src/assets/Images/IYREF/Ongoing/birds.svg'
import Mountain from '@src/assets/Images/IYREF/Ongoing/mountain.svg'

interface OnGoingProps {
  events: EventsProps[]
}

interface EventsProps {
  title: string
  href: string
}

const Ongoing = ({ events }: OnGoingProps): JSX.Element => {
  return (
    <div className='font-monstserrat relative h-screen flex flex-col justify-center items-center overflow-x-hidden overflow-y-hidden bg-gradient'>
      <div className='w-full sm:px-[15vw] px-[10vw]'>
        <div className='w-full text-white bg-white bg-opacity-10 rounded-xl flex flex-col items-center p-10'>
          <div className='font-normal text-[20px] md:text-[25px] mb-7'>On Going Events</div>
          {events.map((event, index) => (
            <div key={index} className='font-semibold mt-3 text-[25px] md:text-[30px] hover:translate-y-[-5px] transition-all ease-in-out w-fit'>
              <a href={event.href} className=''>{event.title}</a>
            </div>
          ))}
        </div>
      </div>

      <div className='absolute top-[10vw] left-[20vw]'>
        <Image src={Birds} />
      </div>
      <div className='absolute top-0 right-0'>
        <Image src={Leaves2} />
      </div>
      <div className='absolute bottom-0 left-0 flex'>
        <Image src={Leaves}/>
      </div>
      <div className='absolute right-0 bottom-0 flex'>
        <Image src={Mountain}/>
      </div>
    </div>
  )
}

export default Ongoing
