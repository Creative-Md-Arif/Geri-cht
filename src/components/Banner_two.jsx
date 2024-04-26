/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'


const Banner_two = () => {
  return (
    <section className=' bg-BG_image py-[200px] relative z-10 '>
        <div className=' absolute overly w-full h-full top-0 left-0 bg-black_rgba -z-10'></div>
        <div className='container'>
          <div className=' absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 -z-10'>
            <img src="/public/G.png" alt=""
             className='w-[391px]'
            />
          </div>
          <div className='flex items-center justify-evenly w-full z-10'>
            <div className='text-end relative'>
                <h1 className='pb-2 text-6xl font-secondary font-semibold text-[#DCCA87]'>About Us</h1>
                 <div className=' absolute right-0 '>
                 <img src="/public/Spoon-img.png" alt="spoon-png" 
                 className=' h-3'
                />
                 </div>
                <p className='text-[#D9D9D9] font-opensans font-normal text-xs leading-[175%] w-[450px] pt-11'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing  ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <div className='pt-5'>
                 <Link to="#" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-secondary font-bold tracking-tighter text-black bg-[#DCCA87] rounded-lg group">
                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800  rounded-full  group-hover:w-56 group-hover:h-56"></span>
                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                 <span className="relative group-hover:text-white ">Know More</span>
                 </Link>
                </div>
            </div>
            <div>
                <img src="/public/savernake-knives-f4jl2ezowuM-unsplash 2.png" alt="" 
                className='h-[600px]  '
                />
             </div>
             <div className=''>      
                <h1 className='pb-2 text-6xl font-secondary font-semibold text-[#DCCA87]'>Our History</h1>
                <img src="/public/Spoon-img.png" alt="spoon-png" 
                 className=' h-3'
                />
                <p className='text-[#D9D9D9] font-opensans font-normal text-xs leading-[175%] w-[450px] pt-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing  ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <div className='pt-5'>
                 <Link to="#" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-secondary font-bold tracking-tighter text-black bg-[#DCCA87] rounded-lg group">
                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800  rounded-full  group-hover:w-56 group-hover:h-56"></span>
                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                 <span className="relative group-hover:text-white ">Know More</span>
                 </Link>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Banner_two