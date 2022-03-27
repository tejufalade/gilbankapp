import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import MiniIcons from './MiniIcons'
import { Link } from 'react-router-dom'
const Dashboard = () => {

    const cards = [
        {
            title: 'Current account',
            amount:'£367.15',
        },
        {
            title: 'Savings account',
            amount:'£1965.20',
        },
    ]
    // const rec = ['Transfer between accounts','Send money (local)','Send money (abroad)','View transaction statement']
    const rec = [
        {
            id: 1,
            name: 'Transfer between accounts', 
            linkTo: '/transfer'
        },
        {
            id: 2,
            name: 'Local transfer',
            linkTo: '/local'
        },
        {
            id: 3,
            name: 'International transfer',
            linkTo: '/abroad'
        },
        {
            id: 4,
            name: 'View transaction history',
            linkTo: '/history'
        }
    ]
  return (
   <DashboardLayout>
       <MiniIcons/>
       <div className='h-[85vh] px-8' >
           <h2 className='mt-6 text-[25px] font-bold'>Welcome Helen,</h2>
           <div className='mt-4 w-full flex justify-between items-center'>
               {cards.map((card)=>(
             <div key={card.title} className='w-[680px] h-56 flex flex-col content-center justify-center px-8 bg-gradient-to-r from-sky-500 to-[#0B72AB] shadow-lg'>
            <h6 className='text-white text-[25px] font-bold'>{card.title}</h6>
            <p className='text-[25px] font-regular mt-4'>{card.amount}</p>
            <p className='text-[18px] font-regular text-navyblue mt-4'>view details</p>
             </div>
               ))}
           </div>
           <div className='mt-12'>
               {rec.map((dino)=>(
                <div className='w-[869px] h-[80px] bg-[#EBEBEB] mt-4 flex items-center px-8' key={dino.id}>
                    <Link to={dino.linkTo}>
                    <p className='text-[18px] font-regular'>{dino.name}</p>
                    </Link>
                   
                </div>
               ))}
           </div>
       </div>
   </DashboardLayout>
  )
}

export default Dashboard