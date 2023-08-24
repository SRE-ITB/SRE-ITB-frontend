import CarouselPastEvents from '@src/components/Carousel/PastEventsCarousel'

// Assets
import REProject from '@src/assets/Images/Carousel/REProject.webp'
import SocialProject from '@src/assets/Images/Carousel/SocialProject.webp'
import PVPekayon from '@src/assets/Images/Activity/PVPekayon.webp'

const PastEvents = (): JSX.Element => {
  const contents = [
    {
      image: REProject.src,
      title: 'Solar PV Installation Kamojang',
      desc: 'On July 2022, SRE ITB in collaboration with Tim Gerilya KESDM, installed a 6 kWp solar panel at Kawasan Konservasi Elang Kamojang.'
    },
    {
      image: PVPekayon.src,
      title: 'Solar PV Installation Pekayon',
      desc: 'SRE ITB in collaboration with PT Astra International, installed solar pv of 1350 kWp at Kampung Binaan Astra Pekayon, Bekasi.'
    },
    {
      image: SocialProject.src,
      title: 'SREmpathy for Cianjur',
      desc: 'On November 2022, SRE ITB collected some funds and public lighting to help the residents that were affected by the disaster.'
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
