import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import IYREF from '@src/contexts/IYREF/IYREF'

const Internal: React.FC = () => {
  return (
    <SEO title="SRE ITB | IYREF">
      <Navbar />
      <IYREF ID={0} />
    </SEO>
  )
}

export default Internal
