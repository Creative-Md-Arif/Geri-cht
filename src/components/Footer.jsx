/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

const Footer = () => {
  return (
    <footer className=' bg-BG_image pt-[250px] pb-[100px] px-5 '>
        <div className='container flex flex-col lg:flex-row lg:justify-between '>
           <div className='pt-10'>
            <h3 className='text-center font-secondary font-normal text-[#F5EFDB] text-2xl lg:text-[32px] pb-6 
            '>Contact Us</h3>
            <p className='font-opensans font-normal text-[16px] text-secondary text-center pb-4'>9 W 53rd St, New York, NY 10019, USA</p>
            <ul className='font-opensans font-normal text-[16px] text-secondary text-center pb-4'>
                <li>+1 212-344-1230</li>
                <li>+1 212-555-1230</li>
            </ul>
           </div>
           <div>
            <h1 className='font-secondary font-semibold text-primary text-4xl xl:text-[64px] text-center uppercase pb-8
            '>Gerícht</h1>
            <p className='font-opensans font-normal text-[16px] text-secondary text-center pb-4 lg:w-[320px] '>"The best way to find yourself is to lose yourself in the service of others.”</p>
            <img src="/public/Spoon-img.png" alt=""
            className=' mx-auto w-10'
            />
            <ul className='flex justify-center gap-4 pt-5 text-xl text-[#F5EFDB]'>
                <li>
                    <Link to="#" ><FaFacebook /></Link>
                </li>
                <li>
                    <Link to="#"><FaXTwitter /></Link>
                </li>
                <li>
                    <Link to="#" ><FaInstagram /></Link>
                </li>
            </ul>
            <div className='text-center'>
            <p className=' font-opensans font-normal text-[16px] text-secondary pt-16'>2021 Gerícht. All Rights reserved.</p>
           </div>
           </div>
           <div className='pt-10'>
            <h3 className='text-center font-secondary font-normal text-[#F5EFDB] text-[32px] pb-6 
            '>Working Hours</h3>
            <ul className=' text-center font-opensans font-normal text-[16px] text-secondary'>
                <li>Monday-Friday:</li>
                <li>08:00 am -12:00 am</li>
                <li className='pt-3'>Saturday-Sunday:</li>
                <li>07:00am -11:00 pm</li>
            </ul>
           </div>
        </div>
        <div className=' relative text-end pr-5 pt-11 pb-1 '>
          <button onClick={scrollTop} className='font-secondary text-primary text-[18px] after:content-[""] after:absolute after:w-[2px]
            after:h-[25px] after:top-[100%] after:right-[36px] after:bg-[#DCCA87] after:opacity-30 '>Scroll</button>
        </div>

    </footer>
  )
}

export default Footer