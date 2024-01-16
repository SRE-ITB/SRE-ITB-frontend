import Image from 'next/image'
import ActivityCarousel from '@src/components/Carousel/ActivityCarousel'

interface ProgramProps {
  dummyArticles: Array<{
    id: number
    thumbnail: string
    title: string
    date: Date
    caption: string
    description: string
    type: string
    documentation: Array<{ url: string, title: string }>
  }>
  title: string
  caption: string
  desc: string
  image: any
  type: string
}

const Program = ({
  dummyArticles,
  title,
  caption,
  desc,
  image,
  type
}: ProgramProps): JSX.Element => {
  const contents = dummyArticles
    .filter((article) => article.type === type)
    .map((article) => ({
      id: article.id,
      image: `${article.thumbnail}`,
      title: article.title,
      desc: article.caption
    }))

  return (
    <div id="internalProgram" className='h-auto flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full bg-[#F0F1F4] pb-[10px]'>
        <div className='z-30 shadow bg-white w-11/12 h-11/12 rounded-[10px] m-auto mt-[5vw] flex flex-col items-center py-16 lg:py-7 px-8 space-y-7 lg:space-y-10'>
            <div className='lg:flex-row flex flex-col lg:items-start items-center lg:gap-[5vw] gap-[50px]'>
              <div className='w-[70vw] h-[70vw] md:w-[400px] md:h-[400px] relative flex-shrink-0'>
                  <Image src={image} alt={title} layout="fill" objectFit="cover" placeholder='blur' />
              </div>
              <div className="font-montserrat">
                  <h1 className='text-center lg:text-left font-gradient font-extrabold text-[28px] lg:text-[36px] xl:text-[48px]'>{title}</h1>
                  <h3 className='text-center lg:text-left font-normal text-[14px] xl:text-[16px] text-[#778899]'>{caption}</h3>
                  <p className='text-center sm:text-left text-[14px] xl:text-[16px] mt-[30px]'>{desc}</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-full items-center">
                <h4 className='text-center font-gradient font-extrabold text-[18px] xl:text-[23px] m-auto md:mt-[8px] lg:mt-[5px] xl:mt-[0px] hidden lg:block'>Our Past Events</h4>
                <div className="w-5/6 h-[1px] rounded-full bg-[#89C190] m-auto mt-[20px] hidden lg:block"></div>
            </div>
            <h1 className='text-center font-gradient font-extrabold text-[23px] lg:hidden'>Our Past Events</h1>
            <div className='w-full'>
                <ActivityCarousel contents={contents} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Program
