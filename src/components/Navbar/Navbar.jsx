/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom'




// const navItems = [
//   {title: "Home", path:"/"},
//   {title: "Pages", path:"/pages"},
//   {title: "Contact Us", path:"/Contact"},
//   {title: "Blog", path:"/blog"},
//   {title: "Landing", path:"/landing"},
  
  
// ]

const Navbar = () => {



  const [isMenuOpen , setIsMenuOpen] = useState(false);
  const [isButtonAdd , setIsButtonAdd] = useState(false);

  const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen)
  };

  const buttonAdd = () => {
    setIsButtonAdd(!isButtonAdd)
 };

  




  return (
    <div className='menubar bg-[#0c0b08] py-6 fixed w-full z-10'>
        <div className='flex items-center px-4 xl:px-20 justify-between '>
            <div className='main-logo '>
                 <h1 className='text-white font-primary  font-bold uppercase text-5xl'>
                    <Link to="/">Gerícht</Link>
                </h1>
            </div>
            <div className='menu-list'>
               <ul className='lg:flex items-center gap-7 text-white font-opensans text-xs font-normal hidden '>
                <li className=' hover:bg-orange-500 transition-all duration-300'>
                    <Link to="/" >Home</Link>
                </li>
                <li className=' hover:bg-orange-500 transition-all duration-300'>
                    <Link to="/pages" >Pages</Link>
                </li>
                <li className=' hover:bg-orange-500 transition-all duration-300'>
                    <Link to="contact" >Contact Us</Link>
                </li>
                <li className=' hover:bg-orange-500 transition-all duration-300'>
                    <Link to="/blog">Blog</Link>
                </li >
                <li className=' hover:bg-orange-500 transition-all duration-300'>
                    <Link to="/landing">Landing</Link>
                </li>
               </ul>
            </div>
            <div className='sm:flex items-center justify-between gap-7 hidden'>
                <div className='border-r-2 border-[#D9D9D9] pr-7'>
                  <ul className='lg:flex lg:items-center text-white font-opensans text-xs font-bold gap-1 hidden '>
                  <li><Link to="/login" >Login  /</Link></li>
                  <li><Link to="/registration" >Register</Link></li>
                  </ul>
                </div>
                <div className='text-white font-opensans text-xs font-semibold'>
                <Link to="#" className="text-black hover:before:bg-redborder-red-500 relative py-[10px]  overflow-hidden border border-red-500 bg-white px-6 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10">Book Table</span></Link>
               </div>
            </div>
             {/* navbar for sm devices */}
            <div className='text-right lg:hidden'>
            <button onClick={toggleMenu}>

            {
              isMenuOpen ? <IoClose className='w-8 h-8 text-white' /> : <HiMiniBars3BottomLeft className='w-8 h-8 text-white' /> 
            }

            </button>
            </div>
          </div>
        {/*  only mobile menu items */}
           <ul className={`bg-Black text-white px-4 py-4  rounded ${isMenuOpen ? "" : "hidden"} `}>
                <li className='mb-2 hover:text-orange-500 transition-all duration-300' >
                    <Link to="/" >Home</Link>
                </li>
                <li className='mb-2 hover:text-orange-500 transition-all duration-300'>
                    <Link to="/pages" >Pages</Link>
                </li>
                <li className='mb-2 hover:text-orange-500 transition-all duration-300'>
                    <Link to="#Contact" >Contact Us</Link>
                </li>
                <li className='mb-2 hover:text-orange-500 transition-all duration-300'>
                    <Link to="/blog">Blog</Link>
                </li>
                <li className='mb-2 hover:text-orange-500 transition-all duration-300'>
                    <Link to="/landing">Landing</Link>
                </li>
                <ul className='flex pt-6'>
                  <li className=' hover:text-orange-500 transition-all duration-300'><Link to="/login" >Login  /</Link></li>
                  <li className=' hover:text-orange-500 transition-all duration-300'><Link to="/registration" >Register</Link></li>
                </ul>
            </ul>
            
    </div>
  )
}

export default Navbar