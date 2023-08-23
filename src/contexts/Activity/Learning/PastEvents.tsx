import CarouselPastEvents from '@src/components/Carousel/PastEventsCarousel'

// Assets
import REview from '@src/assets/Images/Carousel/REview.webp'
import SkillTraining from '@src/assets/Images/Carousel/SkillTraining.webp'
import NoImage from '@src/assets/Images/Activity/NoImage.svg'

const PastEvents = (): JSX.Element => {
  const contents = [
    {
      image: REview.src,
      title: 'REview',
      desc: 'Webinar series to learn the fundamentals of renewable energy by inviting some experts in their fields.'
    },
    {
      image: NoImage.src,
      title: 'SRE ITB x IEEE ITB',
      desc: 'Joint classes with IEEE ITB student branch to talk about renewable energy in terms of business. The members learned how to create a renewable energy business model canvas at the hands on session.'
    },
    {
      image: SkillTraining.src,
      title: 'Skill Training',
      desc: 'Soft skill workshop as preparation before the members doing their final project. The workshop always ends with hands on session.'
    },
    {
      image: NoImage.src,
      title: 'Paper Presentation',
      desc: 'A forum where the members present their paper or scientific article they made as their final project.'
    }
  ]

  return (
    <div id='learning' className="flex flex-col items-center justify-center text-center overflow-x-hidden sm:mt-[5vw] mt-[10vw] sm:mb-[5vw] mb-[10vw]">
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
