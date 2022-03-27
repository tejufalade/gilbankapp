import React, { useState } from 'react'
import MainLayout from '../Layout/MainLayout'
import check from '../Images/check.png'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const [isRegistered, setIsRegistered]= useState(false)
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsRegistered(true)
          navigate('/dashboard')
    }
    

  return (
      <MainLayout>
          {isRegistered ? (
              <img src={check} alt="" />
          ) : ( <div className='flex flex-col items-center content-center px-8 h-[90vh] relative'>
          <div className='leading-10 mt-8'>
          <h1 className='text-3xl font-semibold text-navyblue'>Register a new account</h1>
          <h6 className='text-ml mt-2 mb-4 text-center'>Fill out the form to get started.</h6>
          </div>
  
          <form className='' onSubmit={handleSubmit}>
          <div>
  
          <label htmlFor='firstName'>First name</label>
      <input type="text" id='firstName' name='firstName' className='px-2 py-4 border block h-10 w-[424px] mt-2 bg-stone-200 rounded-md' required/>
          </div>
  
          <div className='mt-8'>
          <label htmlFor='lastName'>Last name</label>
      <input type="text" id='lastName' name='lastName' className='px-2 py-4 border block h-10 w-[424px] mt-2 bg-stone-200 rounded-md'required/>
  
  
          <div className='mt-8'>
          <label htmlFor='accountNumber'>Account Number</label>
      <input type="text" id='accountNumber' name='accountNumber' className='px-2 py-4 border block h-10 w-[424px] mt-2 bg-stone-200 rounded-md'required/>
  
      <div className='mt-8'>
      <label htmlFor='pin'>Pin (six-digit)</label>
      <input type="password" id='pin' name='pin' className='px-2 py-4 border block h-10 w-[424px] mt-2 bg-stone-200 rounded-md'required/>
      </div>
          </div>
  
          <button type="submit" className='bg-skyblue text-white w-32 h-12 flex justify-center items-center rounded-md mt-4 mb-8'>Resgister</button>
          <p>Already have an account? <a href="/" className='text-skyblue'>Log In{''} </a> </p>
          </div>
          </form>
          
         
      </div>)}
   
    </MainLayout>
    
  )
}

export default Registration