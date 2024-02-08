import React, { useEffect, useState } from 'react'
import CompeHero from '@src/components/Hero/CompeHero'
import Header from '@src/assets/Images/IYREF/BCC/Hero/BCC_hero.png'

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
            BUSINESS CASE COMPETITION<br />IYREF 2024
          </>
            )
          : (
          <>
            BUSINESS CASE<br />COMPETITION IYREF 2024
          </>
            )
    }
    caption= 'The Business Case Competition (BCC) is one of the components of IYREF aimed at diploma (D3 and D4) and undergraduate (S1) students. BCC involves the submission of executive summary, proposal, and pitch deck to be presented in the final phase. The theme "Innovation to Reach The Implementation of Renewable Energies in Industry 5.0" was chosen to emphasize the need for transformation in the energy sector to make it more sustainable and adaptive to industrial developments. Through this competition, it is hoped that participants can design innovative business strategies to accelerate the implementation of renewable energy, creating a positive impact in achieving the sustainable vision of Net Zero Emission 2060.'
    header= {Header}
    linkRegister=''
    buttonText= 'Register'
    />
    </>
  )
}

export default Hero
