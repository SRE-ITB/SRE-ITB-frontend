import Header from '@src/assets/Images/Jumbotron/HeaderEnh.webp'

const Jumbotron = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Header.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='relative w-full h-full' style={backgroundImageStyle}>
        <div className='absolute inset-0 flex flex-col items-center justify-center mt-[70px]'>
          <div className='font-[OpenSans-Bold] text-center text-white'>
            <div className='text-[50px] sm:text-[60px] font-extrabold mx-[50px] leading-[60px]' style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}>
              Society Of Renewable Energy
            </div>
            <div className='font-[OpenSans-Regular] text-[20px] sm:text-[30px] mx-[50px] mt-[20px]' style={{ filter: 'drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.25))' }}>
              Institut Teknologi Bandung
            </div>
            <button
              className='mt-[200px] bg-[#FFFFFF] text-[#169470] text-[25px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer'
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}>
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
