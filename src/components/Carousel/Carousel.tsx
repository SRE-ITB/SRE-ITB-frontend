import Slider from './Slider'

const Carousel = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center p-[5rem] text-center'>
      <p className='font-[Montserrat-Bold] text-4xl'>
        What Will We Do at <span className='text-[#168470]'>SRE ITB?</span>
      </p>
      <div className='h-[15px] w-[100px] rounded-full bg-[#168480] mt-[1rem]'></div>
      <div className='mt-[5rem]'>
        <Slider />
      </div>
      <div className='mt-[5rem] w-[400px] md:w-[500px] lg:w-[600px] h-[50px] rounded-full border-[1px] border-[#168470] text-center flex items-center justify-center text-[#169470] hover:bg-[#169470] hover:text-white transition-all'>
        See More of Our Activities
      </div>
    </div>
  );
}

export default Carousel;