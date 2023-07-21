import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'

import ArrowDownIcon from '@src/components/Icon/ArrowDownIcon'
import Logo from '@src/assets/Images/Logo/whiteLogo.png'

const MENU_LIST = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About Us',
    href: '/'
  },
  {
    text: 'Activity',
    contents: [
      {
        text: 'Internal Program',
        href: '/'
      },
      {
        text: 'External Program',
        href: '/'
      },
      {
        text: 'Learning Program',
        href: '/'
      },
      {
        text: 'Project',
        href: '/'
      }
    ]
  },
  {
    text: 'Student',
    href: '/'
  },
  {
    text: 'IYREF',
    href: '/'
  },
  {
    text: 'Merchandise',
    href: '/'
  }
]

function MobileHoverDropdown ({
  open,
  setOpen,
  contents,
  dropdownIdx,
  idx
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  contents: Array<{ text: string, href: string }>
  dropdownIdx: number
  idx: number
}): JSX.Element {
  return (
    <div
      className={`${
        dropdownIdx === idx ? '' : 'hidden'
      } flex flex-col text-left`}>
      {contents.map((content, idx) => (
        <a
          key={idx}
          className="py-2 pl-5 text-white opacity-90 hover:opacity-70 font-bold cursor-pointer"
          onClick={() => {
            setOpen(!open)
          }}
          href={content.href}>
          {content.text}
        </a>
      ))}
    </div>
  )
}

function HoverDropdown ({
  contents
}: {
  contents: Array<{ text: string, href: string }>
}): JSX.Element {
  return (
    <div className="hidden peer-hover:absolute peer-hover:flex hover:absolute hover:flex flex-col w-64 py-3 top-20 left-1/2 transform -translate-x-1/2 border-solid border-2 border-greenSRE100 rounded-2xl bg-white z-50">
      {contents.map((content, idx) => (
        <a
          key={idx}
          className="px-5 py-3 hover:bg-greenSRE100 text-greenSRE100 hover:text-white font-bold cursor-pointer"
          href={content.href}
          >
          {content.text}
        </a>
      ))}
    </div>
  )
}

function MobileNav ({
  open,
  setOpen,
  dropdownIdx,
  setDropdownIdx
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  dropdownIdx: number
  setDropdownIdx: Dispatch<SetStateAction<number>>
}): JSX.Element {
  return (
    <div
      className={`fixed overflow-y-auto top-0 left-0 z-10 h-screen w-screen lg:hidden bg-[#0D664C] transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-screen justify-center items-center">
        {MENU_LIST.map((menu, idx) => {
          return (
            <div
              key={idx}
              className="w-40 mx-auto"
              onClick={() => {
                setDropdownIdx(dropdownIdx === idx ? -1 : idx)
              }}
            >
              <a
                className='cursor-pointer hover:opacity-80 inline-block py-2 text-white font-bold'
                onClick={() => {
                  if (!menu.contents) {
                    setOpen(!open)
                  }
                }}
                href={menu.contents ? undefined : menu.href}
              >
                <div
                  className='py-2 inline-flex items-center'
                >
                  {menu.text}
                  {menu.contents
                    ? (
                      <ArrowDownIcon color="white" className="ml-1"></ArrowDownIcon>
                      )
                    : (
                        ''
                      )}
                </div>
              </a>
              {menu.contents
                ? (
                <MobileHoverDropdown
                  open={open}
                  setOpen={setOpen}
                  contents={menu.contents}
                  dropdownIdx={dropdownIdx}
                  idx={idx}
                ></MobileHoverDropdown>
                  )
                : (
                    ''
                  )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [dropdownIdx, setDropdownIdx] = useState(-1)

  return (
    <nav className="fixed flex top-0 w-full justify-center z-50 font-inter">
      <div
        className={`${open ? 'h-screen' : ''} w-full h-[200px] flex`}
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(13, 102, 76, 1) 0%, rgba(13, 102, 76, 0.5) 65%, rgba(13, 102, 76, 0) 95%)'
        }}
      >
        <MobileNav
          open={open}
          setOpen={setOpen}
          dropdownIdx={dropdownIdx}
          setDropdownIdx={setDropdownIdx}
        />
        <div className="w-[200px] h-[100px] flex mt-[-15px]">
          <a className='cursor-pointer' href="/">
            <Image src={Logo} alt="logo" className="" />
          </a>
        </div>
        <div className="w-full flex justify-end">
          <div
            className={`${
              open ? 'fixed right-0' : ''
            } right-0 top-0 mt-[32px] mr-[15px] z-50 flex flex-col w-10 h-6 justify-between cursor-pointer lg:hidden`}
            onClick={() => {
              setOpen(!open)
            }}>
            <span
              className={`h-1 w-6 bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? 'w-7 bg-white rotate-45 translate-y-2.5' : ''
              }`}
            />
            <span
              className={`h-1 w-6 bg-white rounded-lg transition-all duration-300 ease-in-out ${
                open ? 'h-0' : 'w-6'
              }`}
            />
            <span
              className={`h-1 w-6 bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? 'w-7 bg-white -rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </div>
          <div className="hidden lg:flex">
            {MENU_LIST.map((menu, idx) => (
              <div key={idx} className="relative inline-flex">
                <a
                  className={`${'active px-6 mx-2 py-8 h-[80px]'
                  } ${menu.contents ? 'peer' : 'inline-block'} text-[#FFFFFF] hover:opacity-80 font-bold cursor-pointer`}
                  href={menu.href}
                >
                  <div
                    className={`${
                      (idx === 0 && !menu.contents) || dropdownIdx === idx
                        ? 'border-b-2 border-white'
                        : ''
                    } inline-flex items-center`}
                  >
                    {menu.text}
                    {menu.contents ? <ArrowDownIcon color="white" /> : ''}
                  </div>
                </a>
                {menu.contents
                  ? (
                  <HoverDropdown contents={menu.contents}></HoverDropdown>
                    )
                  : (
                      ''
                    )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
