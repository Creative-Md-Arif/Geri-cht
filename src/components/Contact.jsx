/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <section id='Contact' className='Contact relative z-100 pt-[110px] pb-[146px]'>
        <div className=" absolute overly bg-BG_image bg-black_rgba top-0 left-0 w-[100%] h-full -z-10"></div>
        <div className='container  flex justify-between z-10'>
        <div className=' w-1/2 py-[124px]'>
            <h4 className=' font-secondary font-bold text-white text-[24px] pb-2'>Contact</h4>
            <img src="/public/Spoon-img.png" alt="" 
             className='w-10 pb-2'
            />
            <h2 className=' font-secondary font-semibold text-primary text-[64px] pb-16 
            '>Find Us</h2>
            <p className=' w-auto font-opensans font-normal text-secondary leading-[175%]
            pb-8'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
            <h4 className='font-secondary font-bold text-primary text-[24px] pb-4'>Opening Hours</h4>
            <ul className=' flex flex-col gap-4 w-auto font-opensans font-normal text-white leading-[175%]
            pb-8'>
                <li >Mon - Fri: 10:00 am - 02:00 am</li>
                <li>Sat - Sun: 10:00 am - 03:00 am</li>
            </ul>
            <div className='pt-16'>
                 <Link to="#" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-secondary font-bold tracking-tighter text-black bg-[#DCCA87] rounded-lg group">
                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800  rounded-full  group-hover:w-56 group-hover:h-56"></span>
                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                 <span className="relative group-hover:text-white ">Visit Us</span>
                 </Link>
            </div>
        </div>
        <div className='w-1/2'>
            <img src="/public/contact-img.png" alt="" />
        </div>
    </div>
    </section>
  )
}

export default Contact