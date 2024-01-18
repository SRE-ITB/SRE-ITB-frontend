import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'

import Navbar from '@src/components/Navigation/Navbar'
import Articles from '@src/contexts/Activity/Article'
import Error from '@src/contexts/404/404page'

interface ActivityData {
  thumbnail: File | undefined
  title: string
  date: string
  caption: string
  description: string
  type: string
  documentation: FileList | undefined
}

interface Documentation {
  title: string
  url: string
}

const Article = (): JSX.Element => {
  const [activityData, setActivityData] = useState<ActivityData>({
    thumbnail: undefined,
    title: '',
    date: '',
    caption: '',
    description: '',
    type: '',
    documentation: undefined
  })
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (!id) {
      return
    }

    const fetchActivityData = async (): Promise<void> => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/activity/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`
            }
          }
        )
        setActivityData(response.data.data)
        setThumbnailUrl(response.data.data.thumbnail)
      } catch (error) {
        console.error(error)
        setError('Error fetching data')
      }
    }

    void fetchActivityData()
  }, [id])

  const [thumbnailUrl, setThumbnailUrl] = useState<string>(
    'https://drive.google.com/uc?export=view&id=1l-vRpHc9ooC-y8orHStLDhpkBd5JxTPL'
  )

  const [documentationUrl] = useState<Documentation[]>([])

  if (error ?? activityData?.description === '') {
    return (
      <div>
        <Navbar e='error' /> <Error />
      </div>
    )
  } else {
    return (
      <div className='h-min-screen relative'>
        <Navbar />
        <div className='h-[80px]'></div>
        <Articles
          thumbnail={thumbnailUrl}
          title={activityData.title}
          date={new Date(activityData.date)}
          caption={activityData.caption}
          description={activityData.description}
          type={activityData.type}
          documentation={documentationUrl}
          id={0}
        />
      </div>
    )
  }
}

export default Article
