/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='menubar bg-[#0c0b08] py-6 fixed w-full z-10'>
        <div className='flex items-center justify-between px-20'>
            <div className='main-logo'>
                 <h1 className='text-white font-primary text-5xl font-bold uppercase'>
                    <Link to="/">Gerícht</Link>
                </h1>
            </div>
            <div className='menu-list'>
              <ul className='flex items-center gap-7 text-white font-opensans text-xs font-normal'>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/pages" >Pages</Link>
                </li>
                <li>
                    <Link to="#Contact" >Contact Us</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/landing">Landing</Link>
                </li>
              </ul>
            </div>
            <div className='flex items-center justify-between gap-7 '>
                <div className='border-r-2 border-[#D9D9D9] pr-7'>
                  <ul className='flex item-center text-white font-opensans text-xs font-bold gap-1'>
                  <li><Link to="/login" >Login  /</Link></li>
                  <li><Link to="/registration" >Register</Link></li>
                  </ul>
                </div>
                <div className='text-white font-opensans text-xs font-semibold'>
                <Link to="#" className="text-black hover:before:bg-redborder-red-500 relative py-[10px]  overflow-hidden border border-red-500 bg-white px-6 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10">Book Table</span></Link>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar