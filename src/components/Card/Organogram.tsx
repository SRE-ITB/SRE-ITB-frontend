import React from 'react'
import Image from 'next/image'

const Organogram: React.FC<{ image: any, name: string, major: string, title: string, color: string }> = ({
  image,
  name,
  major,
  title,
  color
}) => {
  return (
    <div className="relative mb-[10px] flex flex-col items-center mt-[50px]">
      <div className='absolute h-[90px] w-[90px] z-10'>
        <div className='relative h-full w-full -top-[50%]'>
          <Image
            src={image}
            alt={name}
            placeholder='blur'
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
      <div className='absolute h-[96px] w-[96px] z-9'>
        <div
          className='relative h-full w-full -top-[50%] max-w-[400px] rounded-full'
          style={{ backgroundColor: color }}
        >
        </div>
      </div>
      <div
        className='absolute -top-1 w-full h-[50px] rounded-xl max-w-[400px]'
        style={{ backgroundColor: color }}
      >
      </div>
      {/* <div className='w-full bg-green1'>s</div> */}
      <div
        className='relative rounded-xl bg-white font-montserrat px-5 max-w-[400px] w-[70vw] sm:w-[50vw] md:w-[25vw] h-full'
        style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
      >
        <div className="w-full flex flex-col items-center justify-center mt-[45px] mb-[10px]">
          <h3 className="text-xl font-extrabold text-center">
            {name}
          </h3>
          <h4 className="font-bold mb-[10px]">{major}</h4>
          <h4 className="text-center">{title}</h4>
        </div>
      </div>
    </div>
  )
}

export default Organogram
