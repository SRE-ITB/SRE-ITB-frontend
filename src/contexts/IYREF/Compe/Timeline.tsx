import Image from 'next/image'
import PropTypes from 'prop-types'
import Pot from '@src/assets/Images/IYREF/Compe/Timeline/Pot.svg'

interface TimelineProps {
  timeline: Array<{
    title: string
    desc: string
    startDate: string
    endDate: string
  }>
}

const Timeline = ({ timeline }: TimelineProps): JSX.Element => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const currentDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const isDateInRange = (currentDate: string | number | Date, startDate: string | number | Date, endDate: string | number | Date) => {
    const currentDateObj = new Date(currentDate)
    const startDateObj = new Date(startDate)
    const endDateObj = new Date(endDate)

    return currentDateObj >= startDateObj && currentDateObj <= endDateObj
  }

  return (
    <div className='overflow-x-hidden font-montserrat relative'>
      <div className="md:grid grid-cols-2 gap-[8vw] p-[5vw] pb-0">
        <p className="row-start-1 col-start-1 text-transparent font-bold bg-clip-text ml-auto md:mr-[3vw] text-center bg-gradient-to-r from-green1 to-green8 text-[36px] md:text-[64px]">Timeline</p>
        <div className='row-start-1 col-start-2 mt-[4vh] md:mt-0 ml-[5vw] md:ml-0 relative mb-[10vw]'>
        {timeline.map((timeline, index) => {
          const isInRange = isDateInRange(currentDate, timeline.startDate, timeline.endDate)

          return (
            <div key={index} className='flex relative items-center'>
              <div className='w-5 h-5 aspect-square bg-green8 rounded-full'></div>
              <div className={`ml-[3vw] p-5 ${isInRange ? 'bg-green8 rounded-r-xl' : ''}`}>
                <p className={`text-transparent font-bold bg-clip-text text-[18px] md:text-[24px] ${isInRange ? 'text-[#FFFFFF]' : 'text-green8'}`}>{timeline.title}</p>
                <p className='text-transparent bg-clip-text bg-green1 text-[16px] md:text-[22px]'>{timeline.desc}</p>
              </div>
            </div>
          )
        })}
          <div className='absolute h-full w-[4px] ml-[8px] bg-green8 top-0 rounded-full'></div>
        </div>
      </div>
      <div className='hidden md:block absolute w-[35vw] max-w-[600px] bottom-0'>
        <Image
          src={Pot}
          alt="Pot-Image"
        />
      </div>
    </div>
  )
}
Timeline.propTypes = {
  timeline: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  })).isRequired
}

export default Timeline
