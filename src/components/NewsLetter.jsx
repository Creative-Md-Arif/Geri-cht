/* eslint-disable no-unused-vars */
import React from 'react'

const NewsLetter = () => {
  return (
    <section className=' relative bg-[#0c0b08] py-[140px]'>
        <div className=' absolute container  py-16 px-[264px] border-[1px] border-[#DCCA87] border-opacity-25 top-[60%] left-1/2  -translate-y-1/2 -translate-x-1/2 bg-[#0C0C0C]'>
          <div className='text-center'>
          <h4 className='font-secondary font-bold text-white text-[24px] pb-2'>Newsletter</h4>
           <img src="/public/Spoon-img.png" alt="" 
           className='mx-auto w-10'
           />
           <h2  className=' font-secondary font-semibold text-primary text-[64px] pb-6 
            '>Subscribe to Our Newsletter</h2>
           <p className=' w-auto font-opensans font-normal text-secondary leading-[175%]
            pb-8'>And never miss latest Updates!</p>
           <div className='flex justify-center gap-5'>
            <input type="email" placeholder='Email Address' className='py-2 pl-4 pr-32 outline-none bg-transparent bg-black border-[1px] border-[#DCCA87] border-opacity-25 text-white placeholder:text-white' />
            <button className=' font-secondary font-bold text-[16px] text-[#0C0C0C] py-1 px-5 bg-primary '>Subscribe</button>
           </div>
          </div>
        </div>
    </section>
  )
}

export default NewsLetter