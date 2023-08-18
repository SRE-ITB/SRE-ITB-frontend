import React from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

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
  return (
    <div className="w-screen justify-center">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: '.custom-pagination'
        }}
      >
        {contents.map((item, index) => (
          <SwiperSlide key={index}>
            <WideCard
              image={item.thumbnail}
              title={item.nama_kegiatan}
              desc={item.deskripsi_pendek}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination custom-pagination"></div>
      </Swiper>
    </div>
  )
}

export default CarouselLastActivity
