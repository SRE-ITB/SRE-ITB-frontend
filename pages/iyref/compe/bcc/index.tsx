/* eslint-disable @typescript-eslint/comma-dangle */
import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Comingsoon from '@src/contexts/ComingSoon/ComingSoon'
import FooterCompe from '@src/contexts/IYREF/Compe/FooterCompe'

const BCCPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | BCC">
      <Navbar />
      <Comingsoon />
      <FooterCompe
        contacts={[
          'Jessica (id line : jessicaabdiman)',
          'Andrea (WA : 087776108222)',
        ]}
      />
    </SEO>
  )
}

export default BCCPage
