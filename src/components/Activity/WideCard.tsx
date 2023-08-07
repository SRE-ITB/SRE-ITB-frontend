import React from 'react'
import Image from 'next/image'

const WideCard: React.FC<{ image: any; title: string; desc: string }> = ({
  image,
  title,
  desc,
}) => {
  return (
    <div
      className="relative bg-gradient-to-r from-[#0D664C] to-[#169470] w-[800px] h-[300px] rounded-[60px] overflow-hidden mb-[10px] mx-[5%] flex"
      style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}>
      <div className="w-[40%] h-[100%] relative flex">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-[30px]"
        />
      </div>
      <div className="w-[60%] h-[100%] px-4 flex flex-col justify-center">
        <h5 className="text-white text-xl font-semibold font-[Montserrat-Bold] mb-[10px]">
          {title}
        </h5>
        <p className="text-white font-[Montserrat-Medium">{desc}</p>
      </div>
    </div>
  )
}

export default WideCard
