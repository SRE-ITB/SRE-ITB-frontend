/* eslint-disable @typescript-eslint/comma-dangle */
import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Comingsoon from '@src/contexts/ComingSoon/ComingSoon'
import TImeline from '@src/contexts/IYREF/Compe/Timeline'
import Stages from '@src/contexts/IYREF/Compe/Stages'
import FooterCompe from '@src/contexts/IYREF/Compe/FooterCompe'
import Events from '@src/contexts/IYREF/Compe/Event'
import Hero from '@src/contexts/IYREF/BCC/Hero'
import Theme from '@src/contexts/IYREF/BCC/Theme'

interface TimelineProps {
  timeline: LineProps[]
}

interface LineProps {
  title: string
  desc: string
}

interface CompeProps {
  title: string
  desc: string
  cards: CardProps[]
}

interface CardProps {
  title: string
  subtitle: string
  desc: string
}

interface WebinarProps {
  title: string
  desc: string
  date: string
  time: string
  place: string
  speaker: string
  free: string
}

interface CoachingProps {
  title: string
  desc: string
  date: string
  time: string
  place: string
  speaker: string
  exclusive: string
}

const BCCPage = (): JSX.Element => {
  const timeline: TimelineProps = {
    timeline: [{
      title: '24 Feb - 9 Mar 2024',
      desc: 'Open Registration'
    },
    {
      title: '9 March 2024',
      desc: 'Free Webinar'
    },
    {
      title: '17 March 2024',
      desc: 'Case Distribution'
    },
    {
      title: '17 - 31 March 2024',
      desc: 'Preliminary Phase (Executive Summary)'
    },
    {
      title: '17 - 19 April 2024',
      desc: 'Semifinal Registration'
    },
    {
      title: '17 Apr - 1 May 2024',
      desc: 'Semifinal Phase (Proposal)'
    },
    {
      title: '28 April 2024',
      desc: 'Coaching 1'
    },
    {
      title: '10 - 17 May 2024',
      desc: 'Final Phase (Pitch Deck)'
    },
    {
      title: '15 May 2024',
      desc: 'Coaching 2'
    },
    {
      title: '18 May 2024',
      desc: 'Pitching and Awarding'
    }]
  }
  const stages: CompeProps = {
    title: 'Business Case Competition',
    desc: 'The IYREF Business Case Competition 2024 is divided into three main stages: Preliminary, Semifinal, and Final Stage. All participants in the respective stages are required to complete and submit documents or other necessary items at each stage.',
    cards: [
      {
        title: 'Registration and Preliminary Stage',
        subtitle: 'Executive Summary Submission',
        desc: 'In this stage, participants are required to create an Executive Summary containing a brief introduction or overview of the details regarding the issues and solutions identified in the given case. Participants are encouraged to provide their initial comprehensive perspectives and insights into their solutions. Participants are advised to write the Executive Summary according to the applicable guidelines.'
      },
      {
        title: 'Re-registration and Semifinal Stage ',
        subtitle: 'Proposal Submission',
        desc: 'Teams that qualify for the semifinal stage are required to create a Proposal that includes detailed explanations and elaborations of the issues and solutions they have presented during the preliminary round. This phase entails a more in-depth exploration of the specific details of the problem and the solutions offered by the participants. Each team that advances to the semifinal stage is subject to a registration fee of Rp150.000, with the payment period starting from April 17 to April 19, 2024.'
      },
      {
        title: 'Final Stage',
        subtitle: 'Pitch Deck Submission & Pitching',
        desc: 'The top 5 teams with the highest scores will progress to the final stage and are required to submit a pitch deck as a pitching aid during the presentation by the 5 finalists. The pitching session will be conducted offline at the Ganesha campus of the Bandung Institute of Technology, and the top 5 finalists must be present on May 18, 2024.'
      }
    ],
  }
  const webinar: WebinarProps = {
    title:
      'Webinar “Navigating BCC Strategies for Successful Pitch Deck Development”',
    desc: 'Join us for an enriching webinar designed to equip you with a comprehensive understanding of BCC 101. Dive into the strategy of problem definition in BCC case, learn the craft of creating an impactful pitch deck, and unravel the winning strategies for a Business Case Competition. Guided by a seasoned speaker, participants can get a review of a good pitch deck, ensuring a thorough and insightful learning experience.',
    date: 'Date : March 9th, 2024',
    time: 'Time : 12.00 WIB - END',
    place: 'Place : Zoom Meeting',
    speaker: 'Speaker : TBA',
    free: 'Only for BCC IYREF Participants',
  }

  const coaching: CoachingProps = {
    title: 'Coaching Sessions: Proposal Evaluation and Mock Up Pitching',
    desc: 'The coaching sessions are conducted via Zoom Meeting where participants engage with their coaches. These dedicated sessions serve as a platform for constructive critiques and suggestions from the coaches. With two sessions, the coaching process will comprehensively evaluate both the proposal and the mock-up pitching, ensuring participants receive targeted guidance and refinement for their competition journey.',
    date: 'Date : April 28th and May 15th 2024',
    time: 'Time : 18.30 WIB - END',
    place: 'Place : Zoom Meeting',
    speaker: '',
    exclusive: 'Only for BCC semi finalists and finalists',
  }

  return (
    <SEO title="SRE ITB | BCC">
      <Navbar />
      <Hero />
      <Theme />
      <TImeline timeline={timeline.timeline} />
      <Stages stages={stages} />
      <Events webinar={webinar} coaching={coaching} />
      <FooterCompe
        contacts={[
          'Angelline Grace Olivia (ID Line : 95kitsch )',
          'Dzakiy Muhammad Urwah (ID Line : dzakiy1235)',
        ]}
      />
    </SEO>
  )
}

export default BCCPage
