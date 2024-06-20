import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

import ArrowRightIcon from '@src/components/Icon/ArrowRightIcon'

const ArticleCard: React.FC<{ image: any, source: string, position: string, paragraph: string }> = ({
  image,
  source,
  position,
  paragraph
}) => {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false)
  const [maxHeight, setMaxHeight] = useState('0px')
  const paragraphRef = useRef<HTMLDivElement>(null)

  const handleCardClick = (): void => {
    setIsParagraphVisible(!isParagraphVisible)
  }

  const updateMaxHeight = (): void => {
    if (paragraphRef.current) {
      const extraHeight = 25
      setMaxHeight(isParagraphVisible ? `${paragraphRef.current.scrollHeight + extraHeight}px` : '0px')
    }
  }

  useEffect(() => {
    updateMaxHeight()
    window.addEventListener('resize', updateMaxHeight)
    return () => {
      window.removeEventListener('resize', updateMaxHeight)
    }
  }, [isParagraphVisible])

  return (
    <div className='relative mb-[30px]'>
      <div
        className="relative flex justify-between items-center w-auto h-auto rounded-xl py-5 px-10 font-montserrat cursor-pointer bg-semiWhite hover:scale-105 transition-transform duration-300 ease-in-out"
        onClick={handleCardClick}
      >
        <div className="relative text-left mr-5">
          <h3 className='text-[25px] mb-2'>
            {source}
          </h3>
          <h4 className='opacity-50'>
            {position}
          </h4>
        </div>
        <div className='flex'>
          <div className='h-[100px] w-[100px] overflow-hidden relative mr-5'>
            <Image
              src={image}
              alt='image'
              placeholder='blur'
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className='items-center flex'>
            <div className={`flex items-center transition-all duration-500 ease-in-out ${isParagraphVisible ? 'rotate-90' : 'rotate-0'}`}>
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={paragraphRef}
        className={`bg-semiWhite w-full px-10 rounded-b-xl text-left transition-max-height duration-500 ease-in-out ${isParagraphVisible ? '-mt-[10px] py-[15px]' : 'mt-0'}`}
        style={{ maxHeight, overflow: 'hidden' }}
      >
        {paragraph.split('\n\n').map((para, index) => (
          <p key={index} className='mb-4'>
            {para}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ArticleCard
