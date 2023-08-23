import Link from 'next/link'
import Image from 'next/image'

// Assets
import logo from '@src/assets/Images/Logo/whiteLogo.webp'
import instagram from '@src/assets/Images/Socmed/instagram.svg'
import gmail from '@src/assets/Images/Socmed/gmail.svg'
import linkedin from '@src/assets/Images/Socmed/linkedin.svg'
import tiktok from '@src/assets/Images/Socmed/tiktok.svg'
import youtube from '@src/assets/Images/Socmed/youtube.svg'

const Footer: React.FC = () => {
  interface Contact {
    image: string
    type: string
    username: string
    link: string
  }

  const contacts: Contact[] = [
    {
      image: gmail,
      type: 'Email',
      username: 'sre@km.itb.ac.id',
      link: 'gmail.com'
    },
    {
      image: tiktok,
      type: 'Tiktok',
      username: '@sreitb',
      link: 'https://www.tiktok.com/@sreitb'
    },
    {
      image: instagram,
      type: 'Instagram',
      username: '@sreitb',
      link: 'https://www.instagram.com/sreitb/?hl=en'
    },
    {
      image: youtube,
      type: 'Youtube',
      username: '@sreitb9329',
      link: 'https://www.youtube.com/channel/UCcOfjxxKSJR3WHNa4BsQxww?app=desktop'
    },
    {
      image: linkedin,
      type: 'LinkedIn',
      username: 'Society of Renewable<br>Energy ITB',
      link: 'https://www.linkedin.com/company/sreitb'
    }
  ]

  return (
    <div className="w-full">
      <div className="h-auto w-full flex flex-col justify-center items-center bg-green sm:justify-start sm:flex-row">
        <div className='sm:pl-8 sm:w-3/5'>
          <img src={logo.src} alt="logo" className="sm:h-[240px] sm:w-[290px] sm:px-0 px-[25%]" />
          <div className='font-[OpenSans-Regular] text-white mb-[40px] mt-[-20px] text-center sm:text-left sm:ml-[57px] italic text-[20px]'>
            #EnergizingSREITB
          </div>
        </div>
        <div className="text-white sm:grid flex grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {contacts.map((contact, index) => (
            <div className="flex items-center" key={index}>
              <Link href={contact.link}>
                <div className="cursor-pointer mx-[2vw] sm:mx-0 sm:mr-2">
                  <Image
                    src={contact.image}
                    alt={contact.type}
                    width="35px"
                    height="35px"
                    style={{ filter: 'brightness(0) invert(0.9)' }}
                  />
                </div>
              </Link>
              <Link href={contact.link}>
                <p
                  className="hidden sm:block font-normal text-[12px] sm:text-[14px] mt-[-5px]"
                  dangerouslySetInnerHTML={{ __html: contact.username }}
                />
              </Link>
            </div>
          ))}
        </div>
        <br />
      </div>
      <div className="sm:h-[70px] h-[50px] w-full bg-black sm:text-[18px] text-[15px] text-white font-sans italic flex items-center justify-center md:justify-start md:pl-20">
        <p>© 2023 SRE ITB – All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
