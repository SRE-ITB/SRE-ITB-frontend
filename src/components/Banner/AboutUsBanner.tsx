const AboutUsBanner = (): JSX.Element => {
  return (
    <div className='bg-gradient h-screen sm:h-[550px] flex items-center justify-center overflow-y-hidden'>
      <h1
        className='overflow-x-hidden absolute text-center font-montserrat text-stroke-white text-transparent font-bold white-text-shadow opacity-25 text-[68px] md:text-[75px] lg:text-[90px] max-w-full px-4'
      >
        SOCIETY OF <br /> RENEWABLE  ENERGY
      </h1>
      <p className='text-5xl font-montserrat font-bold text-white md:text-[68px] white-text-shadow lg:text-[96px]'>#RElevatingSRE</p>
    </div>
  )
}

export default AboutUsBanner
