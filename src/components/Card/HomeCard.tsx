import React from 'react'
import Image from 'next/image'

const HomeCard: React.FC<{ image: any, title: string, desc: string }> = ({ image, title, desc }) => {
  return (
    <div className="relative bg-gradient-to-r from-[#0D664C] to-[#169470] w-auto h-[500px] rounded-xl overflow-hidden mb-[10px] mx-[5%]" style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}>
      <div className="h-[350px] relative">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className=""/>
      </div>
      <div className="h-[130px] w-full px-4 flex flex-col items-center justify-center">
        <h5 className="text-white text-xl font-semibold font-[Montserrat-Bold] mb-[10px]">{title}</h5>
        <p className="text-white font-[Montserrat-Medium]">{desc}</p>
      </div>
    </div>
  )
}

export default HomeCard
