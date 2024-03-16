import { StaticImageData } from 'next/image'

import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/Compe/Hero'
import Theme from '@src/contexts/IYREF/Compe/Theme'
import Timeline from '@src/contexts/IYREF/Compe/Timeline'
import Stages from '@src/contexts/IYREF/Compe/Stages'
import Footer from '@src/contexts/IYREF/Compe/Footer'

import Background from '@src/assets/Images/IYREF/Compe/Hero/BPC_hero.png'

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

interface FooterProps {
  contacts: string[]
  registerLink: string
  guidebookLink: string
  events: boolean
}

const BPCPage = (): JSX.Element => {
  const hero: HeroProps = {
    title: 'Business Plan Competition',
    desc: 'The IYREF Business Plan Competition by SRE ITB targets diploma (D3/D4) and undergraduate (S1) students, fostering creativity, innovation, and entrepreneurial skills. It includes stages like Business Model Canvas development, business proposal preparation, and pitch deck presentations. Ideas are evaluated by experts. The theme is "Pioneering Eco-Entrepreneurs for a Brighter Future," with sub-themes like "Digital Technology," "Agriculture," "Transportation and Mobility," "Clean Energy," and "Service Industry."',
    background: Background,
    linkRegister: 'https://bit.ly/RegistrationBPCIYREF2024'
  }

  const theme: ThemeProps = {
    type: 'BPC',
    theme: 'Pioneering Eco-Entrepreneurs for a Brighter Future: Advancing Innovative Ventures in the Quest for a Sustainable Energy Revolution',
    subtheme: ['Digital Technology (Fintech, AI, IoT, etc)', 'Agriculture', 'Transportation and Mobility', 'Clean Energy', 'Service Industry'],
    addText: '',
    benefits: [
      {
        title: 'For all participants',
        contents: [
          'Free coaching session in each phase',
          'E-certificate'
        ]
      },
      {
        title: 'For Top 5 Finalist',
        contents: [
          'Exclusive 1-on-1 coaching session and mock-up presentation with experienced mentor',
          'Free pass to IYREF Grand Summit'
        ]
      }
    ]
  }

  const timeline: TimelineProps = {
    timeline: [{
      title: '24 Feb - 16 Mar 2024',
      desc: 'Participants Registration',
      startDate: '2024-02-24',
      endDate: '2024-03-16'
    },
    {
      title: '10 - 24 March 2024',
      desc: 'BMC Submission (Preliminary Phase)',
      startDate: '2024-03-10',
      endDate: '2024-03-24'
    },
    {
      title: '23 March 2024',
      desc: 'Coaching Session 1',
      startDate: '2024-03-22',
      endDate: '2024-03-22'
    },
    {
      title: '1 April 2024',
      desc: 'Semifinalist Announcement',
      startDate: '2024-04-01',
      endDate: '2024-04-01'
    },
    {
      title: '2 - 4 April 2024',
      desc: 'Semifinalist Registration (Semifinal Phase)',
      startDate: '2024-04-02',
      endDate: '2024-04-04'
    },
    {
      title: '5 - 22 April 2024',
      desc: 'Business Proposal Submission',
      startDate: '2024-04-05',
      endDate: '2024-04-22'
    },
    {
      title: '18 April 2024',
      desc: 'Coaching Session 2',
      startDate: '2024-04-18',
      endDate: '2024-04-18'
    },
    {
      title: '7 May 2024',
      desc: 'Finalist Announcement',
      startDate: '2024-05-07',
      endDate: '2024-05-07'
    },
    {
      title: '8 - 17 May 2024',
      desc: 'Pitch Deck Submission',
      startDate: '2024-05-08',
      endDate: '2024-05-17'
    },
    {
      title: '14 May 2024',
      desc: 'Coaching Session 3',
      startDate: '2024-05-14',
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
    title: 'Business Plan Competition',
    desc: 'The Business Plan Competition in IYREF 2024 is divided into three main stages: Preliminary, Semifinal, and Final Stage. All participants in the respective stages are required to complete and submit documents or other necessary items at each stage.',
    cards: [
      {
        title: 'Preliminary Stage',
        subtitle: 'Business Model Canvas',
        desc: 'Participants are required to create a business model canvas from the proposed business idea. Participants will be given time within the time frame. After that, participants will submit and will be assessed by the assessor to be selected for the semifinal round.'
      },
      {
        title: 'Semifinal Phase',
        subtitle: 'Business Proposal',
        desc: 'Participants are required to submit a full business plan based on the theme and subtheme of participants’ choices.'
      },
      {
        title: 'Final Stage',
        subtitle: 'Pitch Deck Submission & Pitching',
        desc: 'Committee will provide the chance for the top 5 finalists to present their business ideas in front of various judges.'
      }
    ]
  }

  const footer: FooterProps = {
    contacts: [
      'Talita Lestari (WA : 087728380711 | Email : talitaalestari@gmail.com)',
      'Rahmania Afradiella (WA : 082120827559 | Email : afradiella.alifah@gmail.com)'
    ],
    registerLink: 'https://bit.ly/RegistrationBPCIYREF2024',
    guidebookLink: 'https://bit.ly/GuidebookBPCIYREF2024',
    events: false
  }

  return (
    <SEO title="IYREF ITB | BPC">
      <Navbar />
      <Hero {...hero} />
      <Theme {...theme} />
      <Timeline {...timeline} />
      <Stages {...stages} />
      <Footer {...footer} />
    </SEO>
  )
}

export default BPCPage
