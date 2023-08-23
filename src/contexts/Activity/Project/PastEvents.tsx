import CarouselPastEvents from '@src/components/Carousel/PastEventsCarousel'

// Assets
import REProject from '@src/assets/Images/Carousel/REProject.webp'
import SocialProject from '@src/assets/Images/Carousel/SocialProject.webp'
import NoImage from '@src/assets/Images/Activity/NoImage.svg'

const PastEvents = (): JSX.Element => {
  const contents = [
    {
      image: REProject.src,
      title: 'Solar PV installation kamojang',
      desc: ''
    },
    {
      image: NoImage.src,
      title: 'Biogas pekayon',
      desc: ''
    },
    {
      image: SocialProject.src,
      title: 'SREmpathy: Cianjur',
      desc: ''
    }
  ]

  return (
    <div id='project' className="flex flex-col items-center justify-center text-center overflow-x-hidden sm:mt-[5vw] mt-[10vw] sm:mb-[5vw] mb-[10vw]">
      <p className="font-[Montserrat-Bold] sm:text-[40px] text-[30px] mx-[5vw]">
        Our <span className="text-[#169470]">Past Events</span>
      </p>
      <div className="h-[15px] w-[100px] rounded-full bg-[#169470] mt-[10px]"></div>
      <div className="mt-[50px] items-center text-center">
        <CarouselPastEvents contents={contents} />
      </div>
    </div>
  )
}

export default PastEvents
