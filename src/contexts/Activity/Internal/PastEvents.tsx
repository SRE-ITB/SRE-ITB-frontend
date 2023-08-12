import CarouselPastEvents from '@src/components/Activity/CarouselPastEvents'

// Assets
import REProject from '@src/assets/Images/Carousel/REProject.jpg'
import REview from '@src/assets/Images/Carousel/REview.png'
import SocialProject from '@src/assets/Images/Carousel/SocialProject.jpg'

const PastEvents = (): JSX.Element => {
  const contents = [
    {
      image: REview.src,
      title: 'Welcoming Party',
      desc: 'First gathering event to welcome the new members by doing fun games to get to know each other, also introducing one year journey in SRE ITB that will be through together.'
    },
    {
      image: SocialProject.src,
      title: 'Staff Onboarding',
      desc: 'The first meeting for all of SRE ITB management team where each division will have their own session to introduce themselves with their own uniqueness.'
    },
    {
      image: REProject.src,
      title: 'Town Hall Meeting',
      desc: 'Meeting attended by both management team and members to strengthen our bond and as the progress report regarding SRE ITB programs that had been done.'
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center text-center overflow-x-hidden sm:mt-[5vw] mt-[10vw] sm:mb-[5vw] mb-[10vw]">
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
