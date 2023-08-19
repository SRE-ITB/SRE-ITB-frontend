import Carousel from '@src/components/Carousel/HomeCarousel'

// Assets
import ExternalEvent from '@src/assets/Images/Carousel/ExternalEvents.webp'
import CareerTalks from '@src/assets/Images/Carousel/CareerTalks.webp'
import REProject from '@src/assets/Images/Carousel/REProject.webp'
import REview from '@src/assets/Images/Carousel/REview.webp'
import SocialProject from '@src/assets/Images/Carousel/SocialProject.webp'
import Gathering from '@src/assets/Images/Carousel/Gathering.webp'
import SkillTraining from '@src/assets/Images/Carousel/SkillTraining.webp'
import CompanyVisit from '@src/assets/Images/Carousel/CompanyVisit.webp'

const Activity = (): JSX.Element => {
  const contents = [
    {
      image: REview.src,
      title: 'REview',
      desc: 'Webinar series to learn the fundamental of renewable energy'
    },
    {
      image: SocialProject.src,
      title: 'Social Project',
      desc: 'A community service projecy to help disadvantages individuals'
    },
    {
      image: REProject.src,
      title: 'RE PRoject',
      desc: 'Renewable energy installation project'
    },
    {
      image: CareerTalks.src,
      title: 'Career Talks',
      desc: 'Talk show with renewable enery expert regarding green jobs'
    },
    {
      image: ExternalEvent.src,
      title: 'External Event',
      desc: 'External events from SRE national where we can meet with other SRE chapter'
    },
    {
      image: SkillTraining.src,
      title: 'Skill Training',
      desc: 'Soft skill workshop session as preparation before doing final project'
    },
    {
      image: Gathering.src,
      title: 'Gathering',
      desc: 'One day event where members will get together and doing fun games'
    },
    {
      image: CompanyVisit.src,
      title: 'Company Visit',
      desc: 'One day visit to renewable energy company'
    }
  ]

  return (
    <div className='flex flex-col items-center justify-center text-center overflow-x-hidden sm:mt-[5vw] mt-[10vw] sm:mb-[5vw] mb-[10vw]'>
      <p className='font-[Montserrat-Bold] sm:text-[40px] text-[30px] mx-[5vw]'>
        What Will We Do at <span className='text-[#169470]'>SRE ITB?</span>
      </p>
      <div className='h-[15px] w-[100px] rounded-full bg-[#169470] mt-[10px]'></div>
      <div className='mt-[50px] mb-[5vw]'>
        <Carousel contents={contents}/>
      </div>
    </div>
  )
}

export default Activity
