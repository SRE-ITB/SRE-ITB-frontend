/* eslint-disable @typescript-eslint/comma-dangle */
import Carousel from '@src/components/Carousel/HomeCarousel'

// Assets
import ExternalEvent from '@src/assets/Images/Home/Activity/ExternalEvents.webp'
import CareerTalks from '@src/assets/Images/Home/Activity/CareerTalks.webp'
import REProject from '@src/assets/Images/Home/Activity/REProject.webp'
import REview from '@src/assets/Images/Home/Activity/REview.webp'
import SocialProject from '@src/assets/Images/Home/Activity/SocialProject.webp'
import Gathering from '@src/assets/Images/Home/Activity/Gathering.webp'
import SkillTraining from '@src/assets/Images/Home/Activity/SkillTraining.webp'
import CompanyVisit from '@src/assets/Images/Home/Activity/CompanyVisit.webp'

const Activity = (): JSX.Element => {
  const contents = [
    {
      image: REview,
      title: 'REview',
      desc: 'Webinar series to learn the fundamental of renewable energy',
    },
    {
      image: SocialProject,
      title: 'Social Project',
      desc: 'A community service projecy to help disadvantages individuals',
    },
    {
      image: REProject,
      title: 'RE PRoject',
      desc: 'Renewable energy installation project',
    },
    {
      image: CareerTalks,
      title: 'Career Talks',
      desc: 'Talk show with renewable enery expert regarding green jobs',
    },
    {
      image: ExternalEvent,
      title: 'External Event',
      desc: 'External events from SRE national where we can meet with other SRE chapter',
    },
    {
      image: SkillTraining,
      title: 'Skill Training',
      desc: 'Soft skill workshop session as preparation before doing final project',
    },
    {
      image: Gathering,
      title: 'Gathering',
      desc: 'One day event where members will get together and doing fun games',
    },
    {
      image: CompanyVisit,
      title: 'Company Visit',
      desc: 'One day visit to renewable energy company',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center text-center overflow-x-hidden py-[10vw] font-montserrat">
      <p className="text-transparent font-black bg-clip-text bg-gradient-to-r from-green1 to-green8 text-[24px] md:text-[36px] xl:text-[48px] w-[320px] md:w-[500px] xl:w-[823px]">
        WHAT WILL WE DO AT SRE ITB?
      </p>
      <div className="mt-[20px] h-[5px] xl:h-[10px] w-[125px] rounded-full bg-gradient-to-r from-green1 to-green8"></div>
      <br />
      <div className="mt-[5vw] mb-[7vw]">
        <Carousel contents={contents} />
      </div>
      <button className="border-[2px] border-green5 bg-white hover:bg-green5 rounded-full text-green5 duration-75 hover:text-white font-bold w-[275px] md:w-[325px] xl:w-[400px] h-[50px] text-[16px] md:text-[18px] xl:text-[20px] mb-[5vw]">
        See More of Our Activities
      </button>
    </div>
  )
}

export default Activity
