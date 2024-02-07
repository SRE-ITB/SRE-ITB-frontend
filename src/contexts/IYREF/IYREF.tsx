import Image from 'next/image'
import PropTypes from 'prop-types'
import Pot from '@src/assets/AssetsV2/IYREF/Pot.svg'

interface TimelineProps {
  timeTitle: string
  timeDesc: string
}
const Timeline: React.FC< TimelineProps > = ({
  timeTitle,
  timeDesc
}) => {
  return (
      <div className='flex mt-[3.6vh]'>
          <div className='absolute ml-[0.8vw] mt-[-10vh] xl:mt-[-12vh] bg-green8 h-[12vh] xl:h-[16vh] w-[0.2vw]'></div>
          <div className='mt-[1.3vh] h-[1.8vw] aspect-square bg-green8 rounded-full'></div>
          <div className='ml-[3vw]'>
              <p className='text-transparent font-bold bg-clip-text bg-green8 text-[18px] xl:text-[24px]'>{timeTitle}</p>
              <p className='text-transparent bg-clip-text bg-green1 text-[16px] xl:text-[22px]'>{timeDesc}</p>
          </div>
      </div>
  )
}
Timeline.propTypes = {
  timeTitle: PropTypes.string.isRequired,
  timeDesc: PropTypes.string.isRequired
}
interface StagesProps {
  stageTitle: string
  stageSubtitle: string
  stageDesc: string
}
const Stages: React.FC<StagesProps> = ({
  stageTitle,
  stageSubtitle,
  stageDesc
}) => {
  return (
    <div className='bg-white bg-opacity-25 pt-[4vh] pb-[10vh] px-[6vw] xl:px-[3vw] rounded-xl'>
        <h1 className='font-medium xl:font-semibold text-[20px]'>{stageTitle}</h1>
        <p className='mt-[4vh] text-[16px]'>{stageSubtitle}</p>
        <p className='mt-[4vh] font-light text-[12px] xl:text-[16px]'>{stageDesc}</p>
    </div>
  )
}
Stages.propTypes = {
  stageTitle: PropTypes.string.isRequired,
  stageSubtitle: PropTypes.string.isRequired,
  stageDesc: PropTypes.string.isRequired
}
interface IYREFProps {
  ID: number
}
const IYREF: React.FC<IYREFProps> = ({ ID }) => {
  const competition = [
    {
      compeTitle: 'National Essay Competition',
      compeDesc: 'The National Essay Competition in IYREF 2024 is divided into three main stages: Preliminary, Semifinal, and Final Stage. All participants in the respective stages are required to complete and submit documents or other necessary items at each stage.'
    },
    {
      compeTitle: 'Business Case Competition',
      compeDesc: 'The IYREF Business Case Competition 2024 is divided into three main stages: Preliminary, Semifinal, and Final Stage. All participants in the respective stages are required to complete and submit documents or other necessary items at each stage.'
    },
    {
      compeTitle: 'Business Plan Competition',
      compeDesc: 'The Business Plan Competition in IYREF 2024 is divided into three main stages: Preliminary, Semifinal, and Final Stage. All participants in the respective stages are required to complete and submit documents or other necessary items at each stage.'
    }
  ]
  const timeline = [
    [{
      timeTitle: '24 Feb - 9 Mar 2024',
      timeDesc: 'Registation and Abstract Submission'
    },
    {
      timeTitle: '3 April 2024',
      timeDesc: 'Top 50 Finalist Announcement'
    },
    {
      timeTitle: '3 - 5 April 2024',
      timeDesc: 'Top 50 Finalist Registration'
    },
    {
      timeTitle: '5 April 2024',
      timeDesc: 'Webinar: How to Write an Essay'
    },
    {
      timeTitle: '16 - 22 April 2024',
      timeDesc: 'Essay Submission'
    },
    {
      timeTitle: '5 Mei 2024',
      timeDesc: 'Top 5 Finalist Announcement'
    },
    {
      timeTitle: '7 Mei 2024',
      timeDesc: 'TM and Coaching Session'
    },
    {
      timeTitle: '11 - 14 Mei 2024',
      timeDesc: 'Pitch Deck Submission'
    },
    {
      timeTitle: '18 Mei 2024',
      timeDesc: 'Pitching and Awarding'
    }],
    [{
      timeTitle: '24 Feb - 9 Mar 2024',
      timeDesc: 'Open Registration'
    },
    {
      timeTitle: '9 March 2024',
      timeDesc: 'Free Webinar'
    },
    {
      timeTitle: '17 March 2024',
      timeDesc: 'Case Distribution'
    },
    {
      timeTitle: '17 - 31 March 2024',
      timeDesc: 'Preliminary Phase (Executive Summary)'
    },
    {
      timeTitle: '17 - 19 April 2024',
      timeDesc: 'Semifinal Registration'
    },
    {
      timeTitle: '17 Apr - 1 May 2024',
      timeDesc: 'Semifinal Phase (Proposal)'
    },
    {
      timeTitle: '28 April 2024',
      timeDesc: 'Coaching 1'
    },
    {
      timeTitle: '10 - 17 May 2024',
      timeDesc: 'Final Phase (Pitch Deck)'
    },
    {
      timeTitle: '15 May 2024',
      timeDesc: 'Coaching 2'
    },
    {
      timeTitle: '18 May 2024',
      timeDesc: 'Pitching and Awarding'
    }],
    [{
      timeTitle: '24 Feb - 9 Mar 2024',
      timeDesc: 'Open Registration'
    },
    {
      timeTitle: '10 - 24 March 2024',
      timeDesc: 'BMC Submission'
    },
    {
      timeTitle: '22 March 2024',
      timeDesc: 'Coaching Session 1'
    },
    {
      timeTitle: '1 April 2024',
      timeDesc: 'Semifinalist Announcement'
    },
    {
      timeTitle: '2 - 4 April 2024',
      timeDesc: 'Semifinalist registration'
    },
    {
      timeTitle: '5 - 22 April 2024',
      timeDesc: 'Business Proposal Submission'
    },
    {
      timeTitle: '18 April 2024',
      timeDesc: 'Coaching Session 2'
    },
    {
      timeTitle: '7 May 2024',
      timeDesc: 'Finalist Announcement'
    },
    {
      timeTitle: '8 - 17 May 2024',
      timeDesc: 'Pitch Deck Submission'
    },
    {
      timeTitle: '18 May 2024',
      timeDesc: 'Pitching and Awarding'
    }]
  ]
  const stages = [
    [{
      stageTitle: 'Registration and Preliminary Stage',
      stageSubtitle: 'Abstract Submission',
      stageDesc: 'The initial phase of NEC requires participants to submit an abstract of the essay designed by each team. The submitted abstract should contain content that aligns with the content specified in the abstract section of the full essay'
    },
    {
      stageTitle: 'Re-registration and Semifinal Stage',
      stageSubtitle: 'Full Essay Submission',
      stageDesc: 'After undergoing judging and scoring phases by the panel of judges, a total of 50 teams with the highest scores will advance to the semifinal stage and are required to submit a full essay. Teams that qualify for the semifinal stage must proceed with the competition and are not allowed to withdraw for any reason. During the semifinal stage, a re-registration process will take place, and participants must pay a re-registration fee of IDR 150,000.00'
    },
    {
      stageTitle: 'Final Stage',
      stageSubtitle: 'Pitch Deck Submission',
      stageDesc: 'The full essays submitted by 50 teams will undergo a judging and scoring process by appointed judges. The top 5 teams with the highest scores will progress to the final stage and are required to submit a pitch deck as a pitching aid during the presentation by the 5 finalists. The pitching session will be conducted offline at the Ganesha campus of the Bandung Institute of Technology, and the top 5 finalists must be present on May 18, 2024.'
    }],
    [{
      stageTitle: 'Registration and Preliminary Stage',
      stageSubtitle: 'Executive Summary Submission',
      stageDesc: 'In this stage, participants are required to create an Executive Summary containing a brief introduction or overview of the details regarding the issues and solutions identified in the given case. Participants are encouraged to provide their initial comprehensive perspectives and insights into their solutions. Participants are advised to write the Executive Summary according to the applicable guidelines.'
    },
    {
      stageTitle: 'Re-registration and Semifinal Stage ',
      stageSubtitle: 'Proposal Submission',
      stageDesc: 'Teams that qualify for the semifinal stage are required to create a Proposal that includes detailed explanations and elaborations of the issues and solutions they have presented during the preliminary round. This phase entails a more in-depth exploration of the specific details of the problem and the solutions offered by the participants. Each team that advances to the semifinal stage is subject to a registration fee of Rp150.000, with the payment period starting from April 17 to April 19, 2024.'
    },
    {
      stageTitle: 'Final Stage',
      stageSubtitle: 'Pitch Deck Submission & Pitching',
      stageDesc: 'The top 5 teams with the highest scores will progress to the final stage and are required to submit a pitch deck as a pitching aid during the presentation by the 5 finalists. The pitching session will be conducted offline at the Ganesha campus of the Bandung Institute of Technology, and the top 5 finalists must be present on May 18, 2024.'
    }],
    [{
      stageTitle: 'Preliminary Phase',
      stageSubtitle: 'Business Model Canvas',
      stageDesc: 'Participants are required to create a business model canvas from the proposed business idea. Participants will be given time within the time frame. After that, participants will submit and will be assessed by the assessor to be selected for the semifinal round'
    },
    {
      stageTitle: 'Semifinal Phase',
      stageSubtitle: 'Business Proposal',
      stageDesc: 'Participants are required to submit a full business plan based on the theme and subtheme of participants\' choices'
    },
    {
      stageTitle: 'Final Phase',
      stageSubtitle: 'Pitch Deck',
      stageDesc: 'Committee will provide the chance for the top 5 finalists to present their business ideas in front of various judges.'
    }]
  ]
  return (
    <div className='overflow-x-hidden font-montserrat'>
        <div className="xl:grid grid-cols-2 gap-[8vw] p-[5vw] pb-0">
            <p className="row-start-1 col-start-1 text-transparent font-bold bg-clip-text ml-auto xl:mr-[3vw] text-center bg-gradient-to-r from-green1 to-green8 text-[36px] md:text-[64px] xl:text-[82px]">Timeline</p>
            <Image
              className='col-start-1 h-[60vw] mt-[25vw] row-start-1 hidden xl:block'
              src={Pot}
              alt="Pot-Image"
            />
            <div className='row-start-1 col-start-2 mt-[4vh] xl:mt-0 ml-[5vw] xl:ml-0'>
                <div className='flex mt-[3.6vh]'>
                    <div className='mt-[1.3vh] h-[1.8vw] aspect-square bg-green8 rounded-full'></div>
                    <div className='ml-[3vw]'>
                        <p className='text-transparent font-bold bg-clip-text bg-green8 text-[18px] xl:text-[24px]'>February 2024</p>
                        <p className='text-transparent bg-clip-text bg-green1 text-[16px] xl:text-[22px]'>NEC Goes to School and University</p>
                    </div>
                </div>
                {timeline[ID].map((time) =>
                  <Timeline key={time.timeTitle} timeTitle={time.timeTitle} timeDesc={time.timeDesc} />
                )}
            </div>
        </div>
        <div className='relative w-screen bg-gradient p-[5vw] mt-[12vh] xl:mt-[-4vh] text-center items-center text-white'>
            <h1 className='font-bold text-[28px] xl:text-[48px] p-[3vw]'>{competition[ID].compeTitle}</h1>
            <p className='px-[6vw] text-[12px] xl:text-[16px] mt-[4vh]'>{competition[ID].compeDesc}</p>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-[4vh] mx-[4vw] mt-[8vh]'>
                {stages[ID].map((stage) =>
                  <Stages key={stage.stageTitle} stageTitle={stage.stageTitle} stageSubtitle={stage.stageSubtitle} stageDesc={stage.stageDesc} />
                )}
            </div>
        </div>
    </div>
  )
}
IYREF.propTypes = {
  ID: PropTypes.number.isRequired
}

export default IYREF
