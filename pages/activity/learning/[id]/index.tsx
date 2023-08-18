import Navbar from '@src/components/Navigation/Navbar'
import Article from '@src/contexts/Activity/Article'
import Footer from '@src/components/Navigation/Footer'

const Internal: React.FC = () => {
  return (
    <div className="h-auto relative">
      <Navbar />
      <Article />
      <Footer />
    </div>
  )
}

export default Internal
