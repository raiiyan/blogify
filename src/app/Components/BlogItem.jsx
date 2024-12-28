import Image from 'next/image'
import React from 'react'
import { assets,blog_data } from '@/app/Assets/assets'
import Link from 'next/link'

export const BlogItem = ({title, description, image, category, id}) => {
  return (
    <div className='max-w-[330px] bg-white border bortder-black hover:shadow-[-7px_7px_0px_0px]'>
        <Link href={`/blogs/${id}`}>
            <Image src={image} alt='' width={400} height={400} className='border border-black'/>
        </Link>
        <p className='ml-5 mt-5 inline-block bg-black text-white text-sm'>{category}</p>
        <div className='p-5'>
            <h5 className='mb-2 text-lg tracking-tight text-gray-900'>{title}</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
            <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                Read more <Image src={assets.arrow} alt='' className='ml-2' width={12} />
            </Link>
        </div>
    </div>
  )
}
