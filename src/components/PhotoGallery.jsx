/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaInstagram } from "react-icons/fa";


const PhotoGallery = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <section id='photoGallery' className=' bg-[#0c0b08] bg-BG_Shadow pt-[45px] pb-5 pl-10 pr-10'>
        <div className='flex  flex-col items-center xl:flex-row '>
            <div className='py-20 w-[100%] xl:w-[30%]'>
                <h4 className=' font-secondary font-bold text-white text-[24px pb-2]'>Instagram</h4>
                <img src="/public/Spoon-img.png" alt="Spoon-img" className='w-10 pb-2'/>
                <h2 className=' font-secondary font-semibold text-primary text-[64px] pb-6'>Photo Gallery</h2>
                <p className=' font-opensans font-normal text-secondary text-[16px] leading-[175%] pb-6 sm:w-auto xl:w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <div className='pt-5'>
                 <Link to="#" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-secondary font-bold tracking-tighter text-black bg-[#DCCA87] rounded-lg group">
                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800  rounded-full  group-hover:w-56 group-hover:h-56"></span>
                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                 <span className="relative group-hover:text-white ">View More</span>
                 </Link>
                </div>
            </div>
            <div className='w-[100%]  xl:w-[70%] '>
            <Slider {...settings}>
                <div className=''>
                <div className=' h-fit group'>
                 <div className=' relative overflow-hidden'>
                 <img  src="/public/Gallery 2.png" alt="Gallery 1" />
                 <div className=' absolute h-full w-full bg-black_rgba flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                 <FaInstagram  className=' absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl'/>     
                 </div>
                </div>                     
                </div>
                 </div>
                 <div>
                 <div className=' h-fit group'>
                 <div className=' relative overflow-hidden'>
                 <img  src="/public/Gallery 1.png" alt="Gallery 1" />
                 <div className=' absolute h-full w-full bg-black_rgba flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                 <FaInstagram  className=' absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl'/>     
                 </div>
                </div>                     
                </div>
                 </div>
                 <div>
                 <div className=' h-fit group'>
                 <div className=' relative overflow-hidden'>
                 <img  src="/public/Gallery 2.png" alt="Gallery 1" />
                 <div className=' absolute h-full w-full bg-black_rgba flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                 <FaInstagram  className=' absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl'/>     
                 </div>
                </div>                     
                </div>
                 </div>
                 <div>
                 <div className=' h-fit group'>
                 <div className=' relative overflow-hidden'>
                 <img  src="/public/Gallery 3.png" alt="Gallery 1" />
                 <div className=' absolute h-full w-full bg-black_rgba flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                 <FaInstagram  className=' absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl'/>     
                 </div>
                </div>                     
                </div>
                 </div>
                 <div>
                 <div className=' h-fit group'>
                 <div className=' relative overflow-hidden'>
                 <img  src="/public/Gallery 4.png" alt="Gallery 1" />
                 <div className=' absolute h-full w-full bg-black_rgba flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                 <FaInstagram  className=' absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl'/>     
                 </div>
                </div>                     
                </div>
                 </div>
                 <div>
                 <div className=' h-fit group'>
                 <div className=' relative overflow-hidden'>
                 <img  src="/public/Gallery 5.png" alt="Gallery 1" />
                 <div className=' absolute h-full w-full bg-black_rgba flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                 <FaInstagram  className=' absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl'/>     
                 </div>
                </div>                     
                </div>
                 </div>
               </Slider>
            </div>





        </div>
    </section>
  )
}

export default PhotoGallery



