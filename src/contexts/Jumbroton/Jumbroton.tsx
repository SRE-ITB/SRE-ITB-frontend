import Image from 'next/image';
import Header from '@src/assets/Images/Jumbroton/Header.png';
import PetaIndonesia from '@src/assets/Images/Description/PetaIndonesia.png';

const Jumbroton = (): JSX.Element => {
  return (
    <div className='h-auto flex flex-col justify-center items-center'>
      <div className='relative'>
        <Image src={Header} alt='Header' layout='fixed' width='1540' height='720' />
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <div className='font-[OpenSans] text-center text-white'>
            <div className='text-[50px] md:text-[60px] mr-[550px] ml-[550px] md:mr-[0px] md:ml-[0px] font-extrabold'>
              Society Of Renewable Energy
            </div>
            <div className='text-[30px]'>
              Institut Teknologi Bandung
            </div>
            <button
              style={{
                marginTop: '200px',
                padding: '10px 70px',
                backgroundColor: '#FFFFFF',
                color: '#169470',
                border: 'none',
                borderRadius: '35px',
                fontSize: '32px',
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
      <div className='relative'>
        <div className='mt-[150px] md:mt-[40px]'>
          <Image src={PetaIndonesia} alt='Header' width='1540' height='900' />
        </div>
        <div className='absolute inset-0 flex flex-col'>
          <div className='flex justify-end'>
            <div
              className='mt-[40px] xl:mt-[80px] text-[20px] xl:text-[28px] pt-4 pb-4 pl-20 pr-16 '
              style={{
                backgroundColor: '#169470',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '35px 0px 0px 35px',
                fontWeight: 'normal',
                fontFamily: 'Montserrat',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)'
              }}
            >
              We are currently spread
              <div className='flex flex-row text-[24px] xl:text-[32px]'>
                across
                <div className='' style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                  40+ Universities
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-start'>
            <div
              className='mt-[180px] sm:mt-[270px] md:mt-[200px] xl:mt-[315px] text-[20px] xl:text-[28px] pt-4 pb-4 pl-20 pr-16 '
              style={{
                backgroundColor: '#169470',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '0px 35px 35px 0px',
                fontWeight: 'normal',
                fontFamily: 'Montserrat',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)'
              }}
            >
              With more than
              <div className='text-[24px] xl:text-[32px]' style={{fontWeight: 'bold' }}>
                2000 Members
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbroton;
