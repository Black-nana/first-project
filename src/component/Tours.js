import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Title from './Title'
import { tour } from '../Data'


const Tours = () => {
  return (
    <div>
        <div>
          <Title title='featured' subtitle='tours'/>
            <div className='grid grid-cols-3 gap-5 place-items-center px-10'>
              {tour.map((tours)=>{
                const {id,Image,title,info,location,duration,cost,date}=tours
                return(
                  <>
                    <div key={id} className='hover:scale-[1.02]'>
                      {/* image and duration section */}
                      <div className='flex flex-col w-[25rem] relative'>
                        <div><img src={Image} alt={title} className='h-[15rem] object-cover relative top-10'/></div>
                        <div className='bg-[#2caeba] z-20 py-2 text-slate-100 ml-[15rem] w-[10rem]'>
                        <div className='ml-2'>{date}</div>
                        </div>
                      </div>
                      <div className='bg-slate-50 m-0 w-[96.9%] shadow-xl p-6'>

                      {/* title and info */}
                      <div className=''>
                        <h1 className='tracking-widest text-lg font-semibold text-[#102a42]'>{title}</h1>
                        <p className='text-base py-4 text-slate-500'>{info}</p>
                      </div>
                      {/* location, duration and cost */}
                      <div className='flex justify-between px-5 font-semibold text-[#2caeba]'>
                        <div className='grid grid-cols-2 gap-8 w-10 place-items-center'><FontAwesomeIcon icon={faMap}/>{location}</div>
                        <div>Days {duration}</div>
                        <div>From💰{cost}</div>
                      </div>
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

export default Tours
