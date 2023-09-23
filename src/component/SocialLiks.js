import React from 'react'
import { socialLinks } from '../Data'

const SocialLiks = () => {
  return (
    <div>
        <div className='flex gap-4'>
              {socialLinks.map((social)=>{
                const {href,id,icon}=social
                return(
                  <ul key={id} className=''>
                    <li><a href={href}>{icon}</a></li>
                    
                  </ul>
                )
              })}
          </div>
    </div>
  )
}

export default SocialLiks
    