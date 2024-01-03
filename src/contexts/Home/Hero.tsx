import Header from '@src/assets/Images/Jumbotron/HeaderEnh.webp'
import Image from 'next/image'

const Hero = (): JSX.Element => {
  return (
    <div className='h-screen flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full'>
        <Image
          src={Header}
          alt='Header'
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          className='z-[-50]'
        />
        <div className='w-full h-full opacity-75 bg-[#046669]'></div>
        <div className='absolute inset-0 justify-center items-center md:items-start flex flex-col md:ml-[15vw]'>
          <div className='font-montserrat text-center md:text-left text-white relative'>
            <h1 className='italic xl:text-[48px] md:text-[40px] text-[32px] font-bold leading-[40px] md:leading-[60px]'>
              Society Of<br />
              Renewable Energy
            </h1>
            <h2 className='italic xl:text-[24px] md:text-[22px] font-normal text-[20px]'>
              Institut Teknologi Bandung.
            </h2>
            <h3 className='italic font-normal text-[18px] mt-[30px]'>
              #RElevatingSREITB
            </h3>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJoGWnY4bzPAk-bNoB6wXIWBgcMNWxgoPUSl1KSbwZsb4-Sw/viewform" target="_blank" rel="noopener noreferrer">
              <button
               className='font-extrabold mt-[50px] outline outline-2 text-[#FFFFFF] xl:text-[24px] md:text-[22px] text-[20px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer'
              >
              Join Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
