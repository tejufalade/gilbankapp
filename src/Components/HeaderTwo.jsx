import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'


const HeaderTwo = () => {
const [open, setOpen] = useState(false)

  return (
    <div className='w-screen bg-[#E9EEF1] h-16 flex justify-between px-8 items-center border-b-4 sticky top-0 left-0 right-0 z-50 '>
        <div className='logo text-3xl'>GilBank</div>
        <nav className='w-1/3 relative'>
            <ul className='flex justify-between items-center'>
                <li><Link to='/'>Contact us</Link></li>
                <li><Link to='/'>Search</Link></li>
                <li><Link to='/'>Profile</Link></li>
                
            </ul>
            <div className={`absolute top-14 ${open ? 'right-0' : 'right-[-1000px]'}`} >
               <Login/>
            </div>
           
        </nav>
    </div>
  )
}

export default HeaderTwo