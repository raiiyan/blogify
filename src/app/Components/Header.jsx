import Image from 'next/image'
import React from 'react'
import { assets } from '@/app/Assets/assets'


export const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
          <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_0px] '>
            Get Started
            < Image src={assets.arrow} width={20} alt='' />
          </button>
        </div>

        <div className='text-center my-8'>
          <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
          <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Join us as we explore ideas, share experiences, and dive deep into topics that inspire, inform, and connect. Your next favorite read is just a scroll away.</p>
          <form className="flex justify-between items-center max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_0px]" action="">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 pl-4 py-4 outline-none"
            />
            <button 
              type='submit' className="ml-4 border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">
              Subscribe
            </button>
          </form>

        </div>
    </div>
  )
}
