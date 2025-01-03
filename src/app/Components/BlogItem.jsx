import Image from "next/image";
import React from "react";
import { assets, blog_data } from "@/app/Assets/assets";
import Link from "next/link";

export const BlogItem = ({ title, description, image, category, id }) => {
  return (
    <div className="max-w-[330px] bg-white border border-gray-300 hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt="image"
          width={400}
          height={400}
          className="w-full h-auto object-cover"
        />
      </Link>
      <p className="ml-5 mt-5 inline-block bg-black text-white text-sm px-3 py-1 rounded-lg">
        {category}
      </p>
      <div className="p-5">
        <Link
          href={`/blogs/${id}`}
          className="mb-2 text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200 block"
        >
          {title}
        </Link>
        <p
          className="mb-3 text-sm tracking-tight text-gray-700"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
        ></p>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center py-2 font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200"
        >
          Read more
          <Image src={assets.arrow} alt="" className="ml-2 pt-1" width={12} />
        </Link>
      </div>
    </div>
  );
};
