import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Article: React.FC = () => {
  const router = useRouter()
  const currentPath = router.asPath
  const pathArray = currentPath.split('/')
  const type = pathArray[2]
  const id = pathArray[3]

  const [contents, setContents] = useState<Array<{
    thumbnail: string
    nama_kegiatan: string
    deskripsi_panjang: string
    activity_doc: string
  }>>([])

  useEffect(() => {
    const fetchContents = async (): Promise<void> => {
      try {
        const res = await fetch(`https://api.sreitb.com/activity/${type}`)
        const data = await res.json()
        const content = data.data.find((item: any) => item.id === Number(id))
        setContents([{
          thumbnail: content.thumbnail,
          nama_kegiatan: content.name,
          deskripsi_panjang: content.long_description,
          activity_doc: content.activity_doc
        }])
      } catch (err) {
        console.log(err)
      }
    }
    void fetchContents()
  }, [])

  return (
    <div className="h-auto relative">
      {contents.map((content) => (
        <div key={id}>
          <Image src={content.thumbnail} alt="thumbnail" height={100} width={200} />
          <h2>{content.nama_kegiatan}</h2>
          <p>{content.deskripsi_panjang}</p>
        </div>
      ))}
    </div>
  )
}

export default Article
