import React, {useContext} from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import { AppContext } from "../Context/AppContext";
import {Link} from "react-router-dom" 

const Profile = () => {
  const {user } = useContext(AppContext);

  // const handleLogout = () => localStorage.removeItem(user.account_number)
   
  return (
    <DashboardLayout>
        <div className='pt-10 px-8 flex flex-col items-center justify-center'>
        <h1 className='text-[20px] mb-6'>Profile</h1>
        <div className='bg-white w-[700px] flex flex-col items-center justify-center py-4 rounded-md'>
            <p className='mb-2'>{user.userName}</p>
            <p>Account Number:{user.account_number}</p>
        </div>
        <div className='bg-white w-[700px] flex flex-col justify-center mt-2 py-4 rounded-md'>
          <div className='border-b-2 border-black w-full px-4'>
          <h4 className='mb-6'>Your contact details</h4>
            <p className='mb-2'>Mobile: +44765412345</p>
            <p className='mb-2'>Home: +44765412345</p>
            <p className='mb-2'>Work: +44765412345</p>
          </div>
           
            <div className='mt-2 border-b-2 border-black px-4'>
           
            <p className='mb-6 mt-4'>Address: <span className='ml-3'>28 Stevens Avenue</span> 
                <br/>
                <span className='ml-20' >Preston</span>
                <br/>
                <span className='ml-20'>Lancashire</span> </p>
                <p className='mb-4'>Postcode: <span className='ml-2'>
                 PR 12H </span> </p>
               
                </div>

              
                <p className='px-4 py-2  mt-4'>Email:  <a href="mailto:toimander@gmail.com" className='ml-3 text-navyblue'>toimander@gmail.com</a></p>
                <Link to="/" className='px-4 text-red-600'>Log out</Link>
        </div>
        </div>
           
    </DashboardLayout>
  )
}

export default Profile