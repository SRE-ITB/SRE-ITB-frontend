import PropTypes from 'prop-types'

interface CompeProps {
  title: string
  desc: string
  cards: CardProps[]
}

interface CardProps {
  title: string
  subtitle: string
  desc: string
}

interface StagesProps {
  stages: CompeProps
}

const Card = ({ title, subtitle, desc }: CardProps): JSX.Element => {
  return (
    <div className='bg-white bg-opacity-25 pt-[4vh] pb-[10vh] px-[6vw] xl:px-[3vw] rounded-xl'>
        <h1 className='font-medium xl:font-semibold text-[20px]'>{title}</h1>
        <p className='mt-[4vh] text-[16px]'>{subtitle}</p>
        <p className='mt-[4vh] font-light text-[12px] xl:text-[16px]'>{desc}</p>
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

const Stages = ({ stages }: StagesProps): JSX.Element => {
  return (
    <div className='overflow-x-hidden font-montserrat'>
        <div className='relative w-screen bg-gradient p-[5vw] text-center items-center text-white'>
            <h1 className='font-bold text-[28px] xl:text-[48px] p-[3vw]'>{stages.title}</h1>
            <p className='px-[6vw] text-[12px] xl:text-[16px] mt-[4vh]'>{stages.desc}</p>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-[4vh] mx-[4vw] mt-[8vh]'>
                {stages.cards.map((card) =>
                  <Card key={card.title} title={card.title} subtitle={card.subtitle} desc={card.desc} />
                )}
            </div>
        </div>
    </div>
  )
}
Stages.propTypes = {
  stages: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    })).isRequired
  }).isRequired
}

export default Stages
