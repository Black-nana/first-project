import React from 'react'
import { pageLinks } from '../Data'

const NavLinks = () => {
  return (
    <div>
          <nav className='flex gap-2 capitalize font transition duration-500 ease-in-out'>
        
            {pageLinks.map((aclink)=>{
                const {id,link,text}= aclink
                return(
                    <a key={id} href={link}>{text}</a>
                )
            })}
      </nav>
    </div>
  )
}

export default NavLinks
