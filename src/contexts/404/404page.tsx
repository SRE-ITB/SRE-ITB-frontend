import React from 'react'
import tree from '@src/assets/Images/404Page/forest.png'

export default function ErrorPage (): JSX.Element {
  return (
    <div className="h-screen text-center relative justify-center items-center flex flex-col">
      <div className="flex text-[10vw] font-black">
        <img
          src={tree.src}
          alt="tree-icon"
          className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto"
        />
        <div className="flex flex-col justify-center ml-10">
          <div className="font-[inter] p-1 xl:p-4 font-black">
            <span className="text-greenSRE100">4</span>
            <span className="text-greenSRE200">0</span>
            <span className="text-greenSRE100">4</span>
          </div>
          <div className="text-[1.3vw] italic font-semibold font-[inter] text-left ml-4">
            We can&apos;t find the page that you&apos;re <br /> looking for...
          </div>
          <a
            href="/"
            className="font-[Montserrat-Bold] bg-[#FFFFFF] text-[#169470] text-[25px] px-[30px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer mt-4 ml-4"
            style={{
              filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))'
            }}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
