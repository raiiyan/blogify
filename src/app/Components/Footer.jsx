import Image from 'next/image'
import React from 'react'
import { assets } from '@/app/Assets/assets'

export const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt='' width={120} />
        <p className='text-sm text-white sm:text-base'>
            © 2024 All rights reserved. Designed and Coded by <span className='text-blue-500'>Raiyan</span>.
        </p>
        <div className='flex'>
            <Image src={assets.facebook_icon} alt='' width={40} />
            <Image src={assets.twitter_icon} alt='' width={40} />
            <Image src={assets.googleplus_icon} alt='' width={40} />
        </div>
    </div>
  )
}
