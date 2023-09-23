import React from 'react'
import  backgroundImage from '../images/main.jpeg'
import logo from '../images/logo.svg'
import NavLinks from './NavLinks'
import SocialLiks from './SocialLiks'



 export const Navbar = () => {
  return (
    <React.Fragment>
       <div className='bg-cover bg-center h-screen bg-no-repeat' style={{backgroundImage:`url(${backgroundImage})`,background:'linear-gradient(to right, red)'}}>

       <div className='flex justify-between bg-[#ffffff] h-20 items-center fixed w-full z-50 shadow-lg'>
       <header className='ml-28'>
            <img src={logo} alt="Logo" />
        </header>
       <div className='text-[#102a42]'>
        <NavLinks/>
       </div>
       <div className='mr-28 text-[#2caeba]'>
        <SocialLiks/>
       </div>
    
            </div>
        </div>
    </React.Fragment>
  )
}

//  export default Navbar
