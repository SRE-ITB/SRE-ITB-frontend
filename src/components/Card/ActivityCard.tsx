import React from 'react'
import Image from 'next/image'

const ActivityCard: React.FC<{ image: any, title: string, desc: string }> = ({
  image,
  title,
  desc
}) => {
  return (
    <div className="relative w-auto h-[400px] rounded-[5px] overflow-hidden mb-[15px] mx-[5%] font-montserrat">
      <div className="h-[200px] relative">
        <Image
          src={image}
          alt={title}
          placeholder='blur'
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="h-[130px] w-full flex flex-col items-start justify-center">
        <h3 className="text-xl font-bold mb-[10px]">
          {title}
        </h3>
        <h4 className="text-justify font-normal text-[12px] text-[#778899]">{desc}</h4>
      </div>
    </div>
  )
}

export default ActivityCard
