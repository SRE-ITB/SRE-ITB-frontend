import Image from 'next/image'
import React from 'react'
import ActivityCarousel from '@src/components/Carousel/ActivityCarousel'
import Project1 from '@src/assets/Images/Activity/Project/coverProject.png'

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

const Project: React.FC<ProgramProps> = ({ dummyArticles }) => {
  const contents = dummyArticles
    .filter((article) => article.type === 'project')
    .map((article) => ({
      id: article.id,
      image: `${article.thumbnail}`,
      title: article.title,
      desc: article.caption
    }))

  return (
    <div id="project" className='h-[1500px] sm:h-[1450px] md:h-[1400px] lg:h-[950px] xl:h-[1050px] flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full bg-[#F0F1F4]'>
        <div className='z-30 shadow bg-white w-11/12 h-11/12 rounded-[10px] m-auto mt-14 flex flex-col items-center py-16 lg:py-7 px-8 space-y-7 lg:space-y-10'>
            <div className='h-auto w-auto m-auto lg:hidden'>
                <Image src={Project1} alt='project1' />
            </div>
            <div className="flex flex-row items-stretch lg:space-x-14">
                <div className='h-full w-full hidden lg:block'>
                    <Image src={Project1} alt='project1' layout='responsive' width={400} height={400}/>
                </div>
                <div className="flex flex-col font-montserrat">
                    <h1 className='text-center lg:text-left font-gradient font-extrabold text-[28px] lg:text-[36px] xl:text-[48px]'>Project</h1>
                    <h3 className='text-center lg:text-left font-normal text-[13px] xl:text-[16px] text-[#778899]'>The journey of giving back to nature</h3>
                    <p className='text-left text-[13px] xl:text-[16px] mt-[30px]'>Projects within the Society of Renewable Energy at ITB are specific undertakings that align with the organization&apos;s goals and contribute to its mission. These projects could range from research initiatives and prototype development to community-based projects that promote the practical application of renewable energy solutions. Projects play a crucial role in translating theoretical knowledge into real-world impact, allowing society members to apply their skills and contribute to the advancement of renewable energy in both academic and practical settings.</p>
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

export default Project
