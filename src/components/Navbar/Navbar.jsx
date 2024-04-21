import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='menubar py-5  bg-[#0c0b08]'>
        <div className='container flex items-center justify-between'>
            <div className='main-logo'>
                 <h1 className='text-white font-primary text-5xl font-bold uppercase'>
                    <Link to="/home">Gerícht</Link>
                </h1>
            </div>
            <div className='menu-list'>
              <ul className='flex items-center gap-7 text-white font-opensans text-xs font-normal'>
                <li>
                    <Link to="/home" >Home</Link>
                </li>
                <li>
                    <Link to="/pages" >Pages</Link>
                </li>
                <li>
                    <Link to="/contact" >Contact Us</Link>
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
                 <Link to="/booktable">Book Table</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar