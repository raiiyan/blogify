import Image from 'next/image';
import React from 'react';

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {

    const BlogDate = new Date(date);

  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image src={authorImg ? authorImg : "/default-profile.png"} width={40} height={40} />
            <p>{author ? author : "no author"}</p>
        </th>
        <td className='px-6 py-4'>
            {title ? title : "no title"}
        </td>
        <td className='px-6 py-4'>
            {BlogDate.toDateString()} {/* The date is already formatted in toDateString() */}
        </td>
        <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer text-red-500 hover:underline'>
            Delete
        </td>
    </tr>
  );
};

export default BlogTableItem;
