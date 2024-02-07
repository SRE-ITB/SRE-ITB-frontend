/* eslint-disable @typescript-eslint/comma-dangle */
import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import FooterCompe from '@src/contexts/IYREF/Compe/FooterCompe'
import Events from '@src/contexts/IYREF/Compe/Event'
import Hero from '@src/contexts/IYREF/NEC/Hero'

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

const NECPage = (): JSX.Element => {
  const webinar: WebinarProps = {
    title: 'Webinar : How to Write an Essay',
    desc: 'This webinar is organized as an effort to provide a comprehensive understanding of research essay writing with a focus on the overarching them "The Role of Youth in Advancing Renewable Energy Initiatives." Carrying the webinar theme "How to Write an Essay" the objective is not only to provide guidance on essay writing principles but also to offer insights into the concepts and benefits of renewable energy.',
    date: 'Date : April 5th, 2024',
    time: 'Time : 19.00 WIB - END',
    place: 'Place : Zoom Meeting',
    speaker: 'Speaker : TBA',
    free: 'Only for the top 50 participants',
  }

  const coaching: CoachingProps = {
    title: 'Coaching: How to Pitch',
    desc: 'This coaching session is organized as an effort to provide a thorough understanding of pitch deck composition and pitching techniques. Under the theme "How to Pitch," this webinar aims to offer intensive guidance to the Top 5 (finalists) of NEC 2024 in preparation for their pitching sessions in the final round.',
    date: 'Date : May 7th, 2024',
    time: 'Time : 19.00 WIB - END',
    place: 'Place : Zoom Meeting',
    speaker: 'Speaker : TBA',
    exclusive: 'Only for NEC 2024 finalists',
  }

  return (
    <SEO title="SRE ITB | NEC">
      <Navbar />
      <Hero />
      <Events webinar={webinar} coaching={coaching} />
      <FooterCompe
        contacts={[
          'Jessica (id line : jessicaabdiman)',
          'Andrea (WA : 087776108222)',
        ]}
      />
    </SEO>
  )
}

export default NECPage
