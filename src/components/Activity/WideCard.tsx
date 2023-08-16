import React from 'react'
import Image from 'next/image'

const WideCard: React.FC<{ image: any, title: string, desc: string }> = ({
  image,
  title,
  desc
}) => {
  return (
    <div
      className="relative bg-gradient-to-r from-[#0D664C] to-[#169470] w-auto h-[300px] rounded-[60px] overflow-hidden mb-[10px] mx-[10%] flex"
      style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}>
      <div className="w-[30%] h-[80%] relative flex my-auto ml-8">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-[40px]"
        />
      </div>
      <div className="w-[70%] h-[100%] px-8 py-8 relative">
        <h5 className="text-white text-xl font-semibold font-[Montserrat-Bold] mb-[10px]">
          {title}
        </h5>
        <p className="text-white font-[Montserrat-Medium]">{desc}</p>
        <div className='absolute bottom-8 right-0 left-0 flex justify-center'>
          <button className='border-2 border-white rounded-[20px] px-5 py-1 text-white font-[Montserrat-Medium] hover:bg-[#0D664C]  transition-all'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default WideCard
