import Image from 'next/image'
import Earth1 from '@src/assets/Images/IYREF/CEOTalks/Session/Earth1.png'
import Earth2 from '@src/assets/Images/IYREF/CEOTalks/Session/Earth2.png'
import Birds from '@src/assets/Images/IYREF/CEOTalks/About/Birds.png'
import Tanaman1 from '@src/assets/Images/IYREF/CEOTalks/Session/Tanaman1.png'
import Tanaman2 from '@src/assets/Images/IYREF/CEOTalks/Session/Tanaman2.png'
import Speaker1 from '@src/assets/Images/IYREF/CEOTalks/Session/Speaker1.png'
import Speaker2 from '@src/assets/Images/IYREF/CEOTalks/Session/Speaker2.png'
import FooterImage from '@src/assets/Images/Navigation/Footer/FooterIllustration.svg'
import PottedPlant from '@src/assets/Images/IYREF/CEOTalks/Session/Potted_plant.png'
import SpeakerCard from '@src/components/Card/SpeakerCard'

interface SpeakerCardProps {
  session: string
  picture: any
  name: string
}

const Session = (): JSX.Element => {
  const speakers: SpeakerCardProps[] = [
    {
      session: 'Session 1',
      picture: Speaker1,
      name: 'Arsjad Rasjid (President Director PT Indika Energy)'
    },
    {
      session: 'Session 1',
      picture: Speaker2,
      name: 'Verania Andria (Senior Advisor for Sustainable Energy Strategic Programme & Policies United Nations)'
    }
  ]

  return (
    <>
        <div className='h-min-[2200px] h-full font-montserrat px-10 w-[100%] flex flex-col items-center relative overflow-x-hidden'>
            <div className="flex flex-col lg:flex-row w-full items-center justify-around">
                <div className="flex flex-col items-center">
                    <div className='w-[275px] z-[-10] my-10'>
                        <Image src={Earth1} alt="Earth 1" className=''/>
                    </div>
                </div>
                <div className="text-center lg:text-left h-[400px] lg:h-[350px] w-[380px] lg:w-[650px] xl:w-[700px] flex flex-col justify-between">
                    <h2 className='text-[32px] lg:text-[40px]'><span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-green5 to-green8'>SESSION 1</span></h2>
                    <h3 className='text-[20px] lg:text-[24px]'><span className='text-transparent bg-clip-text bg-gradient-to-r from-green5 to-green8'>Entering The New Meta in Economy: Renewable Energy and Its Future Potentials.</span></h3>
                    <p className='text-[16px] lg:text-[18px] text-green11'>Forget fossil fuels, the new economic gold rush is green! Join us as we explore the electrifying rise of renewable energy, its game-changing potential to power the future, and how it&apos;s reshaping the financial landscape from sun-kissed farms to bustling city grids. Dive into a dynamic discussion with one of the champions of the green revolution. It&apos;s time to unplug from the old and recharge with the future!</p>
                </div>
            </div>
            <div className='w-full flex flex-col items-center my-10'>
                <div className='w-[10vw] sm:w-[5vw] z-[-10]'>
                    <Image src={Birds} alt="birds" className=''/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse w-full items-center justify-around">
                <div className="flex flex-col items-center">
                    <div className='w-[275px] z-[-10] my-10 lg:my-0 lg:mt-10 lg:mb-60'>
                        <Image src={Earth2} alt="Earth 2" className=''/>
                    </div>
                </div>
                <div className="text-center lg:text-left h-[850px] lg:h-[600px] w-[380px] lg:w-[650px] xl:w-[700px] flex flex-col justify-between">
                    <h2 className='text-[32px] lg:text-[40px]'><span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-green5 to-green8'>SESSION 2</span></h2>
                    <h3 className='text-[20px] lg:text-[24px]'><span className='text-transparent bg-clip-text bg-gradient-to-r from-green5 to-green8'>The Real Problem with Renewable Energy in Indonesia</span></h3>
                    <p className='text-[16px] lg:text-[18px] text-green11'>
                        Indonesia boasts vast renewable energy potential, thanks to its strategic location and abundant natural resources. Consider the equatorial position, showering the nation in sunlight year-round — a golden opportunity for harnessing solar power. The coastal regions, kissed by consistent sea breezes, offer an ideal landscape for wind energy projects. Additionally, the rich tapestry of agricultural residues, palm oil byproducts, and other organic materials can fuel biomass energy production.
                        <br />
                        <br />
                        Surprisingly, despite these promising prospects, renewables contribute less than 20% to the country&apos;s electricity generation. This begs a crucial question: Why aren&apos;t we fully tapping into our abundant renewable resources to meet energy demands and simultaneously cut down on carbon emissions?
                        <br />
                        <br />
                        Join us as we delve into the heart of this renewable energy dilemma, exploring innovative solutions that can propel Indonesia into a sustainable energy future. Be part of the conversation shaping the path for the next generation. Let&apos;s unlock the true potential of renewable energy in Indonesia.
                    </p>
                </div>
            </div>
            <br />
            <div className="w-full gap-5 flex flex-col lg:flex-row items-center justify-around m-20">
                {speakers.map((speaker, index) => (
                    <SpeakerCard
                    key={index}
                    session={speaker.session}
                    picture={speaker.picture}
                    name={speaker.name}
                    />
                ))}
            </div>
            <div className='hidden lg:block z-[-11] w-[400px] absolute top-[100px] left-[-50px]'>
                <Image src={Tanaman1} alt="Tanaman 1" className=''/>
            </div>
            <div className='hidden lg:block z-[-11] w-[400px] absolute top-[950px] right-[-100px]'>
                <Image src={Tanaman2} alt="Tanaman 2" className=''/>
            </div>
            <div className='w-[310px] lg:w-[710px] absolute z-[-11] align-middle bottom-[90px]'>
                <Image src={PottedPlant} alt="Potted Plant" className='mb-0'/>
            </div>
            <div className='flex flex-col w-[100vw]'>
                <Image
                src={FooterImage}
                alt="Footer Illustration"
                className="mb-[25px]"
                draggable={false}
                />
            </div>
        </div>
    </>
  )
}

export default Session
