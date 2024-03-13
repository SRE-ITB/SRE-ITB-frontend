import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

interface StagesProps {
  title: string
  desc: string
  cards: Array<{
    title: string
    subtitle: string
    desc: string
  }>
}

const Card = ({ title, subtitle, desc }: { title: string, subtitle: string, desc: string }): JSX.Element => {
  return (
    <div className='bg-white bg-opacity-25 py-[5vh] px-[6vw] xl:px-[3vw] rounded-xl'>
        <h1 className='font-semibold md:font-bold text-[20px]'>{title}</h1>
        <p className='mt-[4vh] text-[16px] font-semibold'>{subtitle}</p>
        <p className='mt-[4vh] font-light text-[14px] md:text-[16px]'>{desc}</p>
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

const Stages = ({ title, desc, cards }: StagesProps): JSX.Element => {
  const router = useRouter()
  const page = router.pathname.split('iyref/')[1]

  return (
    <div className='overflow-x-hidden font-montserrat'>
        <div className='relative w-screen bg-gradient p-[5vw] pb-[10vw] text-center items-center text-white'>
            <h1 className='font-bold text-[28px] xl:text-[48px] p-[3vw]'>{title}</h1>
            <p className='px-[6vw] text-[15px] xl:text-[20px] mt-[4vh]'>{desc}</p>
            <div className={`grid grid-cols-1 gap-[4vh] mx-[4vw] mt-[5vw] ${page === 'nsx' ? 'xl:grid-cols-2' : 'xl:grid-cols-3'}`}>
                {cards.map((card) =>
                  <Card key={card.title} title={card.title} subtitle={card.subtitle} desc={card.desc} />
                )}
            </div>
        </div>
    </div>
  )
}
Stages.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  })).isRequired
}

export default Stages
