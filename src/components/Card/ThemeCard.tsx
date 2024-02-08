import React from 'react'

interface ThemeCardProps {
  text: string
}

const ThemeCard = ({ text }: ThemeCardProps): JSX.Element => {
  return (
    <div className='relative w-[380px] h-[170px] bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow'>
        <p className='font-montserrat text-[20px] text-white px-5 text-center font-medium'>
            {text}
        </p>
    </div>
  )
}

export default ThemeCard
