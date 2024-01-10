import Image from 'next/image'

import Sess1 from '@src/assets/Images/IYREF/Topics/Sess1.svg'
import Sess2 from '@src/assets/Images/IYREF/Topics/Sess2.svg'
import Plant from '@src/assets/Images/IYREF/Topics/Plant.svg'

const Topics = (): JSX.Element => {
  return (
    <div className='font-montserrat relative h-auto flex flex-col justify-center items-center overflow-x-hidden py-[150px] px-[10vw] sm:px-[15vw]'>
      <h2 className="text-[24px] md:text-[36px] xl:text-[48px] font-bold text-center mb-[80px]">Our Topics</h2>
      <div className='relative flex'>
        <Image src={Plant} alt="plant" className='absolute left-0 top-0'/>
      </div>
      <div className=''>
        <div className='border-2 border-green8 rounded-lg mb-[40px] shadow-xl'>
          <div className='flex justify-center my-[30px]'>
            <Image src={Sess1} alt="sess1-logo" className=''/>
          </div>
          <h4 className='text-center mb-[20px] px-[30px]'>
            <span className='font-bold'>First Session :</span><br></br>
            The Role of Renewable Energy in Achieving Zero Carbon Emissions
          </h4>
        </div>
        <div className='border-2 border-green8 rounded-lg shadow-xl'>
          <div className='flex justify-center my-[30px]'>
            <Image src={Sess2} alt="sess2-logo" className=''/>
          </div>
          <h4 className='text-center mb-[20px] px-[30px]'>
            <span className='font-bold'>Second Session :</span><br></br>
            Motivation Building and Competing Strategy For A Renewable Energy Related Case Competition
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Topics
