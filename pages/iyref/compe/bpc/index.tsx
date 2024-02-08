import { StaticImageData } from 'next/image'

import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/Compe/Hero'
import Theme from '@src/contexts/IYREF/BPC/Theme'

import Background from '@src/assets/Images/IYREF/Compe/Hero/BPC_hero.png'

interface HeroProps {
  title: string
  desc: string
  background: StaticImageData
  linkRegister: string
}

const BPCPage = (): JSX.Element => {
  const hero: HeroProps = {
    title: 'Business Plan',
    desc: 'The IYREF Business Plan Competition by SRE ITB targets diploma (D3/D4) and undergraduate (S1) students, fostering creativity, innovation, and entrepreneurial skills. It includes stages like Business Model Canvas development, business proposal preparation, and pitch deck presentations. Ideas are evaluated by experts. The theme is "Pioneering Eco-Entrepreneurs for a Brighter Future," with sub-themes like "Digital Technology," "Agriculture," "Transportation and Mobility," "Clean Energy," and "Service Industry."',
    background: Background,
    linkRegister: 'https://docs.google.com/forms/d/e/1FAIpQLSeEvS0M5Bh-NW19aJ0BKOUSMMzUtxXiasdpQA4QjwUlvcdGuQ/viewform'
  }

  return (
    <SEO title="SRE ITB | BPC">
      <Navbar />
      <Hero {...hero} />
      <Theme />
    </SEO>
  )
}

export default BPCPage
