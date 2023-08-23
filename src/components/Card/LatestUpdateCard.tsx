import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const LatestUpdateCard: React.FC<{ image: any, title: string, desc: string, id: number }> = ({
  image,
  title,
  desc,
  id
}) => {
  const router = useRouter()

  const handleReadMoreClick = (): void => {
    try {
      const currentPath = router.asPath
      void router.push(`${currentPath}/${id}`)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div
      className="relative bg-gradient-to-r from-[#0D664C] to-[#169470] w-auto md:h-[300px] h-[600px] rounded-[60px] overflow-hidden mb-[10px] mx-[10%] md:flex"
      style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}>
      <div className="md:w-[30%] md:h-[80%] w-[80%] h-[200px] relative flex md:my-auto md:ml-8 mx-auto mt-8">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-[40px]"
        />
      </div>
      <div className="md:w-[70%] md:h-[100%] h-[380px] px-8 py-8 relative text-center md:text-left">
        <h5 className="text-white text-xl font-semibold font-[Montserrat-Bold] mb-[10px]">
          {title}
        </h5>
        <p className="text-white font-[Montserrat-Medium]">{desc}</p>
        <div className='absolute md:bottom-8 bottom-12 right-0 left-0 flex justify-center'>
          <button
            className='border-2 border-white rounded-[20px] px-5 py-1 text-white font-[Montserrat-Medium] hover:bg-[#0D664C]  transition-all'
            onClick={handleReadMoreClick}>
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default LatestUpdateCard
