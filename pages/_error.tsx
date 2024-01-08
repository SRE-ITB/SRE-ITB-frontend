import ErrorPage from '@src/contexts/404/404page'
import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Footer from '@src/components/Navigation/Footer'

const Error: React.FC = () => {
  return (
    <SEO title="SRE ITB | Error">
      <Navbar e='error' />
      <ErrorPage />
      <Footer />
    </SEO>
  )
}

export default Error
