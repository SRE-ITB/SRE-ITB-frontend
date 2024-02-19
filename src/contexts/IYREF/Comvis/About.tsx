import React from 'react'
import Image from 'next/image'
import Company from '@src/assets/Images/IYREF/Comvis/About/company.svg'
import Green1 from '@src/assets/Images/IYREF/Comvis/About/green1.svg'
import Green2 from '@src/assets/Images/IYREF/Comvis/About/green2.svg'
import PottedPlant from '@src/assets/Images/IYREF/Comvis/About/potted_plant.svg'
import Leaves from '@src/assets/Images/IYREF/Comvis/About/leaves.svg'
import Bird1 from '@src/assets/Images/IYREF/Comvis/About/bird_1.svg'
import Bird2 from '@src/assets/Images/IYREF/Comvis/About/bird_2.svg'

const About = (): JSX.Element => {
  return (
    <div className='relative flex flex-col items-center justify-center overflow-hidden font-monstserrat pt-[250px] px-10'>
        <div className="w-[300px] hidden lg:block top-[20px] right-0 absolute">
            <Image src={PottedPlant} alt="pottedPlant" className="" />
        </div>
        <div className="left-[15%] top-[80px] absolute">
            <Image src={Bird2} alt="bird2" className="" />
        </div>
        <div className="h-auto w-full lg:w-[950px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col items-center text-green11 text-center rounded-2xl drop-shadow px-28 py-20 mb-[100px]">
            <h2 className="w-full text-[24px] lg:text-[32px] font-gradient font-bold mb-[50px]">
                The Company Visit Includes You
            </h2>
            <div className='flex flex-col md:flex-row '>
                <div className='relative mb-2 py-[15px] w-full bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow px-14 py-10'>
                    <p className='font-montserrat text-[24px] text-white px-[30px] text-center'>
                        Snacks
                    </p>
                </div>
                <div className='relative mb-2 py-[15px] w-full bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow px-14 py-10'>
                    <p className='font-montserrat text-[24px] text-white px-[30px] text-center'>
                        Lanyard
                    </p>
                </div>
                <div className='relative mb-2 py-[15px] w-full bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow px-14 py-10'>
                    <p className='font-montserrat text-[24px] text-white px-[30px] text-center'>
                        Drink
                    </p>
                </div>
            </div>
        </div>
        <div className='absolute top-[950px] sm:top-[870px] md:top-[550px] xl:top-[440px] z-0'>
            <Image
                src={Green1}
                alt='Green1'
                width={1545}
                height={370}
            />
        </div>
        <div className="w-[140px] md:w-[175px] lg:w-[200px] xl:w-[280px] left-0 top-[1050px] sm:top-[1000px] md:top-[720px] lg:top-[680px] xl:top-[650px] absolute z-30">
            <Image src={Leaves} alt="leaves" className="" />
        </div>
        <div className="right-[5%] top-[1080px] sm:top-[1030px] md:top-[770px] lg:top-[780px] xl:top-[750px] absolute z-30">
            <Image src={Bird1} alt="bird1" className="" />
        </div>
        <div className="inset-x-0 top-[1320px] sm:top-[1300px] md:top-[1080px] lg:top-[1150px] flex flex-col justify-center items-center text-center absolute z-40 text-white">
            <h3 className='text-[20px] md:text-[24px] lg:text-[32px]'>
                Why?
            </h3>
            <h2 className='text-[32px] md:text-[48px] lg:text-[64px] font-semibold'>
                Company Name
            </h2>
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
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
                <br/>
                <p>
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, Mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
        </div>
        <div className='h-[110px] sm:h-[150px] md:h-[180px] lg:h-[230px] xl:h-[280px]'></div>
        <div className='absolute bottom-0 z-0'>
            <Image
                src={Green2}
                alt='Green2'
                width={1545}
                height={370}
            />
        </div>
    </div>
  )
}

export default About
