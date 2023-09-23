import React from 'react'
import Title from './Title'
import { service } from '../Data'

const Services = () => {
  return (
    <div>
        <div id='servicies-section' className='bg-slate-200 py-10'>
         <Title title='our' subtitle='services'/>
         <div className='flex gap-6 max-md:grid max-md:grid-cols-2 w-full '>
          {service.map((sev)=>{
            const {id,icon,title,text}=sev
            return(
              <>
                <div key={id} className='flex items-center ml-28'>
                <div className='flex items-center p-4 h-24 max-md:grid max-md:grid-cols-2 bg-[#2caeba] text-slate-100 relative'>
                  <div className='text-[#044e53] text-5xl'>
                    {icon}
                  </div>
                  </div>
                <div className='p-4'>
                  <h1 className='tracking-widest text-[#102a42 font-bold text-lg]'>{title}</h1>
                  <p className='text-sm'>{text}</p>
                </div>
                </div>
              </>
            )
          })}
         </div>
        </div>
      
    </div>
  )
}

export default Services
