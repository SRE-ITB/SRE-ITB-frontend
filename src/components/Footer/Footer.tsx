import Link from 'next/link';
import Image from 'next/image';

// Assets
import logo from '../Logo/whiteLogo.png';
import instagram from '../../assets/images/instagram.svg';
import gmail from '../../assets/images/gmail.svg';
import linkedin from '../../assets/images/linkedin.svg';
import tiktok from '../../assets/images/tiktok.svg';
import youtube from '../../assets/images/youtube.svg';

const Footer: React.FC = () => {
  interface Contact {
    image: string;
    type: string;
    username: string;
    link: string;
  }

  const contacts: Contact[] = [
    {
      image: gmail,
      type: 'Email',
      username: 'sre@km.itb.ac.id',
      link: 'gmail.com',
    },
    {
      image: tiktok,
      type: 'Tiktok',
      username: '@sreitb',
      link: 'https://www.tiktok.com/@sreitb',
    },
    {
      image: instagram,
      type: 'Instagram',
      username: '@sreitb',
      link: 'https://www.instagram.com/sreitb/?hl=en',
    },
    {
      image: youtube,
      type: 'Youtube',
      username: '@sreitb9329',
      link: 'https://www.youtube.com/channel/UCcOfjxxKSJR3WHNa4BsQxww?app=desktop',
    },
    {
      image: linkedin,
      type: 'LinkedIn',
      username: 'Society of Renewable Energy ITB',
      link: 'https://www.linkedin.com/company/sreitb',
    },
  ];

  return (
    <div className="w-full">
      <div className="h-auto w-full flex flex-col justify-center items-center bg-green md:justify-start md:flex-row">
        <div className="sm:pl-8 sm:w-3/5">
          <Image src={logo} height="270px" width="270px" />
        </div>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map((contact, index) => (
            <div className="flex items-center" key={index}>
              <Link href={contact.link}>
                <div className="mr-2">
                  <Image
                    src={contact.image}
                    alt={contact.type}
                    width="40px"
                    height="40px"
                    style={{ filter: 'brightness(0) invert(0.9)' }}
                  />
                </div>
              </Link>
              <Link href={contact.link}>
                <p className="font-normal">{contact.username}</p>
              </Link>
            </div>
          ))}
        </div>
        <br />
      </div>
      <div className="h-[80px] w-full bg-black text-[18px] text-white font-sans italic flex items-center justify-center md:justify-start md:pl-20">
        <p>© 2023 SRE ITB – All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
