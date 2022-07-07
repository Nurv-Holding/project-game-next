import Link from 'next/link';
import { useState } from 'react';
import {
  AiOutlineMenu,
  AiFillCloseCircle,
  AiOutlineLineChart} from 'react-icons/ai';
import {BsFillSuitSpadeFill, BsSuitClubFill} from 'react-icons/bs';

const Links = [
    {
      icon: <AiOutlineLineChart />,
      to: '/Crash',
      name: 'Crash',
    },
    {
      icon: <BsFillSuitSpadeFill />,
      to: '/Roleta',
      name: 'Roleta',
    },
    {
      icon: <BsSuitClubFill />,
      to: '/Jackpot',
      name: 'JockPot',
    },
  ];

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className='w-full xl:w-[200px] xl:h-full xl:border-r xl:border-yellow-500'>
      {/* Menu Desktop */}
      <div className='py-5 hidden xl:block'>
        <ul className='max-w-[90px] mx-auto flex flex-col justify-center'>
          {Links.map((item, index) => {
            return (
              <li className='pt-3' key={index}>
                <Link href={item.to}>
                  <a className='flex gap-2 items-center'>
                    {item.icon}
                    <span>
                      {item.name}
                    </span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Menu Mobile */}
      <div className='w-full flex items-center bg-gray-800 border-t border-yellow-500 fixed bottom-0 left-0 h-[60px] px-2 xl:hidden'>
        <div 
          onClick={handleOpenMenu}
          className='flex flex-col items-center gap-1 py-2'
        >
          <AiOutlineMenu className='text-white text-xl ' />
          <span className='text-white text-sm text-semibold'>MENU</span>
        </div>
      </div>
      {!showMenu !== true ? (
          <div className='fixed top-0 left-0 w-full h-screen bg-gray-800 translate-x-0 transition-transform duration-1000'>
            <div 
              onClick={handleOpenMenu}
              className='max-w-[90%] mx-auto flex justify-between items-center h-[50px] border-b border-yellow-500'>
              <h1 className='text-md text-yellow-500'>CASSINO</h1>
              <AiFillCloseCircle className='text-gray-500 bg-gray-200 rounded-full text-xl' />
            </div>
            <ul className='max-w-[90px] mx-auto flex flex-col justify-center'>
              {Links.map((item, index) => {
                return (
                  <li className='pt-3' key={index}>
                    <Link href={item.to}>
                      <a className='flex gap-2 items-center' onClick={handleOpenMenu}>
                        {item.icon}
                        <span>
                          {item.name}
                        </span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null
      }
    </nav>
  )
}

export default Sidebar