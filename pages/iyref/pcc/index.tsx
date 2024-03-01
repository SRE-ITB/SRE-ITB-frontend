import { StaticImageData } from 'next/image'

import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Timeline from '@src/contexts/IYREF/Compe/Timeline'
import Stages from '@src/contexts/IYREF/Compe/Stages'
import Footer from '@src/contexts/IYREF/Compe/Footer'
import Events from '@src/contexts/IYREF/Compe/Event'
import Hero from '@src/contexts/IYREF/Compe/Hero'
import Theme from '@src/contexts/IYREF/Compe/Theme'

import Background from '@src/assets/Images/IYREF/Compe/Hero/BCC_hero.png'

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

interface TimelineProps {
  timeline: Array<{
    title: string
    desc: string
    startDate: string
    endDate: string
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

interface FooterProps {
  contacts: string[]
  registerLink: string
  guidebookLink: string
  events: boolean
}

const PCCPage = (): JSX.Element => {
  const hero: HeroProps = {
    title: 'Policy Case',
    desc: 'Policy Case Competition (PCC) is a collaboration event by IYREF 2024 and a clean energy funding start-up, New Energy Nexus Indonesia. Participants will analyze real-world issues, focusing specifically on energy transition policy by formulating strategic policies, conduct research, and present recommendations to expert judges. This competition offers a unique opportunity to showcase policy-making skills, collaborate with peers, and contribute to shaping effective solutions for the challenges of energy transition.',
    background: Background,
    linkRegister: 'https://bit.ly/RegisterPCCIYREF24'
  }

  const theme: ThemeProps = {
    type: 'PCC',
    theme: 'TBA',
    addText: 'Go register your team if you are diploma / university students in: West Java (excluding…)',
    benefits: [
      {
        title: 'Exclusive intimate coaching session for the semifinalist'
      },
      {
        title: 'Free policy-making workshop with policy experts'
      },
      {
        title: 'E-certificate for all participants'
      }
    ]
  }

  const timeline: TimelineProps = {
    timeline: [
      {
        title: '21 March 2024',
        desc: 'Instagram Showcase',
        startDate: '2024-03-21',
        endDate: '2024-03-21'
      },
      {
        title: '21 Mar - 17 Apr 2024',
        desc: 'Registration',
        startDate: '2024-03-21',
        endDate: '2024-04-17'
      },
      {
        title: '1 May 2024',
        desc: 'Proposal Submission',
        startDate: '2024-05-01',
        endDate: '2024-05-01'
      },
      {
        title: '9 May 2024',
        desc: 'Finalist Announcement',
        startDate: '2024-05-09',
        endDate: '2024-05-09'
      },
      {
        title: '10 May - 12 May 2024',
        desc: 'Coaching',
        startDate: '2024-05-10',
        endDate: '2024-05-12'
      },
      {
        title: '17 May 2024',
        desc: 'Pitch Deck Submission',
        startDate: '2024-05-17',
        endDate: '2024-05-17'
      },
      {
        title: '18 May 2024',
        desc: 'Workshop, Pitching, and Awarding',
        startDate: '2024-05-18',
        endDate: '2024-05-18'
      }
    ]
  }

  const stages: StagesProps = {
    title: 'Policy Case Competition',
    desc: 'The IYREF x New Energy Nexus Policy Case Competition 2024 is divided into two main stages: Preliminary and Final Stage. All participants in the respective stages are required to complete and submit documents or other necessary items at each stage.',
    cards: [
      {
        title: 'Preliminary Stage',
        subtitle: 'Paper submission',
        desc: 'In this stage, participants are required to create a Paper containing a detailed solution in the given case study. Participants are encouraged to provide their comprehensive perspectives and insights into their solutions. Participants are advised to write the Paper according to the applicable guidelines.'
      },
      {
        title: 'Final Stage',
        subtitle: 'Pitch Deck Submission & Pitching',
        desc: 'The top 5 teams with the highest scores will progress to the final stage and are required to submit a pitch deck as a pitching aid before the presentation by the 5 finalists. There will be some coaching sessions from New Energy Nexus Indonesia to provide the participants with some materials that will help participants during pitch deck making. The pitching session will be conducted offline at the Ganesha campus of the Bandung Institute of Technology, and the top 5 finalists must be present on May 18, 2024.'
      }
    ]
  }

  const webinar: WebinarProps = {
    title:
      'TBA',
    desc: 'TBA',
    date: 'TBA',
    time: 'TBA',
    place: 'TBA',
    speaker: 'TBA',
    free: 'TBA'
  }

  const coaching: CoachingProps = {
    title: 'TBA',
    desc: 'TBA',
    date: 'TBA',
    time: 'TBA',
    place: 'TBA',
    speaker: 'TBA',
    exclusive: 'TBA'
  }

  const footer: FooterProps = {
    contacts: [
      'TBA',
      'TBA'
    ],
    registerLink: 'https://bit.ly/RegisterPCCIYREF24',
    guidebookLink: 'https://bit.ly/GuidebookPCCIYREF24',
    events: true
  }

  return (
    <SEO title="IYREF | PCC">
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

export default PCCPage
