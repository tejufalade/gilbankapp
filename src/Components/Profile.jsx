import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
const Profile = () => {
  return (
    <DashboardLayout>
        <div className='pt-10 px-8'>
        <h1 className='text-'>Profile</h1>
        <div className='bg-white w-96 '>
            <p>Helen Adeyemo</p>
            <p>Account Number:0160972659</p>
        </div>
        <div>
            <h4>Your contact details</h4>
            <p>Mobile: +44765412345</p>
            <p>Home: +44765412345</p>
            <p>Work: +44765412345</p>
            <hr/>
            <p>Address: 28 Stevens Avenue
                <br/>
                <span>Preston</span>
                <br/>
                <span>Lancashire</span> </p>
                <p>Postcode: PR 12H</p>
                <hr/>
                <p>Email:  <a href="mailto:toimander@gmail.com">toimander@gmail.com</a></p>
        </div>
        </div>
           
    </DashboardLayout>
  )
}

export default Profile