import Image from 'next/image'

import Sess1 from '@src/assets/Images/IYREF/REFWON/Topics/Sess1.svg'
import Sess2 from '@src/assets/Images/IYREF/REFWON/Topics/Sess2.svg'
import Plant from '@src/assets/Images/IYREF/REFWON/Topics/Plant.svg'
import Butterfly from '@src/assets/Images/IYREF/REFWON/Topics/Butterfly.svg'
import Gradient from '@src/assets/Images/IYREF/REFWON/Topics/Gradient.svg'
import Plant2 from '@src/assets/Images/IYREF/REFWON/Topics/Plant2.svg'

const Topics = (): JSX.Element => {
  return (
    <div className='font-montserrat relative h-auto flex flex-col justify-center items-center overflow-x-hidden py-[150px] px-[10vw] sm:px-[15vw]'>
      <div className='absolute right-0 top-0 z-[-50] w-[50vw] flex justify-end translate-y-[400px]'>
        <Image src={Gradient} alt="gradient" />
      </div>
      <h2 className="text-[24px] md:text-[36px] xl:text-[48px] text-center pb-[80px] relative w-screen font-extrabold">
        <div className='absolute bottom-[150px] left-[5vw] w-[20vw]'>
          <Image src={Butterfly} alt="butterfly" />
        </div>
        Our Topics
        <div className='absolute bottom-0 right-0 w-[40vw] translate-y-[30px] z-[-10]'>
          <Image src={Plant} alt="plant" />
        </div>
      </h2>
      <div className='lg:flex lg:gap-[5vw]'>
        <div className='border-2 bg-white border-green8 rounded-lg mb-[40px] lg:mb-0 shadow-xl lg:w-1/2'>
          <div className='flex justify-center my-[30px] lg:mb-[50px]'>
            <Image src={Sess1} alt="sess1-logo" className=''/>
          </div>
          <h4 className='text-center mb-[20px] px-[5vw] text-[17px] md:text-[19px] xl:text-[22px]'>
            <span className='font-bold text-[20px] md:text-[24px] xl:text-[28px]'>First Session</span><br></br>
            The Role of Renewable Energy in Achieving Zero Carbon Emissions
          </h4>
        </div>
        <div className='border-2 bg-white border-green8 rounded-lg shadow-xl lg:w-1/2'>
          <div className='flex justify-center my-[30px] lg:mb-[50px]'>
            <Image src={Sess2} alt="sess2-logo" className=''/>
          </div>
          <h4 className='text-center mb-[20px] px-[5vw] text-[17px] md:text-[19px] xl:text-[22px]'>
            <span className='font-bold text-[20px] md:text-[24px] xl:text-[28px]'>Second Session</span><br></br>
            Motivation Building and Competing Strategy For A Renewable Energy Related Case Competition
          </h4>
        </div>
      </div>
      <h2 className="text-[24px] md:text-[36px] xl:text-[48px] text-center pb-[50px] font-extrabold mt-[120px]">
        Why We Bring Our Topic?
      </h2>
      <p className='text-[17px] md:text-[18px] xl:text-[20px]'>
        We care about facilitating an inclusive dialogue on sustainable development, our workshop aims to expand participants&apos; understanding of environmental initiatives, specifically exploring EBT and ESG for companies. We encourage engagement through the BCC competition on renewable energy, allowing participants to apply the knowledge acquired in the preceding workshop and contribute to fostering a greener world.
      </p>
      <h2 className="text-[24px] md:text-[36px] xl:text-[48px] text-center pb-[50px] font-extrabold mt-[120px]">
        What Kind of Output Will Be Get?
      </h2>
      <div className='border-2 bg-white border-green8 rounded-lg mb-[3vw] shadow-xl w-full'>
        <h4 className='p-[20px] text-[17px] md:text-[18px] xl:text-[20px]'>
          <span className='font-bold text-[18px] md:text-[21px] xl:text-[25px]'>Knowledge Enrichment: </span>
          Explore EBT and ESG for comprehensive environmental insights.
        </h4>
      </div>
      <div className='border-2 bg-white border-green8 rounded-lg mb-[3vw] shadow-xl w-full'>
        <h4 className='p-[20px] text-[17px] md:text-[18px] xl:text-[20px]'>
          <span className='font-bold text-[18px] md:text-[21px] xl:text-[25px]'>Interactive Learning: </span>
          Workshop fosters engaging discussions for broadened sustainable perspectives.
        </h4>
      </div>
      <div className='border-2 bg-white border-green8 rounded-lg mb-[5vw] shadow-xl w-full'>
        <h4 className='p-[20px] text-[17px] md:text-[18px] xl:text-[20px]'>
          <span className='font-bold text-[18px] md:text-[21px] xl:text-[25px]'>Applied Knowledge: </span>
          BCC competition on renewable energy for practical application.
        </h4>
      </div>
      <div className='absolute bottom-0 left-0 z-[-50] w-[35vw] md:w-[15vw]'>
        <Image src={Plant2} alt="plant2" />
      </div>
    </div>
  )
}

export default Topics
