import React from 'react'
import aboutImage from '../images/about.jpeg'
import Title from './Title'

const About = () => {
  return (
    <div>
        <div className="mb-20">
           <Title title='about' subtitle='us'/>
            <div className='grid grid-cols-2 gap-5 px-20'>
                {/* frame and image */}
                <div className='relative'>
                   <img src={aboutImage} alt="about frame" className='h-96 shadow-lg'/> 
                </div>
                {/* about content */}
                <div>
                    <h1 className='mb-10 text-4xl capitalize font-semibold tracking-widest text-[#102a42]'><span className='border-b-4 border-[#68091e]'>Explore</span> the difference</h1>
                    <p className='mb-4 text-base text-[#5e5f7e] w-full'>Lorem ipsum dolor sit asmet consectetur adipisicing elit. Aspernatur repellendus qui temporibus ullam, eligendi maxime dolorum error, eaque laudantium quae.</p>
                    <p className='mb-5 text-base text-[#5e5f7e]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellendus qui temporibus ullam, eligendi maxime dolorum error, eaque laudantium quae.</p>

                    <div>
                    <a href={aboutImage} className='bg-[#2caeba] px-[0.75rem] py-[0.37rem] text-base text-slate-200 cursor-pointer shadow-lg border-2 border-transparent tracking-[0.25rem] uppercase hover:bg-[rgb(57,218,233)] hover:text-slate-500'>read more</a>
                </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default About
