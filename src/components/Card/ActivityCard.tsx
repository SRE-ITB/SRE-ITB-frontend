import React from 'react'
import Image from 'next/image'
import Loading from '@src/assets/Images/Illustration/Loading.png'

interface ActivityCardProps {
  id: number
  thumbnail: any
  title: string
  caption: string
  description: string
  onClick?: () => Promise<void>
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  id,
  thumbnail,
  title,
  caption,
  description,
  onClick
}) => {
  const handleClick = (): void => {
    if (onClick) {
      void onClick().catch((error) => {
        console.error('Error handling click:', error)
      })
    }
  }

  const isClickable = description !== ''

  return (
    <div
      className={`relative w-auto h-[400px] rounded-[5px] overflow-hidden mb-[15px] mx-[5%] font-montserrat ${isClickable ? 'cursor-pointer' : 'cursor-normal'}`}
      onClick={isClickable ? handleClick : undefined}
    >
      <div className="h-[200px] relative">
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="cover"
          blurDataURL={Loading.src}
        />
      </div>
      <div className="h-[130px] w-full flex flex-col items-start">
        <h3 className="text-xl font-bold my-[10px]">
          {title}
        </h3>
        <h4 className="text-justify font-normal text-[14px] text-[#778899]">{caption}</h4>
      </div>
    </div>
  )
}

export default ActivityCard
