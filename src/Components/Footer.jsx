import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='w-screen bg-[#727272] px-8 py-14'>
       <div className='w-2/3 flex justify-between items-center'>
       <div className='flex flex-col'>
            <span className='logo text-[20px]'>Gilbank</span>
            <span className='text-white'>&copy; 2022 Gilbank Inc.</span>
        </div>
        <div className='w-96'>
        <ul className='flex justify-between items-center text-white'>
                <li><Link to='/'>About us</Link></li>
                <li><Link to='/'>Contact us</Link></li>
                <li><Link to='/'>Help</Link></li>
                <li><Link to='/'>Search</Link></li>
                <li><Link to='/'>Privacy</Link></li>
                
            </ul>
        </div>
       </div>
    </div>
  )
}

export default Footer