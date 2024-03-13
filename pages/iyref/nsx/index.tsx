import { StaticImageData } from 'next/image'

import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Timeline from '@src/contexts/IYREF/Compe/Timeline'
import Stages from '@src/contexts/IYREF/Compe/Stages'
// import Footer from '@src/contexts/IYREF/Compe/Footer'
import Hero from '@src/contexts/IYREF/Compe/Hero'
import Theme from '@src/contexts/IYREF/Compe/Theme'

import Background from '@src/assets/Images/IYREF/Compe/Hero/NSX_hero.jpg'

interface HeroProps {
  title: string
  desc: string
  background: StaticImageData
  linkRegister: string
}

interface ThemeProps {
  type: string
  theme: string
  themeDesc?: string
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

// interface FooterProps {
//   registerLink: string
//   guidebookLink: string
//   events: boolean
// }

const NSXPage = (): JSX.Element => {
  const hero: HeroProps = {
    title: 'NEX STEP XChange',
    desc: 'The NEX Sustainable Energy Policy XChange (NEX STEP Xchange) is a collaboration program by New Energy Nexus Indonesia and SRE ITB, designed to provide platforms for young individuals to actively engage and contribute to the development of policies that promote the energy transition in Indonesia. NEX STEP XChange embodies the essential role of the youth as our next generation in driving policy changes crucial for Indonesia’s energy transition.',
    background: Background,
    linkRegister: ''
  }

  const theme: ThemeProps = {
    type: 'NSX',
    theme: 'New Energy Nexus Indonesia',
    themeDesc: 'New Energy Nexus works to support the development of ecosystems that can support the needs of not only innovators, startups, and entrepreneurs, but also other stakeholders in the clean energy and climate solutions sectors.',
    addText: 'Go register your team if you meet the eligibilities below',
    benefits: [
      {
        title: 'University students (Bachelor/Master degree) from West Java, excluding Depok & Bekasi (Students from these two cities can register for the competition held in DKI Jakarta)'
      },
      {
        title: 'Aged 18-30 years old'
      },
      {
        title: 'Have interest in policy-making related to energy transition'
      },
      {
        title: 'Note that only one master degree student is allowed in each team'
      }
    ]
  }

  const timeline: TimelineProps = {
    timeline: [
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
        desc: 'Pitching and Awarding',
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

  // const footer: FooterProps = {
  //   registerLink: 'https://bit.ly/RegisterNSXIYREF24',
  //   guidebookLink: 'https://bit.ly/GuidebookNSXIYREF24',
  //   events: false
  // }

  return (
    <SEO title="IYREF | NSX">
      <Navbar />
      <Hero {...hero} />
      <Theme {...theme} />
      <Timeline {...timeline} />
      <Stages {...stages} />
      {/* <Footer {...footer} /> */}
    </SEO>
  )
}

export default NSXPage
