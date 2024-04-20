import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
// import Hero from '@src/contexts/IYREF/Comvis/Hero'
// import Benefits from '@src/contexts/IYREF/Comvis/Benefits'
// import Footer from '@src/contexts/IYREF/Comvis/Footer'
// import About from '@src/contexts/IYREF/Comvis/About'
import ComingSoon from '@src/contexts/ComingSoon/ComingSoon'

// interface FooterProps {
//   contacts: string[]
//   registerLink: string
//   text: string
// }

const ComvisPage = (): JSX.Element => {
  // const footer: FooterProps = {
  //   contacts: [
  //     'id line: zakyklr | WA: 0881022801565',
  //     'id line: srhwydyota | WA: 085158566235',
  //     'id line: alyyhnazm | WA: 085161265963'
  //   ],
  //   registerLink: '',
  //   text: "Don't miss out on this unparalleled opportunity to expand your horizons and take the first step towards a successful career. Register now to secure your spot at our Company Visit event!"
  // }

  return (
    <SEO title="IYREF | ComVis">
      <Navbar />
      <ComingSoon />
      {/* <Hero />
      <About />
      <Benefits />
      <Footer {...footer}/> */}
    </SEO>
  )
}

export default ComvisPage
