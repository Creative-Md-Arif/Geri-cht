/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
   name1: `Chase the new Flavour`,
   img:`/public/Spoon-img.png`,
   heading: `The key to Fine dining`,
   ptag: `Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquant amet tellus`,
   heroimg:`/public/Hero img(1).png`,
  },

  {
   name1: `Chase the new Flavour`,
   img:`/public/Spoon-img.png`,
   heading: `The key to Fine dining`,
   ptag: `Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquant amet tellus`,
   heroimg:`/public/Hero img(1).png`,
  },


  {
   name1: `Chase the new Flavour`,
   img:`/public/Spoon-img.png`,
   heading: `The key to Fine dining`,
   ptag: `Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquant amet tellus`,
   heroimg:`/public/Hero img(1).png`,
  },


  {
   name1: `Chase the new Flavour`,
   img:`/public/Spoon-img.png`,
   heading: `The key to Fine dining`,
   ptag: `Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquant amet tellus`,
   btn:`Explore Menu`,
   heroimg:`/public/Hero img(1).png`,
  },
];


const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className='p-[52px_0_148px_0] bg-[#0c0b08]'>
        <div className='container'>
        <Slider {...settings}>
         {
         
            data.map((d) => (
        
               <div className=''>
               <div className='flex items-center justify-between'>
               <div className='text-white py-[127px]'>
                <h4 className='font-primary text-white font-bold text-xl'>
                 {d.name1}
                </h4>
                <img src={d.img} alt="" />
                <h1 className='text-[90px] font-secondary font-bold w-[453px] text-[#DCCA87] pb-8'>
                  {
                    d.heading
                  }
                </h1>
                <p className='text-[16px] font-opensans font-normal w-[453px] text-[#AAAAAA] leading-[175%]'>
                  {
                    d.ptag
                  }
                </p>
                <div className='pt-5'>
                 <Link to="#" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-secondary font-bold tracking-tighter text-black bg-[#DCCA87] rounded-lg group">
                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800  rounded-full  group-hover:w-56 group-hover:h-56"></span>
                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                 <span className="relative group-hover:text-white ">Explore Menu</span>
                 </Link>
                </div>
                </div>
                <div>
                  <img className='w-[620px]' src={d.heroimg} alt="" />
                </div>
               </div>
               </div>
               
            ))
          }  
             </Slider>     
        </div>
    </section>
  );
};
export default Banner

{/* <div className='text-white py-[127px]'>
  <h4 className=' font-primary font-bold text-xl'></h4>
   <img className='text-[#DCCA87] w-10 pt-2' src=''/>
   <h1 className='text-[90px] font-secondary font-bold w-[453px] text-[#DCCA87] pb-8'
   ></h1>
   <p className='text-[16px] font-opensans font-normal w-[453px] text-[#AAAAAA] leading-[175%]'></p>
  <div className='pt-5'>
  <Link to="#" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-secondary font-bold tracking-tighter text-black bg-[#DCCA87] rounded-lg group">
   <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800  rounded-full group-hover:w-56 group-hover:h-56"></span>
   <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
   <span className="relative group-hover:text-white ">Explore Menu</span>
   </Link>
  </div>
  </div>
<div>
  <img className='w-[620px]' src="" alt="" />
</div> */}




