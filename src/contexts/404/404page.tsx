import { useEffect, useState } from 'react'
import Image from 'next/image'

import Plant from '@src/assets/Images/Illustration/Plant.svg'

const NotFound = (): JSX.Element => {
  const [isWideScreen, setIsWideScreen] = useState(false)
  useEffect(() => {
    function handleResize (): void {
      setIsWideScreen(window.innerWidth > 640)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="h-screen relative items-center sm:items-start flex flex-col sm:flex-row font-montserrat">
      <div className='w-[80vw] justify-center flex sm:w-[45vw] mt-[75px]'>
        <Image src={Plant} alt="plant" className="" />
      </div>
      <div className='flex flex-col items-center sm:items-start sm:w-[55vw] sm:h-screen sm:justify-center'>
        <div className='text-center sm:text-left px-[5vw] sm:px-0 sm:pr-[5vw]'>
          <h1 className="text-[30px] md:text-[35px] xl:text-[40px] font-bold font-gradient">
            {isWideScreen
              ? (
                <>
                  Page
                  <br />
                  Not Found
                </>
                )
              : (
                <>
                  Page Not Found
                </>
                )}
          </h1>
          <p className="text-[16px] md:text-[18px] xl:text-[20px] mt-[2vw]">Oops! It looks like you&apos;ve stumbled upon a page that doesn&apos;t exist. Maybe the page has been moved, deleted, or you entered the wrong URL.</p>
        </div>
        <button className="mt-[5vw] border-[2px] font-extrabold border-green5 bg-white hover:bg-green5 rounded-full text-green5 duration-75 hover:text-white w-[275px] md:w-[325px] xl:w-[400px] h-[50px] text-[16px] md:text-[18px] xl:text-[20px]" onClick={() => { window.location.href = '/' }}>
          Go Home
        </button>
      </div>
    </div>
  )
}

export default NotFound
