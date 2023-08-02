import React, { useEffect, useState } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import Card from '@src/components/Activity/Card'

SwiperCore.use([Autoplay, Pagination, Navigation])

interface Content {
  image: string
  title: string
  desc: string
}

interface CarouselProps {
  contents: Content[]
}

const Carousel: React.FC<CarouselProps> = ({ contents }) => {
  const [slidesPerView, setSlidesPerView] = useState(3)

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
    <div className='w-screen'>
      <Swiper
        spaceBetween={0}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
      >
        {contents.map((item, index) => (
          <SwiperSlide key={index}>
            <Card image={item.image} title={item.title} desc={item.desc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
