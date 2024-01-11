import React from 'react'
import Image from 'next/image'

interface ActivityCardProps {
  id: number
  image: any
  title: string
  desc: string
  onClick?: () => Promise<void>
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  id,
  image,
  title,
  desc,
  onClick
}) => {
  const handleClick = (): void => {
    if (onClick) {
      void onClick().catch((error) => {
        console.error('Error handling click:', error)
      })
    }
  }

  return (
    <div className="relative w-auto h-[400px] rounded-[5px] overflow-hidden mb-[15px] mx-[5%] font-montserrat cursor-pointer" onClick={handleClick}>
      <div className="h-[200px] relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="h-[130px] w-full flex flex-col items-start">
        <h3 className="text-xl font-bold my-[10px]">
          {title}
        </h3>
        <h4 className="text-justify font-normal text-[14px] text-[#778899]">{desc}</h4>
      </div>
    </div>
  )
}

export default ActivityCard
