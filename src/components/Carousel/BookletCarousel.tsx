import React, { useEffect, useState } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import Card from '../Card/BookletCard'

SwiperCore.use([Autoplay, Pagination, Navigation])

interface Content {
  image: any
  title: string
  link: string
}

interface CarouselProps {
  contents: Content[]
}

const BookletCarousel = ({ contents }: CarouselProps): JSX.Element => {
  const [slidesPerView, setSlidesPerView] = useState(3)

  const handleCardClick = async (link: string): Promise<void> => {
    try {
      window.location.href = 'article/' + link
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
          <SwiperSlide key={index} className='mt-5'>
            <Card
              image={item.image}
              title={item.title}
              onClick={() => {
                void handleCardClick(item.link)
              }}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination custom-pagination"></div>
      </Swiper>
    </div>
  )
}

export default BookletCarousel
