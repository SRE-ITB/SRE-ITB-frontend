import Carousel from '@src/components/Activity/LastCard'

// Assets
// import REview from '@src/assets/Images/Carousel/REview.png'
import React, { useEffect, useState } from "react";

const LastActivity = (): JSX.Element => {
  // get content data from https://api.sreitb.com/api/kegiatan/1
  const [data, setData] = useState<{
    thumbnail: string
    nama_kegiatan: string
    deskripsi_pendek: number
  }[]>([])
  async function getContent() {
    console.log("fetching data")
    const response = await fetch('https://api.sreitb.com/api/kegiatan/1')
    const data = await response.json()
    setData(data.data)
    console.log(data.data)
  }
  useEffect(() => {
    getContent()
  })

  return (
    <div className='flex flex-col items-center justify-center text-center overflow-x-hidden sm:mt-[5vw] mt-[10vw] sm:mb-[5vw] mb-[10vw]'>
      <p className='font-[Montserrat-Bold] sm:text-[40px] text-[30px] mx-[5vw]'>
        Latest <span className='text-[#169470]'>Update</span>
      </p>
      <div className='h-[15px] w-[100px] rounded-full bg-[#169470] mt-[10px]'></div>
      <div className='mt-[50px]'>
        <Carousel contents={data} />
      </div>
    </div>
  )
}

export default LastActivity
