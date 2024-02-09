import type { StaticImageData } from 'next/image'

import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/Compe/Hero'
import Theme from '@src/contexts/IYREF/Compe/Theme'
import Timeline from '@src/contexts/IYREF/Compe/Timeline'
import Stages from '@src/contexts/IYREF/Compe/Stages'
import Events from '@src/contexts/IYREF/Compe/Event'
import Footer from '@src/contexts/IYREF/Compe/Footer'

import Background from '@src/assets/Images/IYREF/Compe/Hero/NEC_hero.png'

interface HeroProps {
  title: string
  desc: string
  background: StaticImageData
  linkRegister: string
}

interface ThemeProps {
  type: string
  theme: string
  subtheme?: string[]
  addText: string
  benefits: Array<{
    title: string
    contents?: string[]
  }>
}

interface StagesProps {
  title: string
  desc: string
  cards: Array<{
    title: string
    subtitle: string
    desc: string
  }>
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

interface TimelineProps {
  timeline: Array<{
    title: string
    desc: string
    startDate: string
    endDate: string
  }>
}

interface FooterProps {
  contacts: string[]
  registerLink: string
  guidebookLink: string
  events: boolean
}

const NECPage = (): JSX.Element => {
  const hero: HeroProps = {
    title: 'National Essay',
    desc: 'The National Essay Competition (NEC) within IYREF targets high school and university students, focusing on essay and pitch deck submissions. Its aim is to enhance problem-solving skills, specifically in renewable energy. Participants explore the theme "The Role of Youth in Advancing Renewable Energy Initiatives," with sub-themes like "Energy Intermittency," "Inclusivity in Energy Access," and "Integration of Renewable Energy in Youth Curriculum."',
    background: Background,
    linkRegister: 'https://bit.ly/RegistrationNEC2024'
  }

  const theme: ThemeProps = {
    type: 'NEC',
    theme: 'The Role of Youth in Advancing Renewable Energy Initiatives',
    subtheme: [
      'Energy Intermittency',
      'Inclusivity in Energy Access',
      'Integration of Renewable Energy in Youth Curriculum'
    ],
    addText: 'All competition participants are eligible for a complimentary review of their abstract by professional judges',
    benefits: [
      {
        title: 'For Top 50 finalist',
        contents: [
          'FREE Webinar Session : How To Write an Essay',
          'E-Certificates for all participants'
        ]
      },
      {
        title: 'For Top 5 Finalist',
        contents: [
          'All Top 50’s Benefits',
          'EXCLUSIVE Coaching Session : How To Pitch'
        ]
      }
    ]
  }

  const timeline: TimelineProps = {
    timeline: [{
      title: 'February 2024',
      desc: 'NEC Goes to School and University',
      startDate: '2024-02-01',
      endDate: '2024-02-29'
    },
    {
      title: '24 Feb - 9 Mar 2024',
      desc: 'Registation and Abstract Submission',
      startDate: '2024-02-24',
      endDate: '2024-03-09'
    },
    {
      title: '3 April 2024',
      desc: 'Top 50 Finalist Announcement',
      startDate: '2024-04-03',
      endDate: '2024-04-03'
    },
    {
      title: '3 - 5 April 2024',
      desc: 'Top 50 Finalist Registration',
      startDate: '2024-04-03',
      endDate: '2024-04-05'
    },
    {
      title: '5 April 2024',
      desc: 'Webinar: How to Write an Essay',
      startDate: '2024-04-05',
      endDate: '2024-04-05'
    },
    {
      title: '16 - 22 April 2024',
      desc: 'Essay Submission',
      startDate: '2024-04-16',
      endDate: '2024-04-22'
    },
    {
      title: '5 May 2024',
      desc: 'Top 5 Finalist Announcement',
      startDate: '2024-05-05',
      endDate: '2024-05-05'
    },
    {
      title: '7 May 2024',
      desc: 'TM and Coaching Session',
      startDate: '2024-05-07',
      endDate: '2024-05-07'
    },
    {
      title: '11 - 14 May 2024',
      desc: 'Pitch Deck Submission',
      startDate: '2024-05-11',
      endDate: '2024-05-14'
    },
    {
      title: '18 May 2024',
      desc: 'Pitching and Awarding',
      startDate: '2024-05-18',
      endDate: '2024-05-18'
    }]
  }

  const stages: StagesProps = {
    title: 'National Essay Competition',
    desc: 'The National Essay Competition in IYREF 2024 is divided into three main stages: Preliminary, Semifinal, and Final Stage. All participants in the respective stages are required to complete and submit documents or other necessary items at each stage.',
    cards: [
      {
        title: 'Registration and Preliminary Stage',
        subtitle: 'Abstract Submission',
        desc: 'The initial phase of NEC requires participants to submit an abstract of the essay designed by each team. The submitted abstract should contain content that aligns with the content specified in the abstract section of the full essay.'
      },
      {
        title: 'Re-registration and Semifinal Stage',
        subtitle: 'Full Essay Submission',
        desc: 'After undergoing judging and scoring phases by the panel of judges, a total of 50 teams with the highest scores will advance to the semifinal stage and are required to submit a full essay. Teams that qualify for the semifinal stage must proceed with the competition and are not allowed to withdraw for any reason. During the semifinal stage, a re-registration process will take place, and participants must pay a re-registration fee of IDR 150,000.00.'
      },
      {
        title: 'Final Stage',
        subtitle: 'Pitch Deck Submission',
        desc: 'The full essays submitted by 50 teams will undergo a judging and scoring process by appointed judges. The top 5 teams with the highest scores will progress to the final stage and are required to submit a pitch deck as a pitching aid during the presentation by the 5 finalists. The pitching session will be conducted offline at the Ganesha campus of the Bandung Institute of Technology, and the top 5 finalists must be present on May 18, 2024.'
      }
    ]
  }

  const webinar: WebinarProps = {
    title: 'Webinar : How to Write an Essay',
    desc: 'This webinar is organized as an effort to provide a comprehensive understanding of research essay writing with a focus on the overarching them "The Role of Youth in Advancing Renewable Energy Initiatives." Carrying the webinar theme "How to Write an Essay" the objective is not only to provide guidance on essay writing principles but also to offer insights into the concepts and benefits of renewable energy.',
    date: 'Date : April 5th, 2024',
    time: 'Time : 19.00 WIB - END',
    place: 'Place : Zoom Meeting',
    speaker: 'Speaker : TBA',
    free: 'Only for the top 50 participants'
  }

  const coaching: CoachingProps = {
    title: 'Coaching: How to Pitch',
    desc: 'This coaching session is organized as an effort to provide a thorough understanding of pitch deck composition and pitching techniques. Under the theme "How to Pitch," this webinar aims to offer intensive guidance to the Top 5 (finalists) of NEC 2024 in preparation for their pitching sessions in the final round.',
    date: 'Date : May 7th, 2024',
    time: 'Time : 19.00 WIB - END',
    place: 'Place : Zoom Meeting',
    speaker: 'Speaker : TBA',
    exclusive: 'Only for NEC 2024 finalists'
  }

  const footer: FooterProps = {
    contacts: [
      'Jessica (ID Line : jessicaabdiman)',
      'Andrea (WA : 087776108222)'
    ],
    registerLink: 'https://bit.ly/RegistrationNEC2024',
    guidebookLink: 'https://bit.ly/GuidebookNEC2024',
    events: true
  }

  return (
    <SEO title="SRE ITB | NEC">
      <Navbar />
      <Hero {...hero} />
      <Theme {...theme} />
      <Timeline {...timeline} />
      <Stages {...stages} />
      <Events webinar={webinar} coaching={coaching} />
      <Footer {...footer} />
    </SEO>
  )
}

export default NECPage
