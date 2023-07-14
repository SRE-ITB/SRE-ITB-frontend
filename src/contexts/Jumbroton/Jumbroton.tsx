import Header from '@src/assets/Images/Jumbroton/HeaderEnh.png'

const Jumbroton = (): JSX.Element => {
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
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <div className='font-[OpenSans-Bold] text-center text-white'>
            <div className='text-[50px] md:text-[60px] mr-[550px] ml-[550px] md:mr-[0px] md:ml-[0px] font-extrabold'>
              Society Of Renewable Energy
            </div>
            <div className='font-[OpenSans-Regular] text-[30px]'>
              Institut Teknologi Bandung
            </div>
            <button
              style={{
                marginTop: '200px',
                padding: '5px 50px',
                backgroundColor: '#FFFFFF',
                color: '#169470',
                border: 'none',
                borderRadius: '35px',
                fontSize: '25px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)'
              }}
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbroton
