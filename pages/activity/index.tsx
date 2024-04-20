import { useEffect, useState } from 'react'
import axios from 'axios'

import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Hero from '@src/contexts/Activity/Hero'
import Programs from '@src/contexts/Activity/Programs'
import Footer from '@src/components/Navigation/Footer'

interface ActivityData {
  thumbnail: string
  title: string
  date: string
  caption: string
  description: string
  type: string
  documentation: string[]
  id: number
}

const ActivityPage = (): JSX.Element => {
  const [activityData, setActivityData] = useState<ActivityData[]>([])

  useEffect(() => {
    const fetchActivityData = async (): Promise<void> => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/activity`,
          {
            params: {
              sort: 'desc'
            },
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`
            }
          }
        )
        setActivityData(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    void fetchActivityData()
  }, [])

  return (
    <SEO title="SRE ITB | Activity">
      <Navbar />
      <Hero />
      <Programs articles={activityData} />
      <Footer />
    </SEO>
  )
}

export default ActivityPage
