import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/Activity/Hero'
import Programs from '@src/contexts/Activity/Programs'

import InternalProgram1 from '@src/assets/Images/Activity/InternalProgram/welcomingParty.jpg'
import ExternalProgram1 from '@src/assets/Images/Activity/ExternalProgram/Career talks (1).jpg'
import ExternalProgram2 from '@src/assets/Images/Activity/ExternalProgram/visit to necsc (1).jpg'
import LearningProgram1 from '@src/assets/Images/Activity/Learning/REview (1).png'
import LearningProgram2 from '@src/assets/Images/Activity/Learning/SkillTraining.jpg'
import Project1 from '@src/assets/Images/Activity/Project/PVInstallation.jpg'
import Project2 from '@src/assets/Images/Activity/Project/SREmpathy (2).jpg'
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

const ActivityPage = (): JSX.Element => {
  const dummyArticles = [
    {
      id: 1,
      thumbnail: InternalProgram1.src,
      title: 'Welcoming Party',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'First gathering event to welcome the new members by doing fun games to get to know each other, also introducing one year journey in SRE ITB that will be through together.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'internal',
      documentation: [
        { url: InternalProgram1.src, title: 'photo 1' },
        { url: InternalProgram1.src, title: 'photo 2' },
        { url: InternalProgram1.src, title: 'photo 3' }
      ]
    },
    {
      id: 2,
      thumbnail: InternalProgram1.src,
      title: 'Welcoming Party',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'First gathering event to welcome the new members by doing fun games to get to know each other, also introducing one year journey in SRE ITB that will be through together.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'internal',
      documentation: [
        { url: InternalProgram1.src, title: 'photo 1' },
        { url: InternalProgram1.src, title: 'photo 2' },
        { url: InternalProgram1.src, title: 'photo 3' }
      ]
    },
    {
      id: 3,
      thumbnail: InternalProgram1.src,
      title: 'Welcoming Party',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'First gathering event to welcome the new members by doing fun games to get to know each other, also introducing one year journey in SRE ITB that will be through together.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'internal',
      documentation: [
        { url: InternalProgram1.src, title: 'photo 1' },
        { url: InternalProgram1.src, title: 'photo 2' },
        { url: InternalProgram1.src, title: 'photo 3' }
      ]
    },
    {
      id: 4,
      thumbnail: InternalProgram1.src,
      title: 'Welcoming Party',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'First gathering event to welcome the new members by doing fun games to get to know each other, also introducing one year journey in SRE ITB that will be through together.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'internal',
      documentation: [
        { url: InternalProgram1.src, title: 'photo 1' },
        { url: InternalProgram1.src, title: 'photo 2' },
        { url: InternalProgram1.src, title: 'photo 3' }
      ]
    },
    {
      id: 5,
      thumbnail: ExternalProgram1.src,
      title: 'Career Talks',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Talk show with some renewable energy experts regarding green jobs.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'external',
      documentation: [
        { url: ExternalProgram1.src, title: 'photo 1' },
        { url: ExternalProgram1.src, title: 'photo 2' },
        { url: ExternalProgram1.src, title: 'photo 3' }
      ]
    },
    {
      id: 6,
      thumbnail: ExternalProgram2.src,
      title: 'Company Visit',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'One day visit to renewable energy related companies to get to know their product and work process.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'external',
      documentation: [
        { url: ExternalProgram2.src, title: 'photo 1' },
        { url: ExternalProgram2.src, title: 'photo 2' },
        { url: ExternalProgram2.src, title: 'photo 3' }
      ]
    },
    {
      id: 7,
      thumbnail: ExternalProgram2.src,
      title: 'Company Visit',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'One day visit to renewable energy related companies to get to know their product and work process.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'external',
      documentation: [
        { url: ExternalProgram2.src, title: 'photo 1' },
        { url: ExternalProgram2.src, title: 'photo 2' },
        { url: ExternalProgram2.src, title: 'photo 3' }
      ]
    },
    {
      id: 8,
      thumbnail: ExternalProgram2.src,
      title: 'Company Visit',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'One day visit to renewable energy related companies to get to know their product and work process.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'external',
      documentation: [
        { url: ExternalProgram2.src, title: 'photo 1' },
        { url: ExternalProgram2.src, title: 'photo 2' },
        { url: ExternalProgram2.src, title: 'photo 3' }
      ]
    },
    {
      id: 9,
      thumbnail: LearningProgram1.src,
      title: 'REview',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Webinar series to learn the fundamentals of renewable energy by inviting some experts in their fields.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'learning',
      documentation: [
        { url: LearningProgram1.src, title: 'photo 1' },
        { url: LearningProgram1.src, title: 'photo 2' },
        { url: LearningProgram1.src, title: 'photo 3' }
      ]
    },
    {
      id: 10,
      thumbnail: LearningProgram2.src,
      title: 'Skill Training',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Soft skill workshop as preparation before the members doing their final project. The workshop always ends with hands on session.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'learning',
      documentation: [
        { url: LearningProgram2.src, title: 'photo 1' },
        { url: LearningProgram2.src, title: 'photo 2' },
        { url: LearningProgram2.src, title: 'photo 3' }
      ]
    },
    {
      id: 11,
      thumbnail: LearningProgram2.src,
      title: 'Skill Training',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Soft skill workshop as preparation before the members doing their final project. The workshop always ends with hands on session.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'learning',
      documentation: [
        { url: LearningProgram2.src, title: 'photo 1' },
        { url: LearningProgram2.src, title: 'photo 2' },
        { url: LearningProgram2.src, title: 'photo 3' }
      ]
    },
    {
      id: 12,
      thumbnail: LearningProgram2.src,
      title: 'Skill Training',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Soft skill workshop as preparation before the members doing their final project. The workshop always ends with hands on session.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'learning',
      documentation: [
        { url: LearningProgram2.src, title: 'photo 1' },
        { url: LearningProgram2.src, title: 'photo 2' },
        { url: LearningProgram2.src, title: 'photo 3' }
      ]
    },
    {
      id: 13,
      thumbnail: Project1.src,
      title: 'PV Installation',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Soft skill workshop as preparation before the members doing their final project. The workshop always ends with hands on session.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'project',
      documentation: [
        { url: Project1.src, title: 'photo 1' },
        { url: Project1.src, title: 'photo 2' },
        { url: Project1.src, title: 'photo 3' }
      ]
    },
    {
      id: 14,
      thumbnail: Project2.src,
      title: 'SRE Empathy',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Soft skill workshop as preparation before the members doing their final project. The workshop always ends with hands on session.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'project',
      documentation: [
        { url: Project2.src, title: 'photo 1' },
        { url: Project2.src, title: 'photo 2' },
        { url: Project2.src, title: 'photo 3' }
      ]
    },
    {
      id: 15,
      thumbnail: Project2.src,
      title: 'SRE Empathy',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Soft skill workshop as preparation before the members doing their final project. The workshop always ends with hands on session.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'project',
      documentation: [
        { url: Project2.src, title: 'photo 1' },
        { url: Project2.src, title: 'photo 2' },
        { url: Project2.src, title: 'photo 3' }
      ]
    },
    {
      id: 16,
      thumbnail: Project2.src,
      title: 'SRE Empathy',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Soft skill workshop as preparation before the members doing their final project. The workshop always ends with hands on session.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'project',
      documentation: [
        { url: Project2.src, title: 'photo 1' },
        { url: Project2.src, title: 'photo 2' },
        { url: Project2.src, title: 'photo 3' }
      ]
    }

  ]
  return (
    <SEO title="SRE ITB | Activity">
      <Navbar />
      {/* {dummyArticles.map((article) => (
        <Articles key={article.id} {...article} />
      ))} */}
      <Hero />
      <Programs dummyArticles={dummyArticles} />
      <Footer />
    </SEO>
  )
}

export default ActivityPage
