/* eslint-disable @typescript-eslint/comma-dangle */
import gmail from '@src/assets/Images/IYREF/Speakers/gmail.svg'
import instagram from '@src/assets/Images/IYREF/Speakers/instagram.svg'
import placeholder from '@src/assets/Images/IYREF/Speakers/placeholder.svg'
import Image from 'next/image'
import Link from 'next/link'

const Speakers = (): JSX.Element => {
  const speakers = [
    {
      image: placeholder,
      name: 'John Doe',
      desc: 'Master Renewable Energy',
    },
    {
      image: placeholder,
      name: 'John Doe',
      desc: 'Master Renewable Energy',
    },
    {
      image: placeholder,
      name: 'John Doe',
      desc: 'Master Renewable Energy',
    },
  ]

  return (
    <div className="h-auto w-full py-[10vh] flex flex-col gap-[10vw] items-center font-montserrat">
      <div className="flex flex-col gap-20 items-center">
        <div className="flex flex-col gap-[25px] items-center">
          <h2 className="font-extrabold text-[24px] md:text-[32px] lg:text-[40px] text-green8 text-center">
            Meet Our Speakers
          </h2>
          <h3 className="text-[16px] md:text-[20px] lg:text-[24px] w-[350px] md:w-[500px] lg:w-[1000px] text-center">
            Discover the diverse and accomplished individuals who will be
            sharing their expertise and insights at our event.
          </h3>
        </div>
        <div className="gap-6 grid grid-cols-1 xl:grid-cols-3 justify-items-center">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="relative w-[300px] lg:w-[375px] h-[300px] lg:h-[375px]">
              <Image
                className="shadow-md"
                src={speaker.image}
                alt={speaker.name}
                objectFit="cover"
              />
              <div className="absolute bottom-0 justify-center items-center w-full h-[100px] flex flex-col text-white bg-gradient-to-b from-transparent to-black">
                <h2 className="font-bold text-[16px] md:text-[18px] lg:text-[20px]">
                  {speaker.name}
                </h2>
                <h3 className="text-[12px] md:text-[13px] lg:text-[14px]">
                  {speaker.desc}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <h2 className="font-bold text-[24px] lg:text-[40px]">
          Contact Us
        </h2>
        <div className="w-[170px] lg:w-[340px] h-[75px] lg:h-[150px] flex justify-between">
          <Link href="/">
            <div className="flex items-center justify-center w-[75px] lg:w-[150px] h-[75px] lg:h-[150px] border-2 rounded-lg border-green8">
              <div className="w-[45px] h-[45px] lg:w-[95px] lg:h-[95px]">
                <Image src={gmail} alt="gmail" className="text-green8" />
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="flex items-center justify-center w-[75px] lg:w-[150px] h-[75px] lg:h-[150px] border-2 rounded-lg border-green8">
              <div className="w-[45px] h-[45px] lg:w-[95px] lg:h-[95px]">
                <Image src={instagram} alt="gmail" className="text-green8" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[338px] md:w-full text-[16px] md:text-[20px] lg:text-[24px] font-montserrat font-light flex flex-col gap-6 items-center text-center">
        <h3>Tell us about the positive moments you&apos;ve had with us!</h3>
        <Link href="/">
          <button className="border-[2px] border-green8 font-bold bg-green8 hover:bg-white rounded-sm text-white duration-75 hover:text-green8 w-[225px] lg:w-[275px] h-[45px] lg:h-[65px] text-[16px] lg:text-[20px]">
            Feedback
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Speakers
