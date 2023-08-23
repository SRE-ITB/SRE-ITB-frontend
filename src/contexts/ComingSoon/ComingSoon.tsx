import React from 'react'
import landscape from '@src/assets/Images/Comingsoon/landscape.png'

export default function Comingsoon (): JSX.Element {
  return (
    <div className='h-screen text-center relative justify-center items-center flex flex-col'>
      <img src={landscape.src} alt='tree-icon' className='w-[13vw] mx-auto xl:mt-[120px]'/>
      <div className="flex font-[Montserrat-Bold] text-[5vw] font-black">
        <h1 className='p-1 xl:p-4 text-greenSRE100 ml-auto'>COMING</h1>
        <h1 className='p-1 xl:p-4 text-greenSRE200 mr-auto'>SOON</h1>
      </div>
      <div className='border-y-greenSRE200 border-x-0 border-[0.5vw] w-[60vw] mx-auto text-[2vw] italic font-semibold leading-[3vw] py-[10px]'>Website is currently under construction. <br /> Stay in touch! Something wonderful is coming your way.</div>
    </div>
  )
}
