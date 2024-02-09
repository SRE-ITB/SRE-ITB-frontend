import React from 'react'

interface ThemeCardProps {
  text: string
}

const ThemeCard = ({ text }: ThemeCardProps): JSX.Element => {
  return (
    <div className='z-10 relative w-[380px] py-[5vw] max-h-[200px] bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[2%] rounded-[10px] flex items-center justify-center drop-shadow mb-10'>
        <p className='font-montserrat text-[20px] text-white px-5 text-center font-medium'>
            {text}
        </p>
    </div>
  )
}

export default ThemeCard
