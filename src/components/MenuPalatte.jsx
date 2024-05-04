/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const MenuPalatte = () => {
  return (
    <section id='menuPalatte' className='menuPalatte bg-[#0c0b08] pt-[127px] xl:px-[80px]' >
       <div className="container">
         <div className="headText text-center">
            <h4 className=' font-secondary font-bold text-xl text-white leading-[130%] pb-2'>Menu that fits you palatte</h4>
            <img src="/public/Spoon-img.png" alt="Spoon-img.png" 
             className='mx-auto w-10'
            />
            <h1 className=' font-secondary font-semibold text-6xl text-primary pb-16 pt-2'>Today’s Special</h1>
         </div>
         <div className='menuPalatteBox flex items-center '>
            <div className="PalatteBox1 w-1/3">
                <h2 className=' font-primary font-semibold text-5xl text-white text-center pb-12'>Wine & Beer</h2>
                <ul className='text-white flex flex-col gap-16 '>
                    <div>
                    <li className='flex justify-between pr-10 relative font-primary font-bold text-primary text-xl pb-2'>Chapel Hill Shiraz 
                    <span  className='after:content-[""] after:absolute after:w-28
                     after:h-[2px] after:top-1/2 after:left-[55%] after:transform after:-translate-y-1/2 after:-translate-x-1/2 after:bg-[#FAFAFA] after:opacity-10'>
                     </span>
                     <p className='font-primary font-bold text-primary text-xl'>$56</p>
                     </li>
                     <div className='font-secondary font-normal text-xs text-secondary'>AU | Bottle</div>
                    </div>
                    <div>
                    <li className='flex justify-between pr-10 relative font-primary font-bold text-primary text-xl pb-2 '>Catena Malbec 
                     <span  className='after:content-[""] after:absolute after:w-28
                     after:h-[2px] after:top-1/2 after:left-[55%] after:transform after:-translate-y-1/2 after:-translate-x-1/2 after:bg-[#FAFAFA] after:opacity-10'>
                    </span>
                     <p>$156</p>
                     </li>
                     <div className='font-secondary font-normal text-xs text-secondary'>AR | Bottle</div>
                    </div>
                    <div>
                    <li className='flex justify-between pr-10 relative font-primary font-bold text-primary text-xl pb-2'>La Vieille Rose 
                    <span className='after:content-[""] after:absolute after:w-28
                     after:h-[2px] after:top-1/2 after:left-[55%] after:transform after:-translate-y-1/2 after:-translate-x-1/2 after:bg-[#FAFAFA] after:opacity-10'>
                    </span>
                    <p>$126</p>
                    </li>
                    <div className='font-secondary font-normal text-xs text-secondary'>FR | 750 ml</div>
                    </div>
                    <div>
                    <li className='flex justify-between pr-10 relative font-primary font-bold text-primary text-xl pb-2'>Rhino Pale Ale 
                    <span  className='after:content-[""] after:absolute after:w-28
                     after:h-[2px] after:top-1/2 after:left-[55%] after:transform after:-translate-y-1/2 after:-translate-x-1/2 after:bg-[#FAFAFA] after:opacity-10'>
                    </span>
                    <p>$106</p>
                    </li>
                     <div className='font-secondary font-normal text-xs text-secondary'>CA | 750 ml</div>
                    </div>
                    <div>
                    <li className='flex justify-between pr-10 relative font-primary font-bold text-primary text-xl pb-2'>Irish Guinness 
                    <span  className='after:content-[""] after:absolute after:w-28
                     after:h-[2px] after:top-1/2 after:left-[55%] after:transform after:-translate-y-1/2 after:-translate-x-1/2 after:bg-[#FAFAFA] after:opacity-10'>
                    </span><p>$136</p></li>
                     <div className='font-secondary font-normal text-xs text-secondary'>IE | 750 ml</div>
                    </div>
                    
                </ul>
            </div>
            <div className="PalatteImage w-1/3">
                <img src="/public/menuPallateImage.png" alt="menuPallateImage "              
                />
            </div>
            <div className="PalatteBox2 w-1/3 pl-10">
                <h2 className=' font-primary font-semibold text-5xl text-white text-center pb-12'>Cocktails</h2>
                <ul className='text-white flex flex-col gap-16 '>
                    <div>
                    <li className='flex justify-between relative font-primary font-bold text-primary text-xl pb-2'>Chapel Hill Shiraz 
                    <span  className='after:content-[""] after:absolute after:w-28
                     after:h-[2px] after:top-1/2 after:left-[60%] after:transform after:-translate-y-1/2 after:-translate-x-1/2 after:bg-[#FAFAFA] after:opacity-10'>
                     </span>
                     <p className='font-primary font-bold text-primary text-xl'>$56</p>
                     </li>
                     <div className='font-secondary font-normal text-xs text-secondary'>AU | Bottle</div>
                    </div>
                    <div>
                    <li className='flex justify-between relative font-primary font-bold text-primary text-xl pb-2 '>Catena Malbec 
                     <span  className='after:content-[""] after:absolute after:w-28
                     after:h-[2px] after:top-1/2 after:left-[60%%] after:transform after:-translate-y-1/2 after:-translate-x-1/2 after:bg-[#FAFAFA] after:opacity-10'>
                    </span>
                     <p>$156</p>
                     </li>
                     <div className='font-secondary font-normal text-xs text-secondary'>AR | Bottle</div>
                    </div>
                    <div>
                    <li className='flex justify-between relative font-primary font-bold text-primary text-xl pb-2'>La Vieille Rose 
                    <span className='after:content-[""] after:absolute after:w-28
                     after:h-[2px] after:top-1/2 after:left-[60%%] after:transform after:-translate-y-1/2 after:-translate-x-1/2 after:bg-[#FAFAFA] after:opacity-10'>
                    </span>
                    <p>$126</p>
                    </li>
                    <div className='font-secondary font-normal text-xs text-secondary'>FR | 750 ml</div>
                    </div>
                    <div>
                    <li className='flex justify-between relative font-primary font-bold text-primary text-xl pb-2'>Rhino Pale Ale 
                    <span  className='after:content-[""] after:absolute after:w-28
                     after:h-[2px] after:top-1/2 after:left-[60%%] after:transform after:-translate-y-1/2 after:-translate-x-1/2 after:bg-[#FAFAFA] after:opacity-10'>
                    </span>
                    <p>$106</p>
                    </li>
                     <div className='font-secondary font-normal text-xs text-secondary'>CA | 750 ml</div>
                    </div>
                    <div>
                    <li className='flex justify-between relative font-primary font-bold text-primary text-xl pb-2'>Irish Guinness 
                    <span  className='after:content-[""] after:absolute after:w-28
                     after:h-[2px] after:top-1/2 after:left-[60%%] after:transform after:-translate-y-1/2 after:-translate-x-1/2 after:bg-[#FAFAFA] after:opacity-10'>
                    </span><p>$136</p></li>
                     <div className='font-secondary font-normal text-xs text-secondary'>IE | 750 ml</div>
                    </div>
                    
                </ul>
            </div>
         </div>
         <div className='menuPalatteBtn py-12 text-center'>
         <div className='pt-5'>
                <Link to="#" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-secondary font-bold tracking-tighter text-black bg-[#DCCA87] rounded-lg group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800  rounded-full  group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                <span className="relative group-hover:text-white ">View More</span>
                </Link>
                </div>  
         </div>
       </div>
    </section>
  )
}

export default MenuPalatte