"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/app/Assets/assets";
import { Footer } from "@/app/Components/Footer";
import Link from "next/link";
import axios from "axios";
import { useParams } from "next/navigation"; // Import useParams

const Page = () => {
  const params = useParams(); // Access params using useParams()
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    if (!params?.id) return; // Handle cases where params.id is not available
    try {
      const response = await axios.get("/api/blog", {
        params: {
          id: params.id,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [params?.id]); // Ensure fetchBlogData runs only when params.id is available

  return data ? (
    <>
      <div className="bg-gray-100 py-5 px-5 md:px-12 lg:px-28">
        {/* Navbar Section */}
        <div className="flex justify-between items-center bg-gray-200 py-4 px-6 rounded-lg shadow-md">
          <Link href="/">
            <Image
              src={assets.logo}
              width={100}
              alt="Logo"
              className="w-[80px] sm:w-auto"
            />
          </Link>

          {/* Navbar Links */}
          <div className="flex items-center gap-6 ml-auto">
            <Link
              href="/"
              className="text-sm font-semibold sm:text-base text-gray-800 hover:text-gray-500 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold sm:text-base text-gray-800 hover:text-gray-500 transition-colors duration-200"
            >
              About
            </Link>
            <Link href="/loginSignup" className="flex items-center gap-2 font-medium py-2 px-5 sm:py-2 sm:px-5 bg-black text-white rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-xl ">
              Get Started
              <Image src={assets.arrow_white} width={20} alt="Arrow" />
            </Link>
          </div>
        </div>
        <div className="text-center my-12">
          <h1 className="text-2xl sm:text-4xl font-medium max-w-[700px] mx-auto text-center text-gray-800 leading-tight">
            {data?.title}
          </h1>

          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            alt=""
            width={60}
            height={60}
          />
          <p className="mt-1 text-lg max-w-[740px] mx-auto">{data.author}</p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-40px] mb-10">
        <Image
          className="border-4 border-white rounded-lg"
          src={data.image}
          alt=""
          width={1280}
          height={720}
        />
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{
            __html: data.description,
          }}
        ></div>

        <div className="flex flex-col items-center justify-center my-24">
          <p className="text-black font font-semibold">Share this article:</p>
          <div className="flex">
            <Image
              src={assets.facebook_icon}
              alt=""
              width={50}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
            <Image
              src={assets.twitter_icon}
              alt=""
              width={50}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
            <Image
              src={assets.googleplus_icon}
              alt=""
              width={50}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
