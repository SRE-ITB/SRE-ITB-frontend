import Carousel from '@src/components/Carousel/Carousel'

// Assets
import ExternalEvent from '../../assets/images/Carousel/03 External Events.jpg'
import CareerTalks from '../../assets/images/Carousel/03. Career Talks.jpg'
import REProject from '../../assets/images/Carousel/03. RE Project.jpg'
import REview from '../../assets/images/Carousel/03. REview.png'
import SocialProject from '../../assets/images/Carousel/03. Social Project.jpg'
import Gathering from '../../assets/images/Carousel/03. gathering.jpg'
import SkillTraining from '../../assets/images/Carousel/03. Skill Training.jpg'

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
      desc: 'Soft skill workshop sesiion as preparatio before doing final project'
    },
    {
      image: Gathering.src,
      title: 'Gathering',
      desc: 'One day event where members will get together and doing fun games'
    },
    {
      image: Gathering.src,
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
      <div className='mt-[50px]'>
        <Carousel contents={contents}/>
      </div>
      <div className='mt-[5rem] w-[400px] md:w-[500px] lg:w-[600px] h-[50px] rounded-full border-[1px] border-[#168470] text-center flex items-center justify-center text-[#169470] hover:bg-[#169470] hover:text-white transition-all cursor-pointer'>
        See More of Our Activities
      </div>
    </div>
  )
}

export default Activity
