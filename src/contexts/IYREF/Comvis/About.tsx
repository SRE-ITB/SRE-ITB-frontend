import React from 'react'
import Image from 'next/image'
import Company from '@src/assets/Images/IYREF/Comvis/About/company.jpg'
import Green from '@src/assets/Images/IYREF/Comvis/About/green.svg'
import PottedPlant from '@src/assets/Images/IYREF/Comvis/About/potted_plant.svg'
import Leaves from '@src/assets/Images/IYREF/Comvis/About/leaves.svg'
import Bird1 from '@src/assets/Images/IYREF/Comvis/About/bird_1.svg'
import Bird2 from '@src/assets/Images/IYREF/Comvis/About/bird_2.svg'

const About = (): JSX.Element => {
  return (
    <div className='relative flex flex-col items-center justify-center overflow-hidden font-monstserrat pt-[250px] px-10'>
        <div className="left-[15%] top-[80px] absolute">
            <Image src={Bird2} alt="bird2" className="" />
        </div>
        <div className='relative w-screen flex justify-center px-[10vw]'>
          <div className="h-auto relative w-full bg-white border-[2px] border-green9 z-10 flex flex-col items-center text-green11 text-center rounded-2xl drop-shadow px-[10vw] py-20 mb-[100px]">
              <h2 className="w-full text-[24px] lg:text-[32px] font-gradient font-bold mb-[50px]">
                  Event Details
              </h2>
              <div className='relative mb-5 w-full bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow px-14 py-7'>
                  <p className='font-montserrat text-[24px] text-white px-[30px] text-center'>
                      Limited for 35 people
                  </p>
              </div>
              <div className='relative mb-5 w-full bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow px-14 py-7'>
                  <p className='font-montserrat text-[24px] text-white px-[30px] text-center'>
                      Registration Date : 7-12 Mei 2024
                  </p>
              </div>
              <div className='relative mb-5 w-full bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow px-14 py-7'>
                  <p className='font-montserrat text-[24px] text-white px-[30px] text-center'>
                      Event date : 16 Mei 2024
                  </p>
              </div>
              <div className='relative mb-20 w-full bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow px-14 py-7'>
                  <p className='font-montserrat text-[24px] text-white px-[30px] text-center'>
                      Location : SUN Energy Head Office, Jakarta
                  </p>
              </div>

              <h2 className="w-full text-[24px] lg:text-[32px] font-gradient font-bold mb-[50px]">
                  The Company Visit Includes You
              </h2>
              <div className='flex flex-col lg:flex-row '>
                  <div className='relative mb-2 bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow px-14 py-10'>
                      <p className='font-montserrat text-[24px] text-white px-[30px] text-center'>
                          Snacks
                      </p>
                  </div>
                  <div className='relative mb-2 bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow px-14 py-10'>
                      <p className='font-montserrat text-[24px] text-white px-[30px] text-center'>
                          E-Certificate
                      </p>
                  </div>
              </div>
          </div>
          <div className="w-[300px] hidden lg:block right-0 absolute">
            <Image src={PottedPlant} alt="pottedPlant" className="" />
          </div>
          <div className='absolute bottom-0 z-0 flex items-end'>
                <Image
                    src={Green}
                    alt='Green1'
                    className='flex'
                />
            </div>
        </div>
        <div className="w-[140px] md:w-[175px] lg:w-[200px] xl:w-[280px] left-0  absolute z-30">
            <Image src={Leaves} alt="leaves" className="" />
        </div>
        <div className="right-[5%] absolute z-30">
            <Image src={Bird1} alt="bird1" className="" />
        </div>
        <div className='w-screen flex flex-col justify-center items-center bg-green8 pt-[250px] pb-[50px] z-20'>
            <div className='h-auto w-auto px-20'>
                <Image
                    src={Company}
                    alt='Company'
                />
            </div>
            <div className='indent-8 text-white text-[20px] w-[68vw] text-justify mt-[70px]'>
                <p>
                SUN Energy is a solar panel developer company established in Indonesia. Since 2016, SUN Energy has been at the forefront of developing solar energy solutions for the commercial and industrial sectors in Indonesia, and has expanded its presence to three countries. The company offers a comprehensive green energy ecosystem, providing customized, integrated solar solutions to a diverse range of customers. SUN Energy is also actively involved in the development of Indonesia&apos;s solar industry. SUN Energy continues to grow steadily with the support of its customers and partners. The company has been able to expand into new markets while continuing to provide reliable solar energy solutions for Indonesian industries.
                </p>
            </div>
        </div>
        <div className='h-[110px] sm:h-[150px] md:h-[180px] lg:h-[230px] xl:h-[280px]'></div>
        <div className='absolute bottom-0 z-0 w-[105vw] rotate-180'>
            <Image
                src={Green}
                alt='Green2'
            />
        </div>
    </div>
  )
}

export default About
