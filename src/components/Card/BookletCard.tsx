import React from 'react'
import Image from 'next/image'

const BookletCard: React.FC<{ image: any, title: string, onClick: () => void }> = ({
  image,
  title,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className="relative w-auto h-[500px] rounded-xl mb-[10px] mx-[5%] font-montserrat hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      style={{ filter: 'drop-shadow(0px 5px 7px rgba(0, 0, 0, 0.25))' }}
      >
      <div className="h-[450px] relative rounded-xl">
        <Image
          src={image}
          alt={title}
          placeholder='blur'
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <div className='rounded-b-xl w-full absolute bottom-0 text-center text-white text-[20px] font-bold flex justify-center py-8 bg-gradient-to-t from-black'>
          {title}
        </div>
      </div>
    </div>
  )
}

export default BookletCard
