import Image from 'next/image'
import PropTypes from 'prop-types'
import Pot from '@src/assets/Images/IYREF/Compe/Timeline/Pot.svg'

interface TimelineProps {
  timeline: LineProps[]
}

interface LineProps {
  title: string
  desc: string
}

const Timeline = ({ title, desc }: LineProps): JSX.Element => {
  return (
      <div className='flex mt-[3.6vh]'>
          <div className='absolute ml-[0.8vw] mt-[-10vh] xl:mt-[-12vh] bg-green8 h-[12vh] xl:h-[16vh] w-[0.2vw]'></div>
          <div className='mt-[1.3vh] h-[1.8vw] aspect-square bg-green8 rounded-full'></div>
          <div className='ml-[3vw]'>
              <p className='text-transparent font-bold bg-clip-text bg-green8 text-[18px] xl:text-[24px]'>{title}</p>
              <p className='text-transparent bg-clip-text bg-green1 text-[16px] xl:text-[22px]'>{desc}</p>
          </div>
      </div>
  )
}
Timeline.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

const IYREF = ({ timeline }: TimelineProps): JSX.Element => {
  return (
    <div className='overflow-x-hidden font-montserrat'>
      <div className="xl:grid grid-cols-2 gap-[8vw] p-[5vw] pb-0">
        <p className="row-start-1 col-start-1 text-transparent font-bold bg-clip-text ml-auto xl:mr-[3vw] text-center bg-gradient-to-r from-green1 to-green8 text-[36px] md:text-[64px] xl:text-[82px]">Timeline</p>
        <Image
          className='col-start-1 h-[60vw] mt-[25vw] row-start-1 hidden xl:block'
          src={Pot}
          alt="Pot-Image"
        />
        <div className='row-start-1 col-start-2 mt-[4vh] xl:mt-0 ml-[5vw] xl:ml-0'>
            {timeline.map((line, index) => (
              <div key={index} className='flex mt-[3.6vh]'>
                <div className='absolute ml-[0.8vw] mt-[-10vh] xl:mt-[-12vh] bg-green8 h-[12vh] xl:h-[16vh] w-[0.2vw]'></div>
                <div className='mt-[1.3vh] h-[1.8vw] aspect-square bg-green8 rounded-full'></div>
                <div className='ml-[3vw]'>
                  <p className='text-transparent font-bold bg-clip-text bg-green8 text-[18px] xl:text-[24px]'>{line.title}</p>
                  <p className='text-transparent bg-clip-text bg-green1 text-[16px] xl:text-[22px]'>{line.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
IYREF.propTypes = {
  timeline: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  })).isRequired
}

export default IYREF
