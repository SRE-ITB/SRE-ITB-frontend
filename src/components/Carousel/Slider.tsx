import React from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css' // Import Swiper styles
import Card from '../Card/Card'

// Assets
import ExternalEvent from '../../assets/images/Carousel/03 External Events.jpg'
import CareerTalks from '../../assets/images/Carousel/03. Career Talks.jpg'
import REProject from '../../assets/images/Carousel/03. RE Project.jpg'
import REview from '../../assets/images/Carousel/03. REview.png'
import SocialProject from '../../assets/images/Carousel/03. Social Project.jpg'
import Gathering from '../../assets/images/Carousel/03. gathering.jpg'
import SkillTraining from '../../assets/images/Carousel/03. Skill Training.jpg'

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

const Slider: React.FC = () => {
  const contents = [
    {
      image: REview,
      title: 'REview',
      desc: 'Webinar series to learn the fundamental of renewable energy'
    },
    {
      image: SocialProject,
      title: 'Social Project',
      desc: 'A community service projecy to help disadvantages individuals'
    },
    {
      image: REProject,
      title: 'RE PRoject',
      desc: 'Renewable energy installation project'
    },
    {
      image: CareerTalks,
      title: 'Career Talks',
      desc: 'Talk show with renewable enery expert regarding green jobs'
    },
    {
      image: ExternalEvent,
      title: 'External Event',
      desc: 'External events from SRE national where we can meet with other SRE chapter'
    },
    {
      image: SkillTraining,
      title: 'Skill Training',
      desc: 'Soft skill workshop sesiion as preparatio before doing final project'
    },
    {
      image: Gathering,
      title: 'Gathering',
      desc: 'One day event where members will get together and doing fun games'
    },
    {
      image: Gathering,
      title: 'Company Visit',
      desc: 'One day visit to renewable energy company'
    }
  ]

  return (
    <div className='w-screen'>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Pagination]}
      >
        {contents.map((item, index) => (
          <SwiperSlide key={index}>
            <Card image={item.image} title={item.title} desc={item.desc}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
