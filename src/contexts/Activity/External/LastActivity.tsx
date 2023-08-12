import CarouselLastActivity from '@src/components/Activity/CarouselLastActivity'
import React, { useEffect, useState } from 'react'

const LastActivity = (): JSX.Element => {
  const [contents, setContents] = useState<Array<{
    thumbnail: string
    nama_kegiatan: string
    deskripsi_pendek: string
  }>>([])

  useEffect(() => {
    const fetchContents = async (): Promise<void> => {
      try {
        const res = await fetch('https://api.sreitb.com/kegiatan/1')
        const data = await res.json()
        setContents([
          {
            thumbnail: data.data.thumbnail,
            nama_kegiatan: data.data.nama_kegiatan,
            deskripsi_pendek: data.data.deskripsi_pendek
          }
        ])
        console.log(contents)
      } catch (err) {
        console.log(err)
      }
    }
    void fetchContents()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center text-center overflow-x-hidden sm:mt-[5vw] mt-[10vw] sm:mb-[5vw] mb-[10vw]">
      <p className="font-[Montserrat-Bold] sm:text-[40px] text-[30px] mx-[5vw]">
        Latest <span className="text-[#169470]">Update</span>
      </p>
      <div className="h-[15px] w-[100px] rounded-full bg-[#169470] mt-[10px]"></div>
      <div className="mt-[50px]">
        <CarouselLastActivity contents={contents} />
      </div>
    </div>
  )
}

export default LastActivity
