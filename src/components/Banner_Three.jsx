/* eslint-disable no-unused-vars */
import React from 'react'

const Banner_Three = () => {
  return (
    <section id='bannerThree' className='relative bg-BG_image py-[128px] '>
        <img src="/public/Group 87.png" alt="Group 87" 
        className=' absolute left-16 top-14 '
        />

        <div className='container flex flex-col lg:flex-row justify-between items-center'>
            <div className='flex flex-col  py-[118px]'>
                <div className='text-center'>
                    <h4 className='font-secondary font-bold text-white text-[24px] pb-2  '>Awards & recognition</h4>
                    <img src="/Spoon-img.png" alt="Spoon-img" className='w-10 pb-2 mx-auto' />
                    <h2 className=' font-secondary font-semibold text-primary text-5xl lg:text-[64px]
                     pb-[64px]'>Our Laurels</h2>
                </div>
                <div className='flex flex-col gap-8 px-5 sm:flex-row'>
                    {/* box-1 */}
                <div className='box-1 flex flex-col gap-16'>
                    <div className='flex items-center gap-8'>
                        <div>
                            <img src="/Group 2.png" alt="Group 2" />
                        </div>
                        <div>
                             <h4 className='font-secondary font-bold text-[24px] text-primary pb-2'>Bib Gourmond</h4>
                             <p className='w-[190px] font-opensans font-normal text-secondary text-[16px] leading-[175%] '>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>                    
                    <div className='flex items-center gap-8 '>
                        <div>
                            <img src="/public/Group 5.png" alt="Group 2" />
                        </div>
                        <div>
                             <h4 className='font-secondary font-bold text-[24px] text-primary pb-2'>AA Hospitality </h4>
                             <p className='w-[190px] font-opensans font-normal text-secondary text-[16px] leading-[175%] '>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                 </div>
                 {/* box-2 */}
                 <div className='box-2 flex flex-col gap-16'>
                    <div className='flex items-center gap-8'>
                        <div>
                            <img src="/public/Group 1.png" alt="Group 2" />
                        </div>
                        <div>
                             <h4  className='font-secondary font-bold text-[24px] text-primary pb-2'>Rising Star</h4>
                             <p className='w-[190px] font-opensans font-normal text-secondary text-[16px] leading-[175%] '>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>                    
                    <div className='flex items-center gap-8'>
                        <div>
                            <img src="/public/Group 3.png" alt="Group 2" />
                        </div>
                        <div>
                             <h4 className='font-secondary font-bold text-[24px] text-primary pb-2'>Outstanding Chef</h4>
                             <p className='w-[190px] font-opensans font-normal text-secondary text-[16px] leading-[175%] '>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
            
            <div className='relative px-5'>
                <img src="/public/Mask Group.png" alt="Mask Group"
                className=''
                />
                <img src="/public/G-1.png" alt=""
                className='w-[200px] md:w-full absolute -bottom-10 opacity-50 lg:-left-5 xl:-left-[50px] lg:w-[250px] xl:w-full xl:bottom-0 text-white'
                />
            </div>
        </div>

    </section>
  )
}

export default Banner_Three