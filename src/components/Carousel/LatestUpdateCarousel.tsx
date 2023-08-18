import React from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import WideCard from '@src/components/Card/LatestUpdateCard'

SwiperCore.use([Autoplay, Pagination, Navigation])

interface Content {
  thumbnail: string
  nama_kegiatan: string
  deskripsi_pendek: string
  id: number
}

interface CarouselProps {
  contents: Content[]
}

const LatestUpdateCarousel: React.FC<CarouselProps> = ({ contents }) => {
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
              id={item.id}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination custom-pagination"></div>
      </Swiper>
    </div>
  )
}

export default LatestUpdateCarousel
