import React from 'react'

const Title = ({title,subtitle}) => {
  return (
    <div>
       <div className='text-center uppercase text-4xl font-bold p-4 my-16'>
                <h1><span className='text-[#102a42]'>{title}</span> <span className='text-[#2caeba]'>{subtitle}</span></h1>
            </div>
    </div>
  )
}

export default Title
