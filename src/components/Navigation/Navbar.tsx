import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

import ToggleButton from '@src/components/Button/Toggle'

import ArrowDownIcon from '@src/components/Icon/ArrowDownIcon'
import sreLogo from '@src/assets/Images/Navigation/Navbar/sreLogo.png'
import IyrefLogo from '@src/assets/Images/Navigation/Navbar/iyrefLogo.png'

interface Menu {
  text: string
  href: string
  contents?: Array<{ text: string, href: string }>
}

const MENU_LIST: Menu[] = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Activity',
    href: '/activity'
  },
  {
    text: 'Student',
    href: '/student'
  },
  {
    text: 'Merchandise',
    href: '/merchandise'
  },
  {
    text: 'Home',
    href: '/iyref'
  },
  {
    text: 'Pre-Event',
    href: '/iyref/comvis',
    contents: [
      {
        text: 'REFWON',
        href: '/iyref/refwon'
      },
      {
        text: 'ComVis',
        href: '/iyref/comvis'
      }
    ]
  },
  {
    text: 'Competitions',
    href: '/iyref/bcc',
    contents: [
      {
        text: 'Business Case Competition',
        href: '/iyref/bcc'
      },
      {
        text: 'Business Plan Competition',
        href: '/iyref/bpc'
      },
      {
        text: 'National Essay Competition',
        href: '/iyref/nec'
      }
    ]
  },
  {
    text: 'NEX STEP',
    href: '/iyref/pcc',
    contents: [
      {
        text: 'Policy Case Competition',
        href: '/iyref/pcc'
      },
      {
        text: 'Policy Workshop',
        href: '/iyref/pw'
      }
    ]
  },
  {
    text: 'Summit',
    href: '/iyref/summit'
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
    <div className="hidden peer-hover:absolute peer-hover:flex hover:absolute hover:flex flex-col w-64 py-3 top-20 left-1/2 transform -translate-x-1/2 border-solid border-2 border-green rounded-lg bg-white z-50">
      {contents.map((content, idx) => (
        <a
          key={idx}
          className="px-5 py-3 hover:bg-green5 text-green2 hover:text-white font-bold cursor-pointer"
          href={content.href}>
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
  setDropdownIdx,
  handleToggle,
  menuList,
  page
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  dropdownIdx: number
  setDropdownIdx: Dispatch<SetStateAction<number>>
  handleToggle: (isChecked: boolean) => void
  menuList: Menu[]
  page: string
}): JSX.Element {
  const [isDesktopSize, setIsDesktopSize] = useState(true)

  useEffect(() => {
    const updateWindowSize = (): void => {
      setIsDesktopSize(window.innerWidth > 1280)
    }
    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)
    return () => {
      window.removeEventListener('resize', updateWindowSize)
    }
  }, [])
  return (
    <div
      className={`fixed overflow-y-auto top-0 left-0 z-10 h-screen w-screen xl:hidden bg-green5 transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}>
      <div className="flex flex-col h-screen justify-center">
        {menuList.map((menu, idx) => {
          return (
            <div
              key={idx}
              className="w-40 text-center mx-auto"
              onClick={() => {
                setDropdownIdx(dropdownIdx === idx ? -1 : idx)
              }}>
              <a
                className="cursor-pointer hover:opacity-80 inline-block py-2 text-white font-bold"
                onClick={() => {
                  if (!menu.contents) {
                    setOpen(!open)
                  }
                }}
                href={menu.contents ? undefined : menu.href}>
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
        {isDesktopSize
          ? null
          : (
            <div className='flex justify-center mt-[15px] px-6 mx-2'>
              <ToggleButton state={page === 'iyref'} onToggle={handleToggle} />
            </div>
            )}
      </div>
    </div>
  )
}

const Navbar: React.FC<{ e?: string }> = ({ e }): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [dropdownIdx, setDropdownIdx] = useState(-1)
  const [isNavbarSolid, setIsNavbarSolid] = useState(false)
  const [menuList, setMenuList] = useState(MENU_LIST)

  const router = useRouter()
  const page = router.pathname.split('/')[1] || 'home'
  const iyrefPage = router.pathname.split('/')[2] || 'home'

  useEffect(() => {
    if (page === 'iyref') {
      setMenuList(MENU_LIST.filter((item) => item.href.split('/')[1] === 'iyref'))
    } else {
      setMenuList(MENU_LIST.filter((item) => item.href.split('/')[1] !== 'iyref'))
    }
  }, [page])

  const handleToggle = (isChecked: boolean): void => {
    if (isChecked) {
      setTimeout(() => {
        void router.push('/iyref')
      }, 200)
    } else {
      setTimeout(() => {
        void router.push('/')
      }, 200)
    }
  }

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY !== 0) {
        setIsNavbarSolid(true)
      } else {
        setIsNavbarSolid(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.nav
      className="fixed flex top-0 w-full justify-center z-50 font-montserrat"
      initial={{ backgroundColor: e ? '#2C9A7F' : 'rgba(0, 0, 0, 0)' }}
      animate={{ backgroundColor: isNavbarSolid || e ? '#2C9A7F' : 'rgba(0, 0, 0, 0)' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div
        className={`${open ? 'h-screen' : ''} w-full h-[80px] flex`}>
        <MobileNav
          open={open}
          setOpen={setOpen}
          dropdownIdx={dropdownIdx}
          setDropdownIdx={setDropdownIdx}
          handleToggle={handleToggle}
          menuList={menuList}
          page={page}
        />
          <div className="w-[70px] sm:w-[90px] ml-[30px] sm:ml-[5vw] flex items-center">
          {page === 'iyref'
            ? (
              <Image src={IyrefLogo} alt="IYREF logo" />
              )
            : (
              <Image src={sreLogo} alt="SRE logo" />
              )}
          </div>
        <div className="flex fixed z-20 w-full justify-end">
          <div
            className={`${
              open ? 'fixed right-0' : ''
            } right-0 top-0 mr-[15px] z-50 flex flex-col w-10 h-6 justify-between cursor-pointer xl:hidden mt-[30px]`}
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
                open ? 'h-0 w-0' : 'w-6'
              }`}
            />
            <span
              className={`h-1 w-6 bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? 'w-7 bg-white -rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </div>
          <div className="hidden xl:flex">
            {menuList.map((menu, idx) => (
              <div key={idx} className="relative inline-flex items-center mt-[-7px]">
                <a
                  className={`${'active px-6 mx-2 py-8'} ${
                    menu.contents ? 'peer' : 'inline-block'
                  } text-white hover:opacity-80 cursor-pointer`}
                  href={menu.href}>
                  <div
                    className={`${
                      (idx === 0 && page === 'home') ||
                      (idx === 1 && page === 'about') ||
                      (idx === 2 && page === 'activity') ||
                      (idx === 3 && page === 'student') ||
                      (idx === 4 && page === 'merchandise') ||
                      (idx === 0 && (iyrefPage === 'home' && page === 'iyref')) ||
                      (idx === 1 && (iyrefPage === 'refwon' || iyrefPage === 'comvis')) ||
                      (idx === 2 && (iyrefPage === 'bpc' || iyrefPage === 'nec' || iyrefPage === 'bcc')) ||
                      (idx === 3 && (iyrefPage === 'pcc' || iyrefPage === 'pw')) ||
                      (idx === 4 && iyrefPage === 'summit')
                        ? 'rounded-[20px] bg-green7 py-[4px] px-[15px] font-bold'
                        : ''
                    } inline-flex items-center`}>
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
            <div className='inline-flex items-center mt-[-7px] px-6 mx-2'>
              <ToggleButton state={page === 'iyref'} onToggle={handleToggle} />
            </div>
          </div>
        </div>
      </div>
      </motion.nav>
  )
}

Navbar.propTypes = {
  e: PropTypes.string
}

export default Navbar
