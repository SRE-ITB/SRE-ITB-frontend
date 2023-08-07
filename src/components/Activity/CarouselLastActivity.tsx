import React, { useEffect, useState } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import WideCard from '@src/components/Activity/WideCard'

SwiperCore.use([Autoplay, Pagination, Navigation])

interface Content {
  thumbnail: string
  nama_kegiatan: string
  deskripsi_pendek: string
}

interface CarouselProps {
  contents: Content[]
}

const CarouselLastActivity: React.FC<CarouselProps> = ({ contents }) => {
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
    <div className="w-screen justify-center">
      <Swiper
        spaceBetween={0}
        slidesPerView={slidesPerView}
        centeredSlides={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}>
        {contents.map((item, index) => (
          <SwiperSlide key={index}>
            <WideCard
              image={item.thumbnail}
              title={item.nama_kegiatan}
              desc={item.deskripsi_pendek}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarouselLastActivity
