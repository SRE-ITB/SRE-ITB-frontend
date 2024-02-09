/* eslint-disable @typescript-eslint/comma-dangle */
import Image from 'next/image'
import PropTypes from 'prop-types'

import Bird1 from '@src/assets/Images/IYREF/Compe/Illustration/bird_1.svg'
import Bird2 from '@src/assets/Images/IYREF/Compe/Illustration/bird_2.svg'
import PottedPlant from '@src/assets/Images/IYREF/Compe/Events/potted_plant.svg'
import Leaves from '@src/assets/Images/IYREF/Compe/Illustration/Leaves.svg'

interface WebinarProps {
  title: string
  desc: string
  date: string
  time: string
  place: string
  speaker: string
  free: string
}

interface CoachingProps {
  title: string
  desc: string
  date: string
  time: string
  place: string
  speaker: string
  exclusive: string
}

interface EventsProps {
  webinar: WebinarProps
  coaching: CoachingProps
}

const Events = ({ webinar, coaching }: EventsProps): JSX.Element => {
  return (
    <section className="h-auto relative flex flex-col items-center font-montserrat py-[10vw]">
      {/* Images */}
      <div className="w-[100px] lg:w-[300px] top-[40px] lg:right-[20vw] absolute">
        <Image src={Bird1} alt="plant" className="" />
      </div>
      <div className="w-[340px] right-0 top-[500px] lg:top-[220px] absolute flex justify-end">
        <Image src={Leaves} alt="plant" className="transform -scale-x-100" />
      </div>
      <div className="w-[400px] hidden lg:block bottom-[-150px] left-[10vw] absolute">
        <Image src={PottedPlant} alt="plant" className="" />
      </div>
      <div className="w-[340px] hidden lg:block bottom-[800px] left-[35vw] absolute">
        <Image src={Bird2} alt="plant" className="" />
      </div>
      {/* Webinar */}
      <div className="w-[80vw] h-auto flex flex-col items-center lg:items-start justify-evenly text-center lg:text-left">
        <div className="w-[350px] lg:w-[600px] flex flex-col items-center lg:items-start justify-evenly">
          <h2 className="text-[28px] lg:text-[48px] font-bold font-gradient leading-[30px] lg:leading-[50px]">
            {webinar.title}
          </h2>
          <br />
          <p className="text-green11 text-[14px] lg:text-[20px]">
            {webinar.desc}
          </p>
          <br />
          <div className="w-full lg:w-[540px] h-[125px] lg:h-[150px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col justify-center items-start text-green11 text-[12px] lg:text-[16px] rounded-2xl">
            <p>{webinar.date}</p>
            <p>{webinar.time}</p>
            <p>{webinar.place}</p>
            <p>{webinar.speaker}</p>
          </div>
          <div className="w-full lg:w-[540px] h-[300px] lg:h-[200px] flex flex-col lg:flex-row justify-evenly lg:justify-between items-center">
            <div className="h-[125px] w-full lg:w-[250px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col justify-center items-center text-green11 text-center rounded-2xl">
              <h3 className="w-full text-[20px] lg:text-[24px] text-green7 font-semibold">
                FREE
              </h3>
              <p className="w-full text-[16px] lg:text-[20px] text-green11">
                {webinar.free}
              </p>
            </div>
            <div className="h-[125px] w-full lg:w-[250px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col justify-center items-center text-green11 text-center rounded-2xl">
              <h3 className="w-full text-[20px] lg:text-[24px] text-green7 font-semibold">
                LIMITED SEATS
              </h3>
              <p className="w-full text-[16px] text-green11">
                Are available for the general public
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Coaching */}
      <div className="w-[80vw] h-auto flex flex-col items-center lg:items-end justify-evenly text-center lg:text-right mt-[5vw]">
        <div className="w-[350px] lg:w-[600px] flex flex-col items-center lg:items-end justify-evenly">
          <h2 className="text-[28px] lg:text-[48px] font-bold font-gradient leading-[30px] lg:leading-[50px]">
            {coaching.title}
          </h2>
          <br />
          <p className="text-green11 text-[14px] lg:text-[20px]">
            {coaching.desc}
          </p>
          <br />
          <div className="w-full lg:w-[540px] h-[125px] lg:h-[150px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col justify-center items-start lg:items-end text-green11 text-[12px] lg:text-[16px] rounded-2xl">
            <p>{coaching.date}</p>
            <p>{coaching.time}</p>
            <p>{coaching.place}</p>
            <p>{coaching.speaker}</p>
          </div>
          <br />
          <div className="h-[125px] w-full lg:w-[250px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col justify-center items-center text-green11 text-center rounded-2xl">
            <h3 className="w-full text-[20px] lg:text-[24px] text-green7 font-semibold">
              Exclusive
            </h3>
            <p className="w-full text-[16px] text-green11">
              {coaching.exclusive}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

Events.propTypes = {
  webinar: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    free: PropTypes.string.isRequired,
  }),
  coaching: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    exclusive: PropTypes.string.isRequired,
  }),
}

export default Events
