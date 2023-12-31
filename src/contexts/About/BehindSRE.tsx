import gradient1 from '@src/assets/AssetsV2/AboutUsBackground1.png'
import gradient2 from '@src/assets/AssetsV2/AboutUsBackground2.png'
import pucuk from '@src/assets/AssetsV2/DaunPucuk.svg'

const BehindSRE: React.FC = () => {
  return (
    <div>
      <div className='mt-[15vw] sm:mt-0'>
        <h1 className='text-center font-gradient font-black text-[6vw] sm:text-[4vw] mx-[6vw]'>WHO&apos;S THE PEOPLE BEHIND SRE ITB?</h1>
        <div className='h-[1vh] w-[10rem] bg-gradient rounded-full mx-auto mt-[2vh]'></div>
        <div className='grid grid-rows-2 gap-[6vw] mt-[8vh] sm:mt-[15vw]'>
          <img src={gradient1.src} alt='gradient1' className='absolute mt-[-15vw] z-10 w-[40vw]'></img>
          <div className='relative z-30 border-[#89C190] border-[0.5vw] bg-white py-[7vw] p-[5vw] sm:p-[3vw] w-[80vw] sm:w-[60vw] rounded-3xl mx-auto sm:ml-[10vw]'>
            <h1 className='text-center font-gradient font-black text-[6vw] sm:text-[4vw] relative top-[-2vw]'>MANAGEMENT TEAM</h1>
            <p className='text-center text-[1.8vh] sm:text-[1.8vw]'>The management team of SRE ITB is composed of dedicated individuals who oversee the organization&apos;s operations and drive its mission forward. The team also includes various directors responsible for specific areas of focus within SRE ITB.</p>
          </div>
          <img src={gradient2.src} alt='gradient2' className='absolute z-10 mt-[40vh] sm:mt-[8vw] left-[60vw] w-[40vw]'></img>
          <div className='relative z-30 border-[#89C190] border-[0.5vw] bg-white py-[7vw] p-[5vw] sm:p-[3vw] w-[80vw] sm:w-[60vw] rounded-3xl mx-auto sm:ml-auto sm:mr-[10vw]'>
            <img src={pucuk} alt='pucuk-logo' className='absolute top-[-7.4vw] right-[5vw] w-[8vw] hidden sm:block'></img>
            <h1 className='text-center font-gradient font-black text-[6vw] sm:text-[4vw] relative top-[-2vw]'>SRE MEMBER</h1>
            <p className='text-center text-[1.8vh] sm:text-[1.8vw]'>SRE ITB members are individuals who have participated in the learning programs provided by the SRE ITB focused on renewable energy. As SRE ITB members, they will engaged in various learning activities, such as training sessions, and research projects.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BehindSRE
