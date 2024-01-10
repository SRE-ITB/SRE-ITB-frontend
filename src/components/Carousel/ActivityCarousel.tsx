import React, { useEffect, useState } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import Card from '../Card/ActivityCard'
import { useRouter } from 'next/router'

SwiperCore.use([Autoplay, Pagination, Navigation])

interface Content {
  id: number
  image: any
  title: string
  desc: string
}

interface CarouselProps {
  contents: Content[]
}

const ActivityCarousel: React.FC<CarouselProps> = ({ contents }) => {
  const router = useRouter()
  const [slidesPerView, setSlidesPerView] = useState(3)

  const handleCardClick = async (id: number): Promise<void> => {
    try {
      await router.push(`/activity/${id}`)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    // Function to update the slidesPerView based on window width
    const handleResize = (): void => {
      if (window.innerWidth >= 1050) {
        setSlidesPerView(3)
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(1)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='w-full'>
      <Swiper
        spaceBetween={0}
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
          el: '.custom-pagination'
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
      >
        {contents.map((item, index) => (
          <SwiperSlide key={index}>
            <Card id={item.id} image={item.image} title={item.title} desc={item.desc} onClick={async () => await handleCardClick(item.id)} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination custom-pagination"></div>
      </Swiper>
    </div>
  )
}

export default ActivityCarousel
