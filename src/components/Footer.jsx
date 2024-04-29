/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className=' bg-BG_image py-[250px] '>
        <div className='container flex justify-between'>
           <div className='pt-10'>
            <h3 className='text-center font-secondary font-normal text-[#F5EFDB] text-[32px] pb-6 
            '>Contact Us</h3>
            <p className='font-opensans font-normal text-[16px] text-secondary text-center pb-4'>9 W 53rd St, New York, NY 10019, USA</p>
            <ul className='font-opensans font-normal text-[16px] text-secondary text-center pb-4'>
                <li>+1 212-344-1230</li>
                <li>+1 212-555-1230</li>
            </ul>
           </div>
           <div>
            <h1 className='font-secondary font-semibold text-primary text-[64px] text-center uppercase pb-8
            '>Gerícht</h1>
            <p className='font-opensans font-normal text-[16px] text-secondary text-center pb-4 w-[450px]'>"The best way to find yourself is to lose yourself in the service of others.”</p>
            <img src="/public/Spoon-img.png" alt=""
            className=' mx-auto w-10'
            />
            <ul>
                <li>
                    <Link to="#" ></Link>
                </li>
                <li>
                    <Link to="#" ></Link>
                </li>
                <li>
                    <Link to="#" ></Link>
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

    </footer>
  )
}

export default Footer