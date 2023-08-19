import React from 'react'
import '.././asstes/Images/Comingsoon/landscape.png'

export default function Comingsoon (): JSX.Element {
  return (
    <div>
      <div className="text-center mt-[8rem] lg:mt-[12rem] xl:mt-[16rem]">
        <img src='.././asstes/Images/Comingsoon/landscape.png' alt='tree-icon' className='h-12 md:h-16 xl:h-48 mx-auto'/>
        <div className="flex text-[2rem] md:text-[2.8rem] xl:text-[9rem] font-black mt-[-0.2rem] md:mt-[-0.5rem] xl:mt-[-2rem]">
          <h1 className='p-1 xl:p-4 text-greenSRE100 ml-auto'>COMING</h1>
          <h1 className='p-1 xl:p-4 text-greenSRE200 mr-auto'>SOON</h1>
        </div>
        <div className='border-y-greenSRE200 border-x-0 xl:border-x-0 border-[0.2rem] xl:border-[0.4rem] w-[48vh] md:w-[64vh] xl:w-[98vh] mx-auto xl:mt-[-1rem] text-[0.6rem] md:text-[0.8rem] xl:text-[2.4rem] italic font-semibold leading-[1rem] md:leading-[1.2rem] xl:leading-[3rem] py-2 md:py-3 xl:py-7'>Website is currently under construction. <br /> Stay in touch! Something wonderful is coming your way.</div>
      </div>
    </div>
  )
}
