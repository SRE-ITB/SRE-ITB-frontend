import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/Activity/Hero'
import Programs from '@src/contexts/Activity/Programs'
import Footer from '@src/components/Navigation/Footer'

import Gathering from '@src/assets/Images/Activity/InternalProgram/Gathering.webp'
import OnBoarding from '@src/assets/Images/Activity/InternalProgram/OnBoarding.webp'
import TownHall from '@src/assets/Images/Activity/InternalProgram/TownHall.webp'

import School from '@src/assets/Images/Activity/ExternalProgram/School.webp'
import SREnclusivity from '@src/assets/Images/Activity/ExternalProgram/SREnclusivity.webp'
import BonusGede from '@src/assets/Images/Activity/ExternalProgram/BonusGede.webp'
import CareerTalks from '@src/assets/Images/Activity/ExternalProgram/CareerTalks.webp'
import CompanyVisit from '@src/assets/Images/Activity/ExternalProgram/CompanyVisit.webp'

import REview from '@src/assets/Images/Activity/LearningProgram/REview.webp'
import IEEE from '@src/assets/Images/Activity/LearningProgram/IEEE.webp'
import SkillTraining from '@src/assets/Images/Activity/LearningProgram/SkillTraining.webp'

import REProject from '@src/assets/Images/Activity/Project/REProject.webp'
import PVPekayon from '@src/assets/Images/Activity/Project/PVPekayon.webp'
import SocialProject from '@src/assets/Images/Activity/Project/SocialProject.webp'

const ActivityPage = (): JSX.Element => {
  const dummyArticles = [
    {
      id: 1,
      thumbnail: Gathering.src,
      title: 'Welcoming Party',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'First gathering event to welcome the new members by doing fun games to get to know each other, also introducing one year journey in SRE ITB that will be through together.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'internal',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 2,
      thumbnail: OnBoarding.src,
      title: 'Staff Onboarding',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'The first meeting for all of SRE ITB management team where each division will have their own session to introduce themselves with their own uniqueness.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'internal',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 3,
      thumbnail: TownHall.src,
      title: 'Town Hall Meeting',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Meeting attended by both management team and members to strengthen our bond and as the progress report regarding SRE ITB programs that had been done.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'internal',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 4,
      thumbnail: School.src,
      title: 'SRE Goes to School',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'A visit to some schools in Bandung to spread awareness regarding the importance of understanding renewable energy.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'external',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 5,
      thumbnail: SREnclusivity.src,
      title: 'SREnclusivity Week',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'A week full of webinar, panel discussion, competition, and grand seminar.',
      description: 'Jorem ipsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscingpsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      type: 'external',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 6,
      thumbnail: BonusGede.src,
      title: 'BONUS GEDE',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Panel discussion with some policy makers to deliver our concern regarding renewable energy and energy transition.',
      type: 'external',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 7,
      thumbnail: CareerTalks.src,
      title: 'Career Talks',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Talk show with some renewable energy experts regarding green jobs.',
      type: 'external',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 8,
      thumbnail: CompanyVisit.src,
      title: 'Company Visit',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'One day visit to renewable energy related companies to get to know their product and work process.',
      type: 'external',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 9,
      thumbnail: REview.src,
      title: 'REview',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Webinar series to learn the fundamentals of renewable energy by inviting some experts in their fields.',
      type: 'learning',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 10,
      thumbnail: IEEE.src,
      title: 'SRE ITB x IEEE ITB',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Joint classes with IEEE ITB student branch to talk about renewable energy in terms of business. The members learned how to create a renewable energy business model canvas at the hands on session.',
      type: 'learning',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 11,
      thumbnail: SkillTraining.src,
      title: 'Skill Training',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'Soft skill workshop as preparation before the members doing their final project. The workshop always ends with hands on session.',
      type: 'learning',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 12,
      thumbnail: REProject.src,
      title: 'Solar PV Installation Kamojang',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'On July 2022, SRE ITB in collaboration with Tim Gerilya KESDM, installed a 6 kWp solar panel at Kawasan Konservasi Elang Kamojang.',
      type: 'project',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 13,
      thumbnail: PVPekayon.src,
      title: 'Solar PV Installation Pekayon',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'SRE ITB in collaboration with PT Astra International, installed solar pv of 1350 kWp at Kampung Binaan Astra Pekayon, Bekasi.',
      type: 'project',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    },
    {
      id: 14,
      thumbnail: SocialProject.src,
      title: 'SREmpathy for Cianjur',
      // sesuain sama backend
      date: new Date('2024-01-01'),
      caption: 'On November 2022, SRE ITB collected some funds and public lighting to help the residents that were affected by the disaster.',
      type: 'project',
      documentation: [
        { url: Gathering.src, title: 'photo 1' },
        { url: Gathering.src, title: 'photo 2' },
        { url: Gathering.src, title: 'photo 3' }
      ]
    }
  ]
  return (
    <SEO title="SRE ITB | Activity">
      <Navbar />
      <Hero />
      <Programs dummyArticles={dummyArticles} />
      <Footer />
    </SEO>
  )
}

export default ActivityPage
