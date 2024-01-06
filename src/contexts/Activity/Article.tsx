import leafBlack from '@src/assets/AssetsV2/DaunHitam.svg'

interface DocumentationItem {
  image: string
  desc: string
}

interface ArticlesProps {
  id: string
  thumbnail: string
  title: string
  date: Date
  caption: string
  description: string
  type: string
  documentation: DocumentationItem[]
}

const Articles: React.FC<ArticlesProps> = ({
  thumbnail,
  title,
  date,
  description,
  documentation,
}) => {
  return (
    <div className='font-montserrat'>
      <img src={thumbnail} alt='foto' className='w-full h-[27vw] object-cover' />
      <div className='absolute inset-0 bg-black opacity-50 w-full h-[27vw]'></div>

      <div className='h-[5vw] border-b-[0.2vw] flex px-[3vw] items-center text-[2vw] sm:text-[1.3vw] font-light'>
        <p>Published : {date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        <p className='ml-auto'>Tanggal Kegiatan : 31 Desember 2023</p>
      </div>

      <div className='text-center mt-[5vw]'>
        <h1 className='font-semibold text-[5vw]'>{title}</h1>
        <h2 className='font-normal text-[2vw] opacity-40'>beweganteng</h2>

        <div className='flex flex-wrap text-[1.8vw] xl:text-[1.5vw] mx-[18vw]'>
          <div className='border-solid border-[0.1vw] border-black rounded-full p-[0.5vw] px-[1.5vw] mx-auto mt-[2vw]'>
            <p className='font-normal'>Renewable Energy in Industrial Sectors</p>
          </div>
          <div className='border-solid border-[0.1vw] border-black rounded-full p-[0.5vw] px-[1.5vw] mx-auto mt-[2vw]'>
            <p className='font-normal'>Education & Public Awareness</p>
          </div>
        </div>
      </div>

      <div className='px-[8vw] py-[6vw]'>
        <p className='text-[2vw] text-justify indent-[4vw]'>{description}</p>
        <img src={leafBlack.src} alt='daun-hitam' className='mx-auto w-[10vw] mt-[5vw] col-start-2' />
      </div>

      <div className='w-full h-[0.3vw] bg-black opacity-10'></div>

      <div className='px-[8vw] py-[6vw]'>
        <h1 className='text-center sm:text-left text-[3vw] font-bold'>Highlight</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 mt-[5vh]'>
          {documentation.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.desc} className='object-cover aspect-square' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
