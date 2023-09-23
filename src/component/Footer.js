import React from 'react'
import NavLinks from './NavLinks'
import SocialLiks from './SocialLiks'

const Footer = () => {
  return (
    <div>
        <div className='bg-[#102a42] text-white grid place-items-center py-10 mt-32 mb-0'>
         <div className='text-base font py-2'>
         <NavLinks/>
         </div>
         <div className='py-2'>
          <SocialLiks/>
         </div>
         <div className='py-2 text-xl'>
          <h1>copyright © ChippyCode travel tours company 2023 all rights reserved </h1>
         </div>
        </div>
    </div>
  )
}

export default Footer
