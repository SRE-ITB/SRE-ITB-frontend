import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Articles from '@src/contexts/Activity/Article'
import Footer from '@src/components/Navigation/Footer'
import Photo from '@src/assets/Images/Activity/TownHall.webp'

const Internal: React.FC = () => {
  const dummyArticles = [
    {
      id: 1,
      thumbnail: Photo.src,
      title: 'Welcoming Party',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'some caption',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'external',
      documentation: [
        { url: Photo.src, title: 'photo 1' },
        { url: Photo.src, title: 'photo 2' },
        { url: Photo.src, title: 'photo 3' }
      ]
    }
  ]
  return (
    <SEO title="SRE ITB | Article">
      <Navbar/>
      <Articles {...dummyArticles[0]} />
      <Footer />
    </SEO>
  )
}

export default Internal
