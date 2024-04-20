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
        <div className='z-10 w-full text-white bg-white bg-opacity-10 backdrop-blur-[5px] relative rounded-xl flex flex-col items-center p-10'>
          <h1 className='font-normal text-[20px] md:text-[25px] mb-7'>On Going Events</h1>
          {events.map((event, index) => (
            <a key={index} href={event.href}>
              <button className='font-semibold underline p-2 text-[25px] md:text-[30px] hover:translate-y-[-5px] transition-all ease-in-out w-fit'>
                <h1>
                  {event.title}
                </h1>
              </button>
            </a>
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
