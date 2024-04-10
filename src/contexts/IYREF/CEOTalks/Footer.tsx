import Image from 'next/image'
import FooterImage from '@src/assets/Images/Navigation/Footer/FooterIllustration.svg'

const Footer = (): JSX.Element => {
  return (
    <footer className='flex flex-col overflow-x-hidden'>
      <div className='flex flex-col w-[101%]'>
        <Image
          src={FooterImage}
          alt="Footer Illustration"
          className="mb-[25px]"
          draggable={false}
        />
      </div>
    </footer>
  )
}

export default Footer
