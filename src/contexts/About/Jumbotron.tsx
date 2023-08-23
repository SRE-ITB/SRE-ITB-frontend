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
        <div className='absolute inset-0 flex flex-col items-center justify-center mt-[70px]'>
          <div className='font-[OpenSans-Bold] text-center text-white'>
            <div className='text-[50px] sm:text-[60px] font-extrabold mx-[50px]' style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}>
              About Us
            </div>
            <div className='font-[OpenSans-Regular] text-[20px] sm:text-[30px] mx-[50px] italic' style={{ filter: 'drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.25))' }}>
              Learn more about who we are
            </div>
            <button
              className='mt-[200px] bg-[#FFFFFF] text-[#169470] text-[25px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer'
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
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
