import CarouselPastEvents from '@src/components/Carousel/PastEventsCarousel'

// Assets
import NoImage from '@src/assets/Images/Activity/NoImage.svg'
import CareerTalks from '@src/assets/Images/Carousel/CareerTalks.webp'

const PastEvents = (): JSX.Element => {
  const contents = [
    {
      image: NoImage.src,
      title: 'SRE Goes to School',
      desc: 'A visit to some schools in Bandung to spread awareness regarding the importance of understanding renewable energy.'
    },
    {
      image: NoImage.src,
      title: 'SREnclusivity Week',
      desc: 'A week full of webinar, panel discussion, competition, and grand seminar.'
    },
    {
      image: NoImage.src,
      title: 'BONUS GEDE',
      desc: 'Panel discussion with some policy makers to deliver our concern regarding renewable energy and energy transition.'
    },
    {
      image: CareerTalks.src,
      title: 'Career Talks',
      desc: 'Talk show with some renewable energy experts regarding green jobs.'
    },
    {
      image: NoImage.src,
      title: 'Company Visit',
      desc: 'One day visit to renewable energy related companies to get to know their product and work process.'
    }
  ]

  return (
    <div id='external' className="flex flex-col items-center justify-center text-center overflow-x-hidden sm:mt-[5vw] mt-[10vw] sm:mb-[5vw] mb-[10vw]">
      <p className="font-[Montserrat-Bold] sm:text-[40px] text-[30px] mx-[5vw]">
        Our <span className="text-[#169470]">Past Events</span>
      </p>
      <div className="h-[15px] w-[100px] rounded-full bg-[#169470] mt-[10px]"></div>
      <div className="mt-[50px]">
        <CarouselPastEvents contents={contents} />
      </div>
    </div>
  )
}

export default PastEvents
