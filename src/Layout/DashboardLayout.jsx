import React from 'react'
import Footer from '../Components/Footer'
import HeaderTwo from '../Components/HeaderTwo'


const DashboardLayout = ({children}) => {
  return (
    <>
    <HeaderTwo/>
    <div className='bg-[#f5f5f5] w-screen pb-16'>
        {children}
    </div>
    <Footer/>
    </>
  )
}

export default DashboardLayout