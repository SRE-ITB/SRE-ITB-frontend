/* eslint-disable @typescript-eslint/comma-dangle */
import AuraAdiyani from '@src/assets/Images/IYREF/REFWON/Speakers/AuraAdiyani.jpeg'
import AlyaBuleen from '@src/assets/Images/IYREF/REFWON/Speakers/AlyaBuleen.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const Speakers = (): JSX.Element => {
  const speakers = [
    {
      image: AuraAdiyani,
      name: 'Aura Adiyani',
      desc: 'Renewable Energy Consultant @ AFRY Indonesia',
    },
    {
      image: AlyaBuleen,
      name: 'Cut Raihana Alya Buleen',
      desc: '1st Winner of GAMABCC 2023 by Pupuk Kaltim x KAFEGAMA FEB UGM | 1st Winner of API Alamport x Indonesia Chemical Engineering Challenge 2023',
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
        <div className="gap-6 grid grid-cols-1 xl:grid-cols-2 justify-items-center">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="relative w-[300px] my-5 lg:w-[375px] h-[300px] lg:h-[375px]">
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
                <h3 className={`text-center mx-3 mb-3 ${speaker.name === 'Cut Raihana Alya Buleen' ? 'text-[9px] md:text-[10px] lg:text-[11px]' : 'text-[12px] md:text-[13px] lg:text-[14px]'}`}>
                  {speaker.desc}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <h2 className="font-bold text-[24px] lg:text-[40px] mb-5">
          Contact Person
        </h2>
        <h3>
          id line: zakyklr | WA: 0881022801565
        </h3>
        <h3>
          id line: srhwydyota | WA: 085158566235
        </h3>
        <h3>
          id line: alyyhnazm | WA: 085161265963
        </h3>
      </div>
      <div className="w-[338px] md:w-full text-[16px] md:text-[20px] lg:text-[24px] font-montserrat font-light flex flex-col gap-6 items-center text-center">
        <h3>Tell us about the positive moments you&apos;ve had with us!</h3>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdQLF44zXD2DeGJ1OTdI-bccdSBRjSc4UU8YhkraeCAcNiUjQ/viewform?usp=sharing">
          <button className="border-[2px] border-green8 font-bold bg-green8 hover:bg-white rounded-sm text-white duration-75 hover:text-green8 w-[225px] lg:w-[275px] h-[45px] lg:h-[65px] text-[16px] lg:text-[20px]">
            Feedback
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Speakers
