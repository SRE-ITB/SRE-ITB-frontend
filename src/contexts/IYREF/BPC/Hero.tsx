import React, { useEffect, useState } from 'react'
import CompeHero from '@src/components/Hero/CompeHero'
import Header from '@src/assets/Images/IYREF/BPC/Hero/BPC_hero.png'

const Hero = (): JSX.Element => {
  const [isWideScreen, setIsWideScreen] = useState(false)
  useEffect(() => {
    function handleResize (): void {
      setIsWideScreen(window.innerWidth > 540)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
    <CompeHero
    title={
        isWideScreen
          ? (
          <>
            BUSINESS PLAN COMPETITION<br />IYREF 2024
          </>
            )
          : (
          <>
            BUSINESS PLAN<br />COMPETITION IYREF 2024
          </>
            )
    }
    caption= 'IYREF Business Plan Competition is a competition held by SRE ITB for diploma (D3/D4) and undergraduate (S1) students with the aim of enriching creativity, innovation, and entrepreneurial skills among students. The competition involves multiple stages, including the development of the Business Model Canvas (BMC), the preparation of business proposals, and the presentation of a pitch deck. Participants&apos; ideas will be evaluated by professional business experts and experienced entrepreneurs. Participants are expected to delve further into the theme "Pioneering Eco-Entrepreneurs for a Brighter Future: Advancing Innovative Ventures in the Quest for a Sustainable Energy Revolution" with several sub-themes, including "Digital Technology”, “Agriculture”, “Transportation and Mobility”, “Clean Energy”, “Service Industry”'
    header= {Header}
    linkRegister=''
    buttonText= 'Register'
    />
    </>
  )
}

export default Hero
