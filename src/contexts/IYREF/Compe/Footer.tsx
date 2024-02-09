import Image from 'next/image'
import Link from 'next/link'

import Leaves from '@src/assets/Images/IYREF/Compe/Footer/leaves.svg'
import Stars from '@src/assets/Images/IYREF/Compe/Footer/stars.svg'

interface FooterProps {
  contacts: string[]
  registerLink: string
  guidebookLink: string
  events: boolean
}

const Footer = ({ contacts, registerLink, guidebookLink, events }: FooterProps): JSX.Element => {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center relative">
      <section className={`w-[175vw] h-[850px] lg:h-[1300px] bg-green8 flex flex-col justify-between items-center font-montserrat py-40 lg:py-52 ${events ? 'rounded-t-[50%]' : ''}`}>
        {/* Register Yourself */}
        <div className="flex flex-col justify-between items-center w-full h-[227px] lg:h-[310px]">
          <div className="flex flex-col justify-between items-center text-center text-white">
            <h3 className="text-[24px] lg:text-[40px] font-light">
              What Are You Waiting For?
            </h3>
            <h1 className="text-[28px] lg:text-[78px] font-bold">
              Go Register Yourself
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-evenly gap-5">
            <Link href={registerLink}>
              <button className="border-[2px] border-white font-semibold bg-white hover:-translate-y-1 rounded-xl text-green8 duration-75 w-[225px] lg:w-[275px] h-[45px] lg:h-[65px] text-[16px] lg:text-[20px]">
                Register Now
              </button>
            </Link>
            <Link href={guidebookLink}>
              <button className="border-[2px] border-white font-semibold bg-green8 hover:-translate-y-1 rounded-xl text-white duration-75 w-[225px] lg:w-[275px] h-[45px] lg:h-[65px] text-[16px] lg:text-[20px]">
                Download Guidebook
              </button>
            </Link>
          </div>
        </div>
        {/* Contact Person */}
        <div className="w-screen h-auto flex flex-col justify-between gap-6 items-center text-white">
          <h2 className="text-[28px] lg:text-[32px] font-bold">
            CONTACT PERSON
          </h2>
          <div className="w-full flex flex-col justify-between gap-3 items-center text-center px-[15px]">
            {contacts.map((contact, index) => (
              <div key={index}>
                <p>
                  {contact.split('(')[0]}
                </p>
                <p>
                  ({contact.split('(')[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[40px] lg:w-[70px] top-[60px] lg:top-[150px] right-[24vw] absolute">
          <Image src={Stars} alt="plant" className="" />
        </div>
        <div className="w-[120px] lg:w-[270px] left-[-5vw] bottom-[-10px] absolute">
          <Image src={Leaves} alt="plant" className="" />
        </div>
      </section>
    </div>
  )
}

export default Footer
