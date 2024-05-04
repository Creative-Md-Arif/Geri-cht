/* eslint-disable no-unused-vars */
import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <section className=" bg-[#0c0b08] h-[100vh] px-4">
        <div className="container flex flex-col justify-center items-center h-[100%]">
           <div className="registration border border-white rounded-xl bg-white pt-4 pb-6 px-7 ">
           <div className="text-center pb-8">
             <h3 className=" text-blue-500 font-primary font-bold text-[24px] pb-4">Login</h3>
             <p  className=" font-primary font-normal text-black text-[16px]">Free register and you can enjoy it</p>
             </div>
              <div className="flex flex-col w-auto gap-5 xl:w-[380px]">
                <input type="text" placeholder="Full Name"
                 className="py-3 pl-2   border border-[#DDDFE2] rounded-md" />
                <input type="email" placeholder="E-mail" 
                className="py-3 pl-2   border border-[#DDDFE2] rounded-md" />
                <button className="text-center font-primary text-white font-bold py-3 bg-[blue] rounded-md  hover:bg-blue-900 duration-300 active:bg-blue-600 ">Sign In</button>
                <span className="text-center border-b-2 pb-4"><Link to="/">Forgotten password</Link></span>
                <p className="text-center font-primary font-normal text-[#1C8AC6]">
                 Already Have an account ? {""}
                 <Link className=" font-primary font-normal text-black" to="/registration">Create new account</Link>
                </p>
            </div>
             <div className='text-center'>
              <Link to="/" className=' flex items-center justify-center gap-2'><FaArrowAltCircleLeft className='text-xs mt-1'/> Back to home</Link>
             </div>
            <div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Login