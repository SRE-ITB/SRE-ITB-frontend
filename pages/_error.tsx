import Error from '@src/contexts/404/404page'
import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Footer from '@src/components/Navigation/Footer'

const ErrorPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | Error">
      <Navbar e='error' />
      <Error />
      <Footer />
    </SEO>
  )
}

export default ErrorPage
