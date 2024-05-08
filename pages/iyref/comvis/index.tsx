import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/IYREF/Comvis/Hero'
import Benefits from '@src/contexts/IYREF/Comvis/Benefits'
import Footer from '@src/contexts/IYREF/Comvis/Footer'
import About from '@src/contexts/IYREF/Comvis/About'

interface FooterProps {
  contacts: string[]
  registerLink: string
  feedbackLink: string
  text: string
}

const ComvisPage = (): JSX.Element => {
  const footer: FooterProps = {
    contacts: [
      'id line: zakyklr | WA: 0881022801565',
      'id line: srhwydyota | WA: 085158566235',
      'id line: alyyhnazm | WA: 085161265963'
    ],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdaExMF_VpL6CwqAcMZHOtFt-vvW2OGqY2yuTk7oHFv_JJgsA/viewform',
    feedbackLink: 'https://forms.gle/97vJxakzKb3Dr4gD9',
    text: "Don't miss out on this unparalleled opportunity to expand your horizons and take the first step towards a successful career. Register now to secure your spot at our Company Visit event!"
  }

  return (
    <SEO title="IYREF | ComVis">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Footer {...footer}/>
    </SEO>
  )
}

export default ComvisPage
