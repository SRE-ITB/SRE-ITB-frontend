import Image from 'next/image'

import Background from '@src/assets/Images/IYREF/Time/background.svg'

const Time = (): JSX.Element => {
  return (
    <div className="h-[450px] flex flex-col justify-center items-center overflow-x-hidden font-montserrat">
      <div className="relative w-full h-full">
        <Image
          src={Background}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 justify-center items-center flex flex-col text-white">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px]">
            REFWON will be held via Zoom Meeting on
          </h3>
          <h2 className="font-extrabold text-[32px] md:text-[48px] lg:text-[64px]">
            February 16th 2024
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Time
