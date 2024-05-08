import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Ongoing from '@src/contexts/IYREF/Ongoing'

interface OnGoingProps {
  events: EventsProps[]
}

interface EventsProps {
  title: string
  href: string
}

const onGoingData: OnGoingProps = {
  events: [
    {
      title: 'Company Visit',
      href: '/iyref/comvis'
    },
    {
      title: 'Business Case Competition',
      href: '/iyref/bcc'
    },
    {
      title: 'Business Plan Competition',
      href: '/iyref/bpc'
    },
    {
      title: 'National Essay Competition',
      href: '/iyref/nec'
    },
    {
      title: 'Policy Case Competition',
      href: '/iyref/pcc'
    }
  ]
}

const IYREFPage = (): JSX.Element => {
  return (
    <SEO title="IYREF">
      <Navbar />
      <Ongoing {...onGoingData} />
    </SEO>
  )
}

export default IYREFPage
