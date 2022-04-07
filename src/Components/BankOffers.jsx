import React from 'react'
import growth from '../Images/growth.png'
import interestrate from '../Images/interest-rate.png'
import checked from '../Images/checked.png'


const cards = [
    {
        img:growth,
        title:'Self Directed Trading',
        benefits:'0% Commissions.',
        description:'Yes! you can trade commission free with the Gil Invest Self Directed Trading.',
    },
    {
        img:interestrate,
        title:'Save On Interest',
        benefits:'0% Interest.',
        description:'With the GilBank credit card, get 0% intro APR, plus no annual fee.',
    },
    {
        img:checked,
        title:'Keep your money and information safe',
        benefits:'100% Safe',
        description:'See how we help you protect you. Get fraud prevention tips.',
    }
]
const BankOffers = () => {
  return (
    <div className='w-screen h-[82vh] px-8 py-8 bg-white'>
        <h2 className='text-[50px] text-navyblue font-semibold text-center mb-8'>What we offer</h2>
        <div className='flex justify-evenly items-center w-full'>
          {cards.map((card)=>(
                <div className='h-[550px] w-[420px] bg-navyblue hover:bg-skyblue mt-4 text-white py-4 flex flex-col items-center align-center px-8 text-[20px]' key={card.title}>
                <img src={card.img} alt={card.title} className='w-20 h-16 mt-16'/>
                <h6 className='mt-10 font-light w-2/3 text-center'>{card.title} </h6>
                <p className='mt-10 text-center'>{card.benefits} </p>
                <p className='mt-10 font-light text-center'>{card.description} </p>
                {/* <button className='mt-16 border border-white h-14 w-60'>Explore</button> */}

            </div>
          ))}

        </div>
    </div>
  )
}

export default BankOffers