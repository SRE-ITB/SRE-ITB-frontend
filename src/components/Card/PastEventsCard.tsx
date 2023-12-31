import React from 'react'
import Image from 'next/image'

const PastEventsCard: React.FC<{ image: any, title: string, desc: string }> = ({
  image,
  title,
  desc
}) => {
  return (
    <div
      className="relative bg-gradient-to-r from-[#0D664C] to-[#169470] w-auto h-[500px] rounded-[60px] overflow-hidden mb-[10px] mx-[5%]"
      style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}>
      <div className="w-[80%] h-[40%] relative flex mx-auto mt-[30px]">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-[30px]"
        />
      </div>
      <div className="h-[130px] w-full px-4 justify-center mt-[10px]">
        <h4 className="text-white text-xl font-semibold font-[Montserrat-Bold] mb-[10px]">
          {title}
        </h4>
        <h5 className="text-white font-[Montserrat-Medium]">{desc}</h5>
      </div>
    </div>
  )
}

export default PastEventsCard
