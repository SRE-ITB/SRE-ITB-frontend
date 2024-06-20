import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/Article/Hero'
import Booklet from '@src/contexts/Article/Booklet'
import Footer from '@src/components/Navigation/Footer'

const ArticlePage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | Article">
      <Navbar />
      <Hero />
      <Booklet />
      <Footer />
    </SEO>
  )
}

export default ArticlePage
