import Image from 'next/image'

import PottedPlant from '@src/assets/Images/IYREF/REFWON/Submission/potted_plant.svg'
import Link from 'next/link'

const Submission = (): JSX.Element => {
  return (
    <div className="h-[375px] lg:h-[450px] w-full bg-[#FEFBEA] flex flex-col items-center justify-evenly relative overflow-y-hidden font-montserrat">
      <div className="text-center">
        <h2 className="font-extrabold text-[24px] lg:text-[40px]">
          Hands-on Submission
        </h2>
        <h3 className="text-[16px] lg:text-[24px] w-[345px] lg:w-full">
          We look forward to receiving your hands-on submission.
        </h3>
      </div>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf6TvXEmBwaP9h2G8wXBC3mPgbz5LLX4kX7Roa2q1Ekzf207w/viewform?usp=sharing">
        <button className="border-[2px] border-green8 font-bold bg-green8 hover:bg-white rounded-full text-white duration-75 hover:text-green8 w-[225px] lg:w-[275px] h-[45px] lg:h-[65px] text-[16px] lg:text-[20px] z-[10]">
          Submission Form
        </button>
      </Link>
      <div className="w-[100px] lg:w-[200px] right-[3vw] bottom-[-10px] absolute">
        <Image src={PottedPlant} alt="plant" className="" />
      </div>
    </div>
  )
}

export default Submission
