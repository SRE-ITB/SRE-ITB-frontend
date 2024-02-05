import React, { useEffect, useState } from 'react'
import CompeHero from '@src/components/Hero/CompeHero'
import Header from '@src/assets/Images/IYREF/NEC/Hero/NEC_hero.png'

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
            NATIONAL ESSAY COMPETITION<br />IYREF 2024
          </>
            )
          : (
          <>
            NATIONAL ESSAY<br />COMPETITION IYREF 2024
          </>
            )
    }
    caption= 'The National Essay Competition (NEC) is one of the components of IYREF aimed at high school students and university students. NEC involves the submission of essays and pitch decks to be presented in the final phase. The objective of NEC is to provide a platform for students to hone their abilities and creativity in problem-solving, particularly in the field of renewable energy. Participants are expected to delve further into the theme "The Role of Youth in Advancing Renewable Energy Initiatives" with several sub-themes, including "Energy Intermittency," "Inclusivity in Energy Access," and "Integration of Renewable Energy in Youth Curriculum."'
    header= {Header}
    linkRegister=''
    buttonText= 'Register'
    />
    </>
  )
}

export default Hero
