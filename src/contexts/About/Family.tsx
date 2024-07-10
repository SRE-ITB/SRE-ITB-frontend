import Organogram from '@src/components/Card/Organogram'
import President from '@src/assets/images/About/Family/President.webp'

const Family = (): JSX.Element => {
  return (
    <div className='font-montserrat overflow-hidden flex flex-col items-center'>
      <h1 className='text-[38px] xl:text-[50px] font-gradient font-extrabold'>OUR</h1>
      <h1 className='text-[48px] xl:text-[60px] font-gradient font-extrabold -mt-5'>FAMILY</h1>

      <div className='mt-20'>
        <Organogram
          image={President}
          name='Dominica Wendy'
          major='(SI’21)'
          title='President of SRE ITB'
          color='#89C190'
        />
      </div>
    </div>
  )
}

export default Family
