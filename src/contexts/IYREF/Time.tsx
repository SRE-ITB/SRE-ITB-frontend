import Background from '@src/assets/Images/IYREF/Time/background.svg'
import Image from 'next/image'

const Time = (): JSX.Element => {
  return (
    <div className="h-[350px] flex flex-col justify-center items-center overflow-x-hidden">
      <div className="relative w-full h-full">
        <Image
          src={Background}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 justify-center items-center flex flex-col text-white">
          <h3 className="font-[Montserrat-Medium] text-[16px] md:text-[18px] lg:text-[20px]">
            REFWON will be held via Zoom Meeting on
          </h3>
          <h2 className="font-[Montserrat-ExtraBold] text-[32px] md:text-[48px] lg:text-[64px]">
            February 16th 2024
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Time
