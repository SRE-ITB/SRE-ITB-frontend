import Image from 'next/image'
import Birds from '@src/assets/Images/IYREF/CEOTalks/About/Birds.png'

const About = (): JSX.Element => {
  return (
    <div className='font-montserrat relative h-min-[600px] flex flex-col justify-center items-center overflow-x-hidden pt-[100px] pb-[50px] px-[10vw] sm:px-[15vw]'>
      <div className='w-[10vw] sm:w-[5vw] z-[-10] absolute top-8 align-middle'>
        <Image src={Birds} alt="birds" className=''/>
      </div>
      <h3 className="text-center text-[16px] xl:text-[24px] text-green11">CEOTalk is the final event of the Integrated Youth Renewable Energy Festival (IYREF) 2024 following the announcement of the competitions’ winners. Here, you’re welcome to listen to experts in renewable energy, enrich your knowledge, and understand the current developments in the world of renewable energy. As young people, we have the responsibility to preserve and expand our resources towards a better future, and that’s with the help of renewable energy.</h3>
      <div className="mt-[50px] h-[5px] w-[175px] xl:w-[295px] rounded-full bg-gradient-to-r from-green11 to-green8"></div>
    </div>
  )
}

export default About
