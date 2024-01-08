import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
// import Articles from '@src/contexts/Activity/Article'
// import Photo from '@src/assets/Images/Activity/TownHall.webp'
import Footer from '@src/components/Navigation/Footer'

// const dummyArticles = [
//   {
//     id: '1',
//     thumbnail: Photo.src,
//     title: 'Welcoming Party',
//     date: new Date('2024-01-01'),
//     caption: 'some caption',
//     description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
//     type: 'external',
//     documentation: [
//       { image: Photo.src, desc: 'photo 1' },
//       { image: Photo.src, desc: 'photo 2' },
//       { image: Photo.src, desc: 'photo 3' }
//     ]
//   }
// ]

const Internal: React.FC = () => {
  return (
    <SEO title="SRE ITB | Latest Update">
      <Navbar />
      {/* {dummyArticles.map((article) => (
        <Articles key={article.id} {...article} />
      ))} */}
      <Footer />
    </SEO>
  )
}

export default Internal
