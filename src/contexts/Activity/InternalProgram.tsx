import Image from 'next/image'
import React from 'react'
import InternalProgram1 from '@src/assets/Images/Activity/InternalProgram/coverInternal.jpg'
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
}

const InternalProgram: React.FC<ProgramProps> = ({ dummyArticles }) => {
  const contents = dummyArticles
    .filter((article) => article.type === 'internal')
    .map((article) => ({
      id: article.id,
      image: `${article.thumbnail}`,
      title: article.title,
      desc: article.caption
    }))

  return (
    <div id="internalProgram" className='h-[1500px] sm:h-[1450px] md:h-[1400px] lg:h-[950px] xl:h-[1050px] flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full bg-[#F0F1F4]'>
        <div className='z-30 shadow bg-white w-11/12 h-11/12 rounded-[10px] m-auto mt-14 flex flex-col items-center py-16 lg:py-7 px-8 space-y-7 lg:space-y-10'>
            <div className='h-auto w-auto m-auto lg:hidden'>
                <Image src={InternalProgram1} alt='internalProgram1'/>
            </div>
            <div className="flex flex-row items-stretch lg:space-x-14">
                <div className='h-full w-full hidden lg:block'>
                    <Image src={InternalProgram1} alt='internalProgram1' layout='responsive' width={500} height={500} />
                </div>
                <div className="flex flex-col font-montserrat">
                    <h1 className='text-center lg:text-left font-gradient font-extrabold text-[28px] lg:text-[36px] xl:text-[48px]'>Internal Program</h1>
                    <h3 className='text-center lg:text-left font-normal text-[13px] xl:text-[16px] text-[#778899]'>The journey of developing strong teamwork</h3>
                    <p className='text-left text-[13px] xl:text-[16px] mt-[30px]'>Internal programs within the Society of Renewable Energy at ITB (Institut Teknologi Bandung) refer to initiatives or activities that are conducted within the organization for its members or stakeholders. These could include workshops, training sessions, or events aimed at enhancing the skills and knowledge of the society&apos;s members in renewable energy-related fields. Internal programs contribute to the professional and personal development of members, fostering a collaborative and learning-oriented environment within the organization.</p>
                </div>
            </div>
            <div className="flex flex-row w-full h-full items-center">
                <h4 className='text-center font-gradient font-extrabold text-[18px] xl:text-[23px] m-auto md:mt-[8px] lg:mt-[5px] xl:mt-[0px] hidden lg:block'>Our Past Events</h4>
                <div className="w-5/6 h-[1px] rounded-full bg-[#89C190] m-auto mt-[20px] hidden lg:block"></div>
            </div>
            <h1 className='text-center font-gradient font-extrabold text-[28px] lg:hidden'>Our Past Events</h1>
            <div className='w-full'>
                <ActivityCarousel contents={contents} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default InternalProgram
