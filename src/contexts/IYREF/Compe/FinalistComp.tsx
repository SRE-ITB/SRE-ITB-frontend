import React from 'react'

interface FinalistCompProps {
  text: string
  content: any
}

const FinalistComp = ({ text, content }: FinalistCompProps): JSX.Element => {
  return (
    <div className='mb-[100px] lg:mb-[300px]'>
        <div className='mb-[20px]'>
            <p className='text-green11 text-[16px] text-center px-[25px]'>
            {text}
            </p>
        </div>
        {content}
    </div>
  )
}

export default FinalistComp
