import React from 'react'

interface ThemeProps {
  title: string
  text: string
  content: any
}

const Theme = ({ title, text, content }: ThemeProps): JSX.Element => {
  return (
    <div>
        <div className='my-[50px] space-y-3'>
            <h2 className='text-green11 text-center text-[16px]'>
                {title}
            </h2>
            <p className='font-gradient text-[24px] lg:text-[30px] xl:text-[32px] text-center font-bold px-5 lg:px-0'>
                {text}
            </p>
        </div>
        {content}
    </div>
  )
}

export default Theme
