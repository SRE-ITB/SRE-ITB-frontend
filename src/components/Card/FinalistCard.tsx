import React from 'react'

interface FinalistCardProps {
  title: string
  content: any
}

const FinalistCard = ({ title, content }: FinalistCardProps): JSX.Element => {
  return (
    <div className="h-[325px] w-[400px] md:w-[450px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col items-center text-green11 text-center rounded-2xl drop-shadow">
        <h3 className="w-full text-[20px] lg:text-[24px] text-green7 font-semibold mb-[30px]">
            {title}
        </h3>
        {content}
    </div>
  )
}

export default FinalistCard
