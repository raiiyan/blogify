import Image from "next/image";
import React from "react";
import { assets } from "@/app/Assets/assets";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-slate-100 text-gray-900 min-h-screen">
      <div className="px-6 sm:px-14 py-4 border-b border-gray-300">
        <Image src={assets.logo} width={95} alt="Logo" />
      </div>

      <div className="w-full sm:w-[300px] lg:w-[250px] xl:w-[300px] h-[100vh] relative py-12">
        <div className="w-full sm:w-full absolute right-0">
          {/* Add Blogs Link */}
          <Link
            href="/admin/addProduct"
            className="flex items-center gap-4 font-medium px-4 py-3 mb-4 rounded bg-white shadow-md border border-gray-300 transition-transform transform hover:scale-10 hover:shadow-xl"
          >
            <Image src={assets.add_icon} width={28} alt="Add Blog" />
            <p>Add Blogs</p>
          </Link>

          {/* Blog List Link */}
          <Link
            href="/admin/blogList"
            className="flex items-center gap-4 font-medium px-4 py-3 mb-4 rounded bg-white shadow-md border border-gray-300 transition-transform transform hover:scale-10 hover:shadow-xl"
          >
            <Image src={assets.blog_icon} width={28} alt="Blog List" />
            <p>Blog List</p>
          </Link>

          {/* Subscriptions Link */}
          <Link
            href="/admin/subscriptions"
            className="flex items-center gap-4 font-medium px-4 py-3 rounded bg-white shadow-md border border-gray-300 transition-transform transform hover:scale-10 hover:shadow-xl"
          >
            <Image src={assets.email_icon} width={28} alt="Subscriptions" />
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
