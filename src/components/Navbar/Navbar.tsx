import React, { useState } from 'react'
import i1 from '../assets/Images/Logo/whiteLogo.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar (): JSX.Element {
  const [open, setOpen] = useState(false)
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const [isMobileDropdownVisible, setMobileDropdownVisible] = useState(false)

  const toggleMenu = (): void => {
    setOpen(!open)
  }

  const toggleActivityDropdown = (isHovered) => {
    setDropdownVisible(isHovered)
  }

  const toggleMobileActivityDropdown = (): void => {
    setMobileDropdownVisible(!isMobileDropdownVisible)
  }

  return (
    <div>
      <div className='fixed top-0 bg-gradient-to-b from-greenSRE100 to-green-0 xl:h-64 md:h-48 sm:h-32 w-screen invisible sm:visible' id='nav'>
        <nav className='flex h-2/3 '>
          <Image src={i1} alt='logo' />
          <ul className='cursor-pointer ml-auto flex text-center items-center text-white font-inter mr-4 font-medium xl:text-2.5xl md:text-xl sm:text-sm'>
            <li className='py-3 xl:px-6 sm:px-3 xl:m-5 lg:m-0.5 sm:m-0 text-greenSRE200 font-extrabold xl:text-4xl md:text-2xl sm:text-xl'><Link href='#' className='hover:text-greenSRE200'>Home</Link></li>
            <li className='hover:text-greenSRE200 py-3 xl:px-6 md:px-6 sm:px-3 xl:m-5 lg:m-0.5 sm:m-0'><Link href='#'>About Us</Link></li>
            <li onMouseEnter={() => toggleActivityDropdown(true)} onMouseLeave={() => toggleActivityDropdown(false)}>
              <div className={'py-3 xl:px-6 sm:px-3 xl:m-5 lg:m-0.5 sm:m-0 relative z-20'}>
                <Link href='#' className='hover:text-greenSRE200'>Activity</Link>

                {/* dropdown */}
                <div className={`absolute z-10 xl:-left-12 md:-left-2 sm:-left-1 xl:top-20 md:top-14 sm:top-8 xl:w-60 md:w-28 sm:w-22 text-center bg-greenSRE100 rounded-lg ${isDropdownVisible ? 'visible' : 'invisible'}`}>
                  <div className='p-4 hover:text-greenSRE200'><Link href='#'>Dropdown</Link></div>
                  <div className='bg-white h-[1px] w-auto'></div>
                  <div className='p-4 hover:text-greenSRE200'><Link href='#'>Dropdown</Link></div>
                  <div className='bg-white h-[1px] w-auto'></div>
                  <div className='p-4 hover:text-greenSRE200'><Link href='#'>Dropdown</Link></div>
                  <div className='bg-white h-[1px] w-auto'></div>
                  <div className='p-4 hover:text-greenSRE200'><Link href='#'>Dropdown</Link></div>
                </div>

              </div>
            </li>
            <li className='hover:text-greenSRE200 py-3 xl:px-6 sm:px-3 xl:m-5 lg:m-0.5 sm:m-0'><Link href='#'>Student</Link></li>
            <li className='hover:text-greenSRE200 py-3 xl:px-6 sm:px-3 xl:m-5 lg:m-0.5 sm:m-0'><Link href='#'>IYREF</Link></li>
            <li className='hover:text-greenSRE200 py-3 xl:px-6 sm:px-3 xl:m-5 lg:m-0.5 sm:m-0'><Link href='#'>Merchandise</Link></li>
          </ul>
        </nav>
      </div>

      <div className='ml-auto p-8 cursor-pointer absolute z-50 right-0 sm:hidden' onClick={toggleMenu}>
        <div className={`w-[35px] h-[3px] mb-[7px] bg-white rounded-full ${open ? 'rotate-45 translate-y-2.5 duration-200 ease-in' : 'visible duration-200 ease-in'}`}></div>
        <div className={`w-[35px] h-[3px] mb-[7px] bg-white rounded-full ${open ? '-rotate-45 duration-200 ease-in' : 'visible duration-200 ease-in'}`}></div>
        <div className={`w-[35px] h-[3px] bg-white rounded-full ${open ? 'invisible' : 'visible'}`}></div>
      </div>
      <div className='absolute z-20 top-0 bg-gradient-to-b from-greenSRE100 to-green-0 h-36 w-screen transition-all-duration-500 ease-in sm:hidden'>
        <nav className='flex h-2/3 '>
          <Image src={i1} alt='logo' />
        </nav>
      </div>
      <div className={`bg-greenSRE200 w-screen h-screen overflow-hidden absolute z-40 -left-full ${open ? 'translate-x-full duration-500 ease-out' : '-translate-x-full duration-500 ease-in'} sm:hidden`} id='hammm'>
        <div className='p-10'></div>
        <ul className='text-white text-center text-2xl'>
          <div className='w-screen h-[1px] bg-white'></div>
          <li className='py-2'><Link href='#'>Home</Link></li>
          <div className='w-screen h-[1px] bg-white'></div>
          <li className='py-2'><Link href='#'>About Us</Link></li>
          <div className='w-screen h-[1px] bg-white'></div>
          <li className='py-2'><div onClick={toggleMobileActivityDropdown}>Activity <ion-icon name="arrow-dropdown"></ion-icon></div></li>
          <div className='w-screen h-[1px] bg-white'></div>

          {/* dropdown */}
          <div className={`bg-greenSRE100 ${isMobileDropdownVisible ? 'visible' : 'hidden'}`}>
            <li className='py-2'><Link href='#'>Dropdown</Link></li>
            <div className='w-screen h-[1px] bg-white'></div>
            <li className='py-2'><Link href='#'>Dropdown</Link></li>
            <div className='w-screen h-[1px] bg-white'></div>
            <li className='py-2'><Link href='#'>Dropdown</Link></li>
            <div className='w-screen h-[1px] bg-white'></div>
          </div>

          <li className='py-2'><Link href='#'>Student</Link></li>
          <div className='w-screen h-[1px] bg-white'></div>
          <li className='py-2'><Link href='#'>IYREF</Link></li>
          <div className='w-screen h-[1px] bg-white'></div>
          <li className='py-2'><Link href='#'>Merchandise</Link></li>
          <div className='w-screen h-[1px] bg-white'></div>
        </ul>
      </div>
    </div>
  )
}
