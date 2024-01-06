import leafBlack from '@src/assets/AssetsV2/DaunHitam.png'

interface Documentation {
  title: string
  url: string
}

interface Activity {
  thumbnail: string
  title: string
  date: Date
  description: string
  type: string
  documentation: Documentation[]
}

const Articles = ({ thumbnail, title, date, description, type, documentation }: Activity): JSX.Element => {
  return (
    <div className='font-montserrat'>
      <img src={thumbnail} alt='foto' className='w-full h-[27vw] sm:h-[17vw] object-cover' />
      <div className='absolute inset-0 bg-black opacity-50 w-full h-[27vw] sm:h-[17vw]'></div>

      <div className='py-[1.5vw] border-b-[0.2vw] flex px-[3vw] items-center text-[8px] sm:text-[15px] lg:text-[20px] font-light'>
        <p className='ml-auto'>{date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      </div>

      <div className='text-center mt-[5vw]'>
        <h1 className='font-semibold text-[20px] sm:text-[40px] lg:text-[60px]'>{title}</h1>
        <h2 className='font-normal text-[12px] sm:text-[20px] lg:text-[30px] opacity-40'>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>

        {/* <div className='flex flex-wrap text-[1.8vw] xl:text-[1.5vw] mx-[18vw]'>
          <div className='border-solid border-[0.1vw] border-black rounded-full p-[0.5vw] px-[1.5vw] mx-auto mt-[2vw]'>
            <p className='font-normal'>Renewable Energy in Industrial Sectors</p>
          </div>
          <div className='border-solid border-[0.1vw] border-black rounded-full p-[0.5vw] px-[1.5vw] mx-auto mt-[2vw]'>
            <p className='font-normal'>Education & Public Awareness</p>
          </div>
        </div> */}
      </div>

      <div className='px-[8vw] py-[5vw]'>
        <p className='text-[12px] sm:text-[17px] lg:text-[25px] text-justify indent-[35px] lg:indent-[70px]'>{description}</p>
        <img src={leafBlack.src} alt='daun-hitam' className='mx-auto w-[10vw] mt-[5vw] col-start-2' />
      </div>

      <div className='w-full h-[0.3vw] bg-black opacity-10'></div>

      <div className='px-[8vw] py-[5vw]'>
        <h1 className='text-center sm:text-left text-[3vw] font-bold'>Highlight</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-[4vw] mt-[5vw] mb-[10vw]'>
          {documentation.map((item, index) => (
            <div key={index}>
              <img src={item.url} alt={item.title} className='object-cover aspect-square rounded-lg' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
