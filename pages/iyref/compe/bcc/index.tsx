/* eslint-disable @typescript-eslint/comma-dangle */
import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import FooterCompe from '@src/contexts/IYREF/Compe/FooterCompe'
import Events from '@src/contexts/IYREF/Compe/Event'
import Hero from '@src/contexts/IYREF/BCC/Hero'
import Theme from '@src/contexts/IYREF/BCC/Theme'

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
