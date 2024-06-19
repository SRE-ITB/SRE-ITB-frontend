import Carousel from '@src/components/Carousel/BookletCarousel'

// Assets
import Leaf from '@src/assets/Images/Illustration/Leaf.png'
import Engineering from '@src/assets/Images/Article/Booklet/Engineering.jpg'
import Consulting from '@src/assets/Images/Article/Booklet/Consulting.jpg'
import LawPolicy from '@src/assets/Images/Article/Booklet/LawPolicy.jpg'
import FinanceMarketing from '@src/assets/Images/Article/Booklet/FinanceMarketing.jpg'
import Research from '@src/assets/Images/Article/Booklet/Research.jpg'
import Founder from '@src/assets/Images/Article/Booklet/Founder.jpg'

const Booklet = (): JSX.Element => {
  const contents = [
    {
      image: Engineering,
      title: 'Engineering',
      link: 'engineering'
    },
    {
      image: Consulting,
      title: 'Consulting',
      link: 'consulting'
    },
    {
      image: LawPolicy,
      title: 'Law & Policy',
      link: 'law-policy'
    },
    {
      image: FinanceMarketing,
      title: 'Finance & Marketing',
      link: 'finance-marketing'
    },
    {
      image: Research,
      title: 'Research',
      link: 'research'
    },
    {
      image: Founder,
      title: 'Founder',
      link: 'founder'
    }
  ]

  return (
    <div id="about" className='flex flex-col items-center justify-center text-center font-montserrat relative w-full overflow-x-hidden '>
      <div className=' mx-[10vw] sm:mx-[20vw] my-28 text-green8 text-[20px]'>
        <h2>
          Career Journey Booklet provides articles about professionals&apos; career paths in the field of green job. Career Journey Booklet is intended to broaden readers&apos; perspectives on career opportunities in green sectors.
        </h2>
      </div>
      <div className='mb-[7vw]'>
        <Carousel contents={contents} />
      </div>
      <div className='flex mb-[7vw]'>
        <div className='mx-auto'><img src={Leaf.src} alt="leaf-icon" className='w-[100px] h-[100px]'></img></div>
      </div>
    </div>
  )
}

export default Booklet
