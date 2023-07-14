import PetaIndonesia from '@src/assets/Images/Description/PetaIndonesiaEnh.png'

const Description = (): JSX.Element => {
  return (
    <div className='h-auto flex flex-col justify-center items-center font-[Montserrat-Medium]'>
      <div className='relative'>
        <div className='flex flex-col'>
          <div className='flex justify-end'>
            <div
              className='sm:mt-[5vw] mt-[10vw] text-[16px] sm:text-[26px] py-3 sm:pl-20 sm:pr-16 pl-5 pr-4'
              style={{
                backgroundColor: '#169470',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '100px 0px 0px 100px',
                fontWeight: 'normal',
                boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)'
              }}
            >
              We are currently spread
              <div className='flex flex-row text-[16px] sm:text-[26px]'>
                across
                <div className='' style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                  40+ Universities
                </div>
              </div>
            </div>
          </div>
          <div className='z-[-1] my-[-10px]'>
            <img src={PetaIndonesia.src} alt='Header' className='w-screen'/>
          </div>
          <div className='flex justify-start'>
            <div
              className='text-[16px] sm:text-[26px] py-3 sm:pl-16 sm:pr-20 pl-4 pr-5'
              style={{
                backgroundColor: '#169470',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '0px 100px 100px 0px',
                fontWeight: 'normal',
                boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)'
              }}
            >
              With more than
              <div className='text-[16px] sm:text-[26px]' style={{ fontWeight: 'bold' }}>
                2000 Members
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row text-center sm:text-[40px] text-[30px] font-[Montserrat-Bold] sm:mt-[5vw] mt-[10vw]'>
        <div className='text-black'>
          About
        </div>
        <div className='' style= {{ marginLeft: '10px', color: '#169470' }}>
          SRE
        </div>
      </div>
      <div style={{
        marginTop: '10px',
        width: '100px',
        height: '15px',
        background: '#169470',
        borderRadius: '13px'
      }}
      ></div>
      <div className='mx-[5vw] mt-[30px] mb-[50px] text-center sm:text-[24px] text-[16px]'>
        <div className='' style={{ display: 'inline', color: '#169470', fontWeight: 'bold' }}>
          Society of Renewable Energy (SRE) &nbsp;
        </div>
        <div className='' style={{ display: 'inline', color: '#000000', fontWeight: 'normal' }}>
          is a student-led organization that aims to spark student’s role in the field of new and renewable energy. SRE Institut Teknologi Bandung, the first SRE student chapter, was born in 2019 to accelerate Indonesia’s energy transition by providing some learning programs and project implementation for the members
        </div>
      </div>
    </div>
  )
}

export default Description
