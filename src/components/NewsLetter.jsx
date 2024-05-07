/* eslint-disable no-unused-vars */
import React from 'react'


const NewsLetter = () => {
  return (
    <section className=' relative bg-[#0c0b08] py-[140px]'>
        <div className=' sm:absolute container  sm:py-16 xl:px-[264px] sm:border-[1px] sm:border-[#DCCA87] sm:border-opacity-25 sm:top-[60%] sm:left-1/2  sm:-translate-y-1/2 sm:-translate-x-1/2 bg-[#0C0C0C] px-4'>
          <div className='text-center'>
          <h4 className='font-secondary font-bold text-white text-[24px] pb-2'>Newsletter</h4>
           <img src="/public/Spoon-img.png" alt="" 
           className='mx-auto w-10'
           />
           <h2  className=' font-secondary font-semibold text-primary text-4xl xl:text-[64px] py-6 
            '>Subscribe to Our Newsletter</h2>
           <p className=' w-auto font-opensans font-normal text-secondary leading-[175%]
            pb-8'>And never miss latest Updates!</p>
           <div className='flex gap-5 border border-[#DCCA87] border-opacity-25 '>
            <input type="email" placeholder='Email Address' className='h-10 pl-2 w-full outline-none bg-transparent text-white placeholder:text-white' />
            <button className='mx-auto font-secondary font-bold text-[16px] text-[#0C0C0C] py-1 px-5 bg-primary w-fit   '>Subscribe</button>
           </div>
          </div>
        </div>
    </section>
  )
}

export default NewsLetter