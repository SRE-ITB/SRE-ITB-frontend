import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Stars from '@src/assets/Images/IYREF/Comvis/Footer/stars.svg'
import Leaves from '@src/assets/Images/IYREF/Comvis/Footer/leaves.svg'

interface FooterProps {
  contacts: string[]
  registerLink: string
  text: string
}

const Footer = ({ contacts, registerLink, text }: FooterProps): JSX.Element => {
  return (
    <div className='relative w-auto h-auto flex flex-col items-center justify-center font-montserrat overflow-hidden mt-[-100px]'>
        <div className='w-screen bg-green8 flex flex-col items-center justify-center pt-40 lg:pt-[250px] rounded-t-[50%]'>
            <div className="w-[40px]">
                <Image src={Stars} alt="stars" className="" />
            </div>
        </div>
        <div className='w-screen bg-green8 flex flex-col items-center justify-center'>
            <div className="text-center text-white w-[55vw]">
                <p className="text-[16px] lg:text-[28px]">
                    {text}
                </p>
            </div>
            <div className="mt-[100px] md:mt-[150px]">
                <Link href={registerLink}>
                    <button className="border-[2px] border-white font-semibold bg-white hover:-translate-y-1 rounded-xl text-green8 duration-75 w-[225px] lg:w-[275px] h-[45px] lg:h-[65px] text-[16px] lg:text-[20px]">
                    Register Now
                    </button>
                </Link>
            </div>
            <div className="text-white  py-40 lg:py-52">
                <h2 className="text-[28px] lg:text-[32px]  text-center font-bold">
                    CONTACT PERSON
                </h2>
                <div className="w-full flex flex-col justify-between gap-3 items-center text-center px-[15px] mt-[30px] md:mt-[50px]">
                    {contacts.map((contact, index) => (
                    <div key={index}>
                        <p>
                        {contact.split('(')[0]}
                        </p>
                        <p>
                        {contact.split('(')[1]}
                        </p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="w-[120px] lg:w-[270px] left-[-5vw] bottom-[-10px] absolute">
          <Image src={Leaves} alt="leaves" className="" />
        </div>
    </div>
  )
}

export default Footer
