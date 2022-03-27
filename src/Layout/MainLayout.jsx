import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const MainLayout = ({children}) => {
  return (
    <>
    <Header/>
    <div className='bg-[#f5f5f5] w-screen pb-16'>
        {children}
    </div>
    <Footer/>
    </>
  )
}

export default MainLayout