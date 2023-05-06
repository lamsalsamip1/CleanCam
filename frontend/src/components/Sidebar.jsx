import React from 'react'
import { TbTools } from 'react-icons/tb'
import { BiHomeSmile, BiUserVoice, BiMessageSquareError } from 'react-icons/bi'
// import {GiSuspicious} from 'react-icons/gi'
import { GiCctvCamera } from 'react-icons/gi'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../assets/logo3.png'

const Sidebar = () => {
  const pathname = window.location.pathname

  const arr = [
    {
      id: 1,
      name: 'Home',
      link: '/',
      icon: <BiHomeSmile size={27} />,
    },
    {
      id: 2,
      name: 'Tool',
      link: '/tool',
      icon: <TbTools size={26} />,
    },
    {
      id: 3,
      name: 'Suspects',
      link: '/suspects',
      icon: <BiUserVoice size={28} />,
    },
  ]
  return (
    <>
      <div className="flex flex-col justify-between w-full h-screen border-r-2 border-gray-300">
        <div>
          <div className='flex items-center'>
            {/* <div><img src={Logo} alt="Logo" className='w-10 mx-3 border-2 border-black rounded-xl' /></div> */}
            <div className='mx-3'><GiCctvCamera size={35} /></div>
            <h1 className="flex items-center justify-center text-3xl font-bold h-28">
              CleanCam
            </h1>
          </div>
          <ul>
            {arr.map(({ id, name, link, icon }) => (
              <Link to={link} key={id}>
                <li className="flex justify-center w-full text-gray-600 cursor-pointer dark:text-gray-300">
                  <div
                    className={`${pathname === link ? 'bg-primary shadow-xl dark:bg-primary-dark text-white hover:text-white dark:hover:text-white' : ''
                      } flex items-center hover:text-primary dark:hover:text-primary-dark my-1 h-12 rounded-full w-56`}
                  >
                    <span className="px-4">{icon}</span>{' '}
                    <span className="mx-4 text-base font-medium">{name}</span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex justify-center w-full px-4 text-gray-600 cursor-pointer">
            <div className="flex items-center w-56 my-1 border-t-2 border-gray-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark h-14">
              <span className="px-4">
                <BiMessageSquareError size={26} />
              </span>{' '}
              <span className="mx-2 text-base font-medium"> Report an issue</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
