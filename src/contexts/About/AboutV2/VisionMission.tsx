import '../Style.css'
import leaf from '@src/assets/AssetsV2/DaunHijau.svg'
import hand from '@src/assets/AssetsV2/LampuTangan.svg'
import mission from '@src/assets/AssetsV2/OurMissionDesktop.png'
import happy from '@src/assets/AssetsV2/emoji-happy.png'
import flash from '@src/assets/AssetsV2/flash.png'
import star from '@src/assets/AssetsV2/medal-star.png'
import share from '@src/assets/AssetsV2/share.png'

const VisionMission: React.FC = () => {
  return(
    <div>
        <div className='relative m-[5vw] text-center sm:text-left'>
            <span className='text-[15vw] sm:text-[5vw] font-gradient font-black'>VISION</span>
            <p className='text-[3vh] font-normal leading-[5vh] opacity-75 mt-[2vh]'><span className='font-gradient font-bold opacity-100'>SRE ITB as a renewable-energy-based community</span> that will accommodate youth's interests and maximize spanotential to generate real-world impact</p>
        </div>
        <div className='sm:grid grid-cols-3 m-[5vw] mt-[20vw] sm:mt-0'>
            <div className='text-center sm:text-left sm:col-span-1 col-span-3'>
                <p className='text-[13vw] sm:text-[3vw] font-gradient font-black'>OUR</p>
                <p className='text-[15vw] sm:text-[5vw] font-gradient font-black mt-[-5vw] sm:mt-[-2vw]'>MISSION</p>
                <div className='h-[1vh] w-[35vw] sm:w-[15vw] bg-gradient rounded-full mx-auto sm:mx-0'></div>
            </div>
            <img src={mission} alt='mission-img' className='ml-[5vw] w-[55vw] col-span-2 hidden sm:block'></img>           
        </div>

        <div className='block sm:hidden'>
            <div className='flex border-solid border-4 border-[#89C190] bg-white p-[2vw] pr-[3vw] w-[80vw] rounded-full mx-auto mt-[12vw]'>
                <div className='my-auto mx-[2vh]'><img src={flash} alt='flash-logo' className='w-[10vh]'></img></div>
                <p className='align-middle items-center text-[2vh] opacity-75 mx-[1vh]'>Enhancing renewable energy knowledge through basic and advance learning program</p>
            </div>
            <div className='flex border-solid border-4 border-[#89C190] bg-white p-[2vw] pr-[3vw] w-[80vw] rounded-full mx-auto mt-[8vw]'>
            <div className='my-auto mx-[2vh]'><img src={star} alt='star-logo' className='w-[10vh]'></img></div>
                <p className='align-middle items-center text-[2vh] opacity-75 mx-[1vh]'>Providing exclusive portfolio through hands-on project based on each individuals interests</p>
            </div>
            <div className='flex border-solid border-4 border-[#89C190] bg-white p-[2vw] pr-[3vw] w-[80vw] rounded-full mx-auto mt-[8vw]'>
            <div className='my-auto mx-[2vh]'><img src={happy} alt='happy-logo' className='w-[10vh]'></img></div>
                <p className='align-middle items-center text-[2vh] opacity-75 mx-[1vh]'>Maximizing individuals skills through various projects and development programs</p>
            </div>
            <div className='flex border-solid border-4 border-[#89C190] bg-white p-[2vw] pr-[3vw] w-[80vw] rounded-full mx-auto mt-[8vw]'>
            <div className='my-auto mx-[2vh]'><img src={share} alt='share-logo' className='w-[10vh]'></img></div>
                <p className='align-middle items-center text-[2vh] opacity-75 mx-[1vh]'>Building and maintaining supportive internal relationship to generate significant output</p>
            </div>
        </div>
        
        <div className='flex mr-[5vw] mt-[10vw] sm:mt-[-5vw]'>
            <img src={hand} alt="hand-icon" className="w-[18vw] relative top-[-10vw] hidden sm:block"></img>
            <div className='mx-auto sm:mx-0 sm:ml-auto mb-auto'><img src={leaf} alt="leaf-icon" className='w-[20vw] sm:w-[10vw]'></img></div>
        </div>
    </div>
  );
}

export default VisionMission