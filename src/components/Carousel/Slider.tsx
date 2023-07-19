import React from 'react';

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/swiper-bundle.css';

// Import image
import Image from 'next/image'

// Assets
import ExternalEvent from '../../assets/images/Carousel/03 External Events.jpg'
import CareerTalks from '../../assets/images/Carousel/03. Career Talks.jpg'
import REProject from '../../assets/images/Carousel/03. RE Project.jpg'
import REview from '../../assets/images/Carousel/03. REview.png'
import SocialProject from '../../assets/images/Carousel/03. Social Project.jpg'
import Gathering from '../../assets/images/Carousel/03. gathering.jpg'
import SkillTraining from '../../assets/images/Carousel/03. Skill Training.jpg'

const Slider: React.FC = () => {
  const contents = [
    {
      image: REview,
      title: "REview",
      desc: "Webinar series to learn the fundamental of renewable energy"
    },
    {
      image: SocialProject,
      title: "Social Project",
      desc: "A community service projecy to help disadvantages individuals"
    },
    {
      image: REProject,
      title: "RE PRoject",
      desc: "Renewable energy installation project"
    },
    {
      image: CareerTalks,
      title: "Career Talks",
      desc: "Talk show with renewable enery expert regarding green jobs"
    },
    {
      image: ExternalEvent,
      title: "External Event",
      desc: "External events from SRE national where we can meet with other SRE chapter"
    },
    {
      image: SkillTraining,
      title: "Skill Training",
      desc: "Soft skill workshop sesiion as preparatio before doing final project"
    },
    {
      image: Gathering,
      title: "Gathering",
      desc: "One day event where members will get together and doing fun games"
    },
    {
      image: Gathering,
      title: "Company Visit",
      desc: "One day visit to renewable energy company"
    }
  ]

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false, // Set this to true if you want to stop autoplay on user interaction
      }}
      pagination={{
        clickable: true,
      }}
    >
      {contents.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='h-[300px] w-[300px] bg-green rounded'>
            <div className='rounded'>
              <Image className='d-block w-100' src={item.image} alt={`Slide ${index + 1}`} />
            </div>
            <div className='mt-2 px-4'>
              <p className='text-xl font-[Montserrat-Bold] text-white text-center'>{item.title}</p>
              <p className='text-white text-center font-[Montserrat-Medium] text-[14px] mt-2'>{item.desc}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;

// spaceBetween={30}
//       slidesPerView={3}
//       autoplay={{
//         delay: 4000,
//         disableOnInteraction: true
//       }}
//       pagination={{
//         clickable: true
//       }}