import { useRef } from 'react'
// import { useInView } from 'framer-motion'
import Image from 'next/image'

import earth from '@src/assets/Images/Description/earth.png'
import leaf from '@src/assets/Images/Description/leaf.png'

const Description = (): JSX.Element => {
  const ref = useRef(null)
  // const isInView = useInView(ref, { once: true })

  return (
    <section className="h-auto flex flex-col justify-center items-center font-montserrat py-[10vw] overflow-hidden">
      <div className="relative w-full justify-center flex"
        ref={ref}
        // style={{
        //   transform: isInView ? 'none' : 'translateY(100px)',
        //   opacity: isInView ? 1 : 0,
        //   transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        // }}
        >
          <div className="w-[225px] xl:w-[350px] h-[225px] xl:h-[350px]">
            <Image
              src={earth}
              alt="earth-icon"
              layout="responsive"
              placeholder='blur'
              width={350}
              height={350}
            />
          </div>
          <h1 className="absolute text-[16px] md:text-[25px] xl:text-[40px] top-10 w-fit py-[10px] px-[6vw] sm:px-[15vw] rounded-[10px] flex justify-center items-center font-bold bg-gradient-to-r from-green1 to-green8 text-center text-white">
            SOCIETY OF RENEWABLE ENERGY
          </h1>
      </div>
      <br />
      <div className="mt-[8vw] flex flex-col md:flex-row w-full items-center justify-around">
        <div className="flex flex-col items-center w-[100vw] sm:w-[1000px]"
        // style={{
        //   transform: isInView ? 'none' : 'translateX(-100px)',
        //   opacity: isInView ? 1 : 0,
        //   transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        // }}
        >
          <div className="flex flex-col text-center md:text-left">
            <h3 className='leading-[40px] sm:leading-[50px] font-montserrat font-extrabold'>
              <span className="text-green2 text-[32px] xl:text-[48px]">
                ABOUT
              </span>
              <br />
              <span className="text-green5 text-[48px] xl:text-[72px]">
                SRE{' '}
              </span>
              <span className="text-green8 text-[48px] xl:text-[72px]">
                ITB
              </span>
            </h3>
          </div>
          <div className="w-[200px] xl:w-[275px] h-[5px] xl:h-[10px] rounded-full bg-gradient-to-r from-green1 to-green8"></div>
        </div>
        <div className="mt-[30px] md:mt-0 text-center md:text-justify text-[16px] xl:text-[20px] px-[7vw]">
          <p
          // style={{
          //   transform: isInView ? 'none' : 'translateX(100px)',
          //   opacity: isInView ? 1 : 0,
          //   transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
          // }}
          >
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-green1 to-green8">
              Society of Renewable Energy (SRE)&nbsp;
            </span>
            is a student-led organization that aims to spark student’s role in
            the field of new and renewable energy.
            <br />
            <br />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-green1 to-green8">
              SRE Institut Teknologi Bandung
            </span>
            , the first SRE student chapter, was born in 2019 to accelerate
            Indonesia’s energy transition by providing some learning programs
            and project implementation for the members.
          </p>
        </div>
      </div>
      <div className="relative w-full flex justify-center md:justify-end md:mr-[14vw]">
        <img src={leaf.src} alt="leaf-icon" className="w-[80px] h-[80px]" />
      </div>
    </section>
  )
}

export default Description
