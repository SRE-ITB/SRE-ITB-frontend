import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Comingsoon from '@src/contexts/ComingSoon/ComingSoon'

const StudentPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | Student">
      <Navbar />
      <Comingsoon />
    </SEO>
  )
}

export default StudentPage
