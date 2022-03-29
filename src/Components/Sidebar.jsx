import React from 'react'
import { Link } from 'react-router-dom'
import {BiHomeAlt} from 'react-icons/bi'
import {BsArrowLeftRight, BsClockHistory} from 'react-icons/bs'




const links= [
    {
      title: 'Home', 
      link: '/transfer',
      icon: <BiHomeAlt/>
    },
    {
      title: 'Local transfer',
      link: '/send-local',
      icon:  <BsArrowLeftRight/>
    },
    {
      title: 'Abroad transfer',
      link: '/send-abroad',
      icon:<BsArrowLeftRight/>
    },
    {
      title: 'Transaction history',
      link: '/history',
      icon: <BsClockHistory/>
    }
    
  ]

const Sidebar = () => {
  return (
    <>
         <nav className='sidebar z-20 bg-grey rounded-tr-lg h-88 sticky top-0 left-0 mt-14'>
                <ul className='flex flex-col items-start content-center w-48 mt-8 mx-4'>
                  {links.map((link) => (
                     <li key={link.title} className='mt-8 cursor-pointer hover:bg-skyblue rounded-md py-2 px-3 w-full text-skyblue hover:text-white font-semibold'>
                     <Link to={link.link} className='flex items-center'>
                       <span className="icons mr-2 font-semibold text-[20px]">
                         {link.icon}
                       </span>
                       <span className="title">
                         {link.title}
                       </span>
                     </Link>
                 </li>
                  ))}
                </ul>
            </nav>
    </>
  )
}

export default Sidebar