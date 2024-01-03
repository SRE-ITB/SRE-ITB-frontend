import React, { useEffect, useState } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import Card from '../Card/HomeCard'

SwiperCore.use([Autoplay, Pagination, Navigation])

interface Content {
  image: any
  title: string
  desc: string
}

interface CarouselProps {
  contents: Content[]
}

const HomeCarousel: React.FC<CarouselProps> = ({ contents }) => {
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
            <Card image={item.image} title={item.title} desc={item.desc} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination custom-pagination"></div>
      </Swiper>
    </div>
  )
}

export default HomeCarousel
