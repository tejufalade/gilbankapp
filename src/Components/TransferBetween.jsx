import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import { Link } from 'react-router-dom'
import {IoSettingsOutline} from 'react-icons/io5'
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsArrowLeftRight, BsClockHistory} from 'react-icons/bs'
import {FaRegEnvelope} from 'react-icons/fa'
import {IoMdNotificationsOutline} from 'react-icons/io'
import MiniIcons from './MiniIcons'

const links= [
  {
    title: 'Home', 
    icon: <BiHomeAlt/>
  },
  {
    title: 'Local transfer',
    icon:  <BsArrowLeftRight/>
  },
  {
    title: 'Abroad transfer',
    icon:<BsArrowLeftRight/>
  },
  {
    title: 'Transaction history',
    icon: <BsClockHistory/>
  }
  
]
const TransferBetween = () => {
  return (
    <DashboardLayout>
      <MiniIcons/>
        <div className='flex w-full items-center justify-between relative bg-green-100'>
            <div className='sidebar w-48 h-[70px] bg-red-100 absolute bottom-0 left-0'>
            <nav className='h-full mt-8'>
              <ul className=''>
                {links.map((link)=>(
                  <li key={link.title} className='mt-6'>
                  <Link to='/' className='flex'>
                  {link.icon}
                  <span>{link.title}</span>
                  </Link>
                </li>
                ))}
                
               
                </ul>
            </nav>
            </div>
            {/* <div>
                randy
            </div> */}
        </div>
    </DashboardLayout>
  )
}

export default TransferBetween