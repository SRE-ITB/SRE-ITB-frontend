import gradient1 from '@src/assets/AssetsV2/AboutUsBackground1.svg'
import gradient2 from '@src/assets/AssetsV2/AboutUsBackground2.svg'
import pucuk from '@src/assets/AssetsV2/DaunPucuk.svg'

import Image from 'next/image'

const BehindSRE: React.FC = () => {
  return (
    <div className='font-montserrat'>
      <div className='mt-[10vw] sm:mt-[5vw] mb-[30vw]'>
        <h1 className='text-center font-gradient font-extrabold text-[24px] md:text-[36px] xl:text-[48px] mx-[6vw]'>WHO&apos;S THE PEOPLE BEHIND SRE ITB?</h1>
        <div className='mt-[20px] h-[5px] xl:h-[10px] w-[125px] bg-gradient rounded-full mx-auto'></div>
        <div className='grid grid-rows-2 gap-[6vw] mt-[8vw]'>
          <div className='absolute mt-[-15vw] z-10 w-[40vw]'>
            <Image src={gradient1} alt='gradient1'/>
          </div>
          <div className='relative z-30 border-[#89C190] border-[3px] bg-white py-[7vw] p-[5vw] sm:p-[3vw] w-[80vw] sm:w-[60vw] rounded-3xl mx-auto sm:ml-[10vw]'>
            <h1 className='text-center font-gradient font-extrabold text-[24px] md:text-[36px] xl:text-[48px] relative top-[-2vw]'>MANAGEMENT TEAM</h1>
            <p className='text-center text-[16px] xl:text-[20px]'>The management team of SRE ITB is composed of dedicated individuals who oversee the organization&apos;s operations and drive its mission forward. The team also includes various directors responsible for specific areas of focus within SRE ITB.</p>
          </div>
          <div className='absolute z-10 mt-[40vh] sm:mt-[8vw] right-0 w-[40vw] flex justify-end'>
            <Image src={gradient2} alt='gradient2'/>
          </div>
          <div className='relative z-30 border-[#89C190] border-[3px] bg-white py-[7vw] p-[5vw] sm:p-[3vw] w-[80vw] sm:w-[60vw] rounded-3xl mx-auto sm:ml-auto sm:mr-[10vw]'>
            <div className='absolute top-[-6vw] right-[5vw] w-[8vw] hidden sm:block'>
              <Image src={pucuk} alt='pucuk-logo'/>
            </div>
            <h1 className='text-center font-gradient font-extrabold text-[24px] md:text-[36px] xl:text-[48px] relative top-[-2vw]'>SRE MEMBER</h1>
            <p className='text-center text-[16px] xl:text-[20px]'>SRE ITB members are individuals who have participated in the learning programs provided by the SRE ITB focused on renewable energy. As SRE ITB members, they will engaged in various learning activities, such as training sessions, and research projects.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BehindSRE
