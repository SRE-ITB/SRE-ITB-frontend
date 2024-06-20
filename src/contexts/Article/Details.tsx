import Image from 'next/image'
import Card from '@src/components/Card/ArticleCard'

// Assets
// import Leaf from '@src/assets/Images/Illustration/Leaf.png'

interface DetailsCard {
  image: any
  source: string
  position: string
  paragraph: string
}

interface SectionProps {
  header: any
  title: string
}

interface DetailsProps {
  section: SectionProps
  contents: DetailsCard[]
}

const Details = ({ section, contents }: DetailsProps): JSX.Element => {
  return (
    <div className='flex flex-col items-center text-center font-montserrat relative min-h-screen overflow-x-hidden'>
      <div className='w-[90vw]'>
        <div className='w-full h-[20vw] max-h-[300px] mt-28 relative'>
          <Image
            src={section.header}
            alt='header'
            placeholder='blur'
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className='text-left my-8'>
          <h2 className='font-bold text-[30px]'>
            {section.title}
          </h2>
        </div>
        <div>
          {contents.map((content, index) => (
            <Card
              key={index}
              image={content.image}
              source={content.source}
              position={content.position}
              paragraph={content.paragraph}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Details
