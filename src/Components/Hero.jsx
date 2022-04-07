import React,{useState} from 'react'
import MainLayout from '../Layout/MainLayout'
import { Link } from 'react-router-dom'
import Login from './Login'
import BankOffers  from './BankOffers'

const Hero = () => {
  const [open, setOpen] = useState(false)
  const [welcomeText, setWelcomeText] = useState(false)

  return (
    <MainLayout>
    <div className='flex justify-between items-center px-8 pt-6 h-[82vh] relative'>
        <div className='w-1/2 leading-10 py-12 absolute left-8 z-10'>
            <h1 className='text-5xl text-navyblue leading-normal font-bold'>Super fast banking that suits your lifestyle.</h1>
            <h6 className='text-xl mt-8'>Enjoy the convenience of sending and receiving money across the world from the comfort of your home.</h6>
            <div className='mt-8 w-1/2 flex justify-between items-center'>
                <button className='border border-skyblue w-32 h-12 flex justify-center items-center rounded-md'><Link to='/register'>Register</Link></button>
                <button className='bg-skyblue text-white w-32 h-12 flex justify-center items-center rounded-md'  onClick={()=>{setOpen(!open)}}>Log In</button>

                <div className={`absolute -top-16 ${open ? 'right-[-700px]' : 'right-[-2000px]'}`} >
               <Login/>
            </div>
            </div>
        </div>
        <div className='hero-img w-1/2 h-full absolute right-0 bottom-0 flex justify-center items-center transition-all ease-in-out hover:duration-700 '
        onMouseEnter={() => setWelcomeText(true) }
        onMouseLeave={ () => setWelcomeText(false)}>

           {welcomeText && <span className='text-3xl animate-bounce font-bold'>Welcome to <span className="text-skyblue">Gilbank</span></span>}
        </div>
    </div>
    <div className='mb-48'>
            <BankOffers />
        </div>
    </MainLayout>
  )
}

export default Hero