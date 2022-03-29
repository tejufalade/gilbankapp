import React,{useState} from 'react'
// import spag from '../Images/hero-pic.jpg'
import MainLayout from '../Layout/MainLayout'
import { Link } from 'react-router-dom'
import Login from './Login'

const Hero = () => {
  const [open, setOpen] = useState(false)

  return (
    <MainLayout>
    <div className='flex justify-between items-center px-8 h-[82vh] relative'>
        <div className='w-1/2 leading-10 py-12 absolute'>
            <h1 className='text-5xl text-navyblue leading-normal font-bold'>Super fast banking that suits your lifestyle.</h1>
            <h6 className='text-xl mt-8'>Enjoy the convenience of sending and receiving money across the world from the comfort of your home.</h6>
            <div className='mt-8 w-1/2 flex justify-between items-center'>
                <button className='border border-skyblue w-32 h-12 flex justify-center items-center rounded-md'><Link to='/register'>Register</Link></button>
                <button className='bg-skyblue text-white w-32 h-12 flex justify-center items-center rounded-md'  onClick={()=>{setOpen(!open)}}>Log In</button>

                <div className={`absolute -top-14 ${open ? 'right-[-700px]' : 'right-[-2000px]'}`} >
               <Login/>
            </div>
            </div>
        </div>
        <div className=''>
            
        </div>
    </div>
    </MainLayout>
  )
}

export default Hero