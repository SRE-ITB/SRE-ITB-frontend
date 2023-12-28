import earth from '@src/assets/Images/Description/earth.png'
import leaf from '@src/assets/Images/Description/leaf.png'

const Description = (): JSX.Element => {
  return (
    <section className="h-auto flex flex-col justify-center items-center font-[Montserrat-Medium] py-10">
      <div className="relative">
        <img
          src={earth.src}
          alt="earth-icon"
          className="w-[225px] xl:w-[350px] h-[225px] xl:h-[350px]"
        />
        <h1 className="absolute text-[16px] md:text-[25px] xl:text-[40px] top-10 left-[-30%] md:left-[-60%] xl:left-[-110%] flex justify-center items-center font-[Montserrat-ExtraBold] w-[375px] md:w-[500px] xl:w-[1100px] h-[40px] md:h-[60px] xl:h-[100px] bg-gradient-to-r from-green1 to-green8 text-center text-white">
          SOCIETY OF RENEWABLE ENERGY
        </h1>
      </div>
      <br />
      <div className="mt-5 flex flex-col md:flex-row w-full items-center justify-around">
        <div className="flex flex-col items-center">
          <div className="flex flex-col text-center md:text-left font-[Montserrat-ExtraBold]">
            <h3>
              <span className="text-green2 text-[32px] xl:text-[48px]">
                ABOUT
              </span>
              <br />
              <span className="text-green5 text-[48px] xl:text-[72px]">
                SRE{' '}
              </span>
              <span className="text-green8 text-[48px] xl:text-[72px]">
                ITB
              </span>
            </h3>
          </div>
          <div className="w-[200px] xl:w-[275px] h-[5px] xl:h-[10px] rounded-full bg-gradient-to-r from-green1 to-green8"></div>
        </div>
        <div className="w-[350px] mt-[20px] md:mt-0 md:w-[500px] xl:w-[725px] text-center md:text-justify text-[16px] xl:text-[20px]">
          <p>
            <span className="text-transparent font-[Montserrat-Bold] bg-clip-text bg-gradient-to-r from-green1 to-green8">
              Society of Renewable Energy (SRE)&nbsp;
            </span>
            is a student-led organization that aims to spark student’s role in
            the field of new and renewable energy.
            <br />
            <br />
            <span className="text-transparent font-[Montserrat-Bold] bg-clip-text bg-gradient-to-r from-green1 to-green8">
              SRE Institut Teknologi Bandung
            </span>
            , the first SRE student chapter, was born in 2019 to accelerate
            Indonesia’s energy transition by providing some learning programs
            and project implementation for the members
          </p>
        </div>
      </div>
      <div className="relative w-full flex justify-center md:justify-end md:mr-[20vw]">
        <img src={leaf.src} alt="leaf-icon" className="w-[80px]" />
      </div>
    </section>
  )
}

export default Description
