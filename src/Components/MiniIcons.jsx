import React from 'react'

const MiniIcons = () => {
  return (
    <div className='px-8 py-4'>
        <ul className='flex justify-between items-center w-96'>
            <li className='flex justify-between items-center'>
                <span>Current Account</span>
                <span className='ml-2'><i className="fa-solid fa-angle-down"></i></span>
            </li>
            <li className='flex justify-between items-center'>
                <span>Savings Account</span>
                <span className='ml-2'><i className="fa-solid fa-angle-down"></i></span>
            </li>
        </ul>
    </div>
  )
}

export default MiniIcons