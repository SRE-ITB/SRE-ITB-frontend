import Image from 'next/image'

import leaf from '@src/assets/Images/Description/leaf.png'
import hand from '@src/assets/AssetsV2/LampuTangan.svg'
import happy from '@src/assets/AssetsV2/emoji-happy.svg'
import flash from '@src/assets/AssetsV2/flash.svg'
import star from '@src/assets/AssetsV2/medal-star.svg'
import share from '@src/assets/AssetsV2/share.svg'
import circle1 from '@src/assets/AssetsV2/AboutUs/LingkaranKiri.svg'
import circle2 from '@src/assets/AssetsV2/AboutUs/LingkaranKanan.svg'

const VisionMission: React.FC = () => {
  return (
    <div id="about" className='font-montserrat relative w-full'>
        <div className='relative m-[10vw] xl:m-[5vw] text-center xl:text-left'>
            <span className='text-[48px] xl:text-[60px] font-gradient font-extrabold'>VISION</span>
            <p className='text-[16px] xl:text-[20px] font-normal mt-[2vh]'><span className='font-gradient font-bold opacity-100'>SRE ITB as a renewable-energy-based community</span> that will accommodate youth&apos;s interests and maximize spanotential to generate real-world impact.</p>
        </div>
        <div className='xl:flex mb-[5vw]'>
          <div className='mx-[10vw] xl:mx-[5vw] xl:w-[500px] mb-[10vw]'>
              <div className='text-center xl:text-left xl:col-span-1 col-span-3 font-extrabold'>
                  <p className='text-[30px] xl:text-[40px] text-green2'>OUR</p>
                  <p className='text-[48px] xl:text-[60px] mt-[-15px] xl:mt-[-20px] font-gradient'>MISSION</p>
                  <div className='h-[5px] xl:h-[10px] w-[150px] xl:w-[250px] bg-gradient rounded-full mx-auto xl:mx-0'></div>
              </div>
              <div className='hidden xl:block absolute left-0 mt-[50px]'>
                <Image
                  src={hand}
                  alt="Lampu SRE"
                />
              </div>
          </div>
          <div className='xl:w-full px-[6vw] xl:px-[5vw] xl:flex xl:flex-col xl:items-end text-[15px] sm:text-[17px]'>
            <div className='xl:translate-x-[-30%] xl:w-[600px] xl:mx-0 flex py-2 pr-4 border-solid border-2 border-green8 bg-white rounded-full mx-auto mb-[20px]'>
              <div className='my-auto mx-[15px] xl:mx-[25px]'><img src={flash.src} alt='flash-logo' className='w-[60px]'></img></div>
              <p className='align-middle items-center'>Enhancing renewable energy knowledge through basic and advance learning program</p>
            </div>
            <div className='hidden xl:block absolute translate-x-[-725px] translate-y-[75px] z-20'>
              <Image
                src={circle1}
                alt="circle1"
              />
            </div>
            <div className='xl:translate-x-[-20%] xl:w-[600px] xl:mx-0 flex py-2 pr-4 border-solid border-2 border-green8 bg-white rounded-full mx-auto mb-[20px]'>
              <div className='my-auto mx-[15px] xl:mx-[25px]'><img src={star.src} alt='star-logo' className='w-[60px]'></img></div>
              <p className='align-middle items-center'>Providing exclusive portfolio through hands-on project based on each individuals interests</p>
            </div>
            <div className='hidden xl:block absolute translate-x-[-70px] translate-y-[115px] z-20'>
              <Image
                src={circle2}
                alt="circle2"
              />
            </div>
            <div className='xl:translate-x-[-10%] xl:w-[600px] xl:mx-0 flex py-2 pr-4 border-solid border-2 border-green8 bg-white rounded-full mx-auto mb-[20px]'>
              <div className='my-auto mx-[15px] xl:mx-[25px]'><img src={happy.src} alt='happy-logo' className='w-[60px]'></img></div>
              <p className='align-middle items-center'>Maximizing individuals skills through various projects and development programs</p>
            </div>
            <div className='hidden xl:block absolute translate-x-[-605px] translate-y-[258px] z-20'>
              <Image
                src={circle1}
                alt="circle1"
              />
            </div>
            <div className='xl:w-[600px] xl:mx-0 flex py-2 pr-4 border-solid border-2 border-green8 bg-white rounded-full mx-auto'>
              <div className='my-auto mx-[15px] xl:mx-[25px]'><img src={share.src} alt='share-logo' className='w-[60px]'></img></div>
              <p className='align-middle items-center'>Building and maintaining supportive internal relationship to generate significant output</p>
            </div>
            <div className='flex'>
              <div className='mx-auto'><img src={leaf.src} alt="leaf-icon" className='w-[100px] h-[100px]'></img></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default VisionMission
