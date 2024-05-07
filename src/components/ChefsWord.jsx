// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const ChefsWord = () => {
  return (
    <section id='chefsWord' className=' bg-BG_image py-[128px] xl:px-[80px]'>
        <div className='container'>
            <div className='flex flex-col px-5 lg:px-0 md:flex-row md:justify-between gap-10 '>
            <div className='w-full mx-auto md:w-1/2'>
                <img src="/public/Chef’s_Word_img.png" alt="Chef’s_Word_img" className=' w-[100%]'/>   
            </div>
            <div className=' w-full md:w-1/2 md:py-4 md:gap-10 lg:py-24 xl:py-[95px]'>
               <h4 className='font-secondary font-bold text-xl xl:text-2xl text-white pb-2'>Chef’s Word</h4>
               <img src="/public/Spoon-img.png" alt="Spoon-img"
                className='w-10 pb-2'
               />
               <h2 className=' font-secondary font-semibold text-[36px] xl:text-[64px] text-primary pb-3 xl:pb-[64px]'>What we believe in</h2>
               <p className=' font-opensans italic text-xs xl:text-[16px] leading-[175%] text-secondary w-auto pb-3 xl:pb-[25px]'>
                <span className='flex items-center'><span>
                <FaQuoteLeft className='text-2xl mb-5 xl:text-4xl pr-2 xl:mb-2  text-white'/>
                </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
                </span>
                .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                <div>
                 <h4 className=' font-secondary font-normal text-primary text-3xl pb-2'>Kevin Luo</h4>
                 <p className=' font-opensans font-normal text-secondary text-[16px] pb-3 lg:pb-[20px]'>Chef & Founder</p>
                 <img src="/public/Kevin Luo.png" alt="Kevin Luo"
                 className=' w-28 lg:w-40 xl:w-[255px]'
                 />
               </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ChefsWord