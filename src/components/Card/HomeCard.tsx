import React from 'react'
import Image from 'next/image'

const HomeCard: React.FC<{ image: any, title: string, desc: string }> = ({
  image,
  title,
  desc
}) => {
  return (
    <div
      className="relative bg-gradient-to-r from-green5 to-green8 w-auto h-[500px] rounded-xl overflow-hidden mb-[10px] mx-[5%] font-montserrat"
      style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}>
      <div className="h-[350px] relative">
        <Image
          src={image}
          alt={title}
          placeholder='blur'
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="h-[130px] w-full px-4 flex flex-col items-center justify-center">
        <h3 className="text-white text-xl font-bold mb-[10px]">
          {title}
        </h3>
        <h4 className="text-white">{desc}</h4>
      </div>
    </div>
  )
}

export default HomeCard
