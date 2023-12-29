import Header from '@src/assets/Images/Jumbotron/AboutUs.webp'

const Jumbotron = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Header.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  }

  const handleScroll = (sectionId: string): void => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full' style={backgroundImageStyle}>
        <div className='w-full h-full opacity-50 bg-[#000000]'></div>
        <div className='absolute inset-0 justify-center items-center md:items-start flex flex-col md:ml-[200px]'>
          <div className='font-montserrat text-center md:text-left text-white'>
            <h1 className='italic xl:text-[48px] md:text-[40px] text-[32px] font-bold leading-[60px]'>
              About Us
            </h1>
            <h2 className='italic xl:text-[24px] md:text-[22px] font-normal text-[20px]'>
              A youth organization that focused in<br />
              Renewable Energy sector.
            </h2>
            <h3 className='italic font-normal text-[18px] mt-[30px]'>
              #RElevatingSREITB
            </h3>
            <button
              className='font-extrabold mt-[50px] bg-[#169470] text-[#FFFFFF] xl:text-[24px] md:text-[22px] text-[20px] px-[50px] py-[5px] rounded-full hover:outline hover:outline-3 transition-all cursor-pointer'
              onClick={() => handleScroll('about')}>
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
