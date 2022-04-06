import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {

    const [visible ] = useState(true)
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
          navigate('/dashboard')}
  return (
      <>

    <div className={`h-[700px] w-[600px] bg-white py-8 px-6 ${visible ?'' : 'right-[-1000px]'}`} >
        <div className='flex justify-between items-center text-xl'>
        <p>Log In</p>
        {/* <i className="fa-solid fa-xmark" onClick={() => setVisible(!visible)}></i> */}
        </div>
       
        <form className='mt-8' onSubmit={handleSubmit}>
            <div>

           <label htmlFor="accountNmuber">Account number</label> 
           <input type="text" id='accountNumber' name='accountNumber' className='px-2 py-4 border block h-10 w-[424px] mt-2 bg-stone-200 rounded-md' required/>
            </div>
            <div className='mb-4 mt-6'>

           <label htmlFor="pin">Pin</label> 
           <input type="password" id='pin' name='pin' className='px-2 py-4 border block h-10 w-[424px] mt-2 bg-stone-200 rounded-md' required/>
            </div>
            <a href="/">Forgot Pin?</a>
            <button type="submit" className='bg-skyblue text-white w-32 h-12 flex justify-center items-center rounded-md mt-4 mb-8'>Log In</button>
            <p>Do not have access yet?<Link to='/register' className='text-skyblue'> Register</Link>{' '}now</p>
        </form>
    </div>
    </>
  )
}

export default Login