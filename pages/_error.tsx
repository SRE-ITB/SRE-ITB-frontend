import ErrorPage from '@src/contexts/404/404page'
import SEO from '@src/components/SEO'

const Error: React.FC = () => {
  return (
    <SEO title="SRE ITB | Error">
      <ErrorPage />
    </SEO>
  )
}

export default Error
