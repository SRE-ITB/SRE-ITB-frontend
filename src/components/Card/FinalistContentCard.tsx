import React from 'react'

interface FinalistContentCardProps {
  text: string
}

const FinalistContentCard = ({ text }: FinalistContentCardProps): JSX.Element => {
  return (
    <div className='relative w-[350px] md:w-[370px] h-[60px] bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow'>
        <p className='font-montserrat text-[16px] text-white px-5 text-center font-medium'>
            {text}
        </p>
    </div>
  )
}

export default FinalistContentCard
