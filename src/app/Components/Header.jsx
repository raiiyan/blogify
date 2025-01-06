import Image from "next/image";
import React, { useState } from "react";
import { assets } from "@/app/Assets/assets";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

export const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validate email before submitting
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    // Proceed with the form submission if email is valid
    const formData = new FormData();
    formData.append("email", email);

    const response = await axios.post("/api/email", formData);

    // Handle response
    if (response.data.success) {
      toast.success("Subscribed successfully!");
      setEmail(""); // Clear the email input after successful subscription
    } else {
      toast.error("Error");
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
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
          <Link
            href="/loginSignup"
            className="flex items-center gap-2 font-medium py-2 px-5 sm:py-2 sm:px-5 bg-black text-white  rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-xl"
          >
            Get Started
            <Image src={assets.arrow_white} width={20} alt="Arrow" />
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center my-6">
        <h1 className="p-2 text-3xl sm:text-5xl font-semibold text-gray-800 leading-tight tracking-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Discover the Latest Insights & Stories
        </h1>
        <p className="mt-5 max-w-[740px] mx-auto text-xs sm:text-base text-gray-600 leading-relaxed tracking-wide">
          Dive into{" "}
          <span className="font-semibold text-gray-800">
            thought-provoking articles
          </span>
          , expert opinions, and in-depth explorations of the world around us.
          Whether you're seeking fresh perspectives on {""}
          <span className="font-semibold text-gray-800">Technology</span>,{" "}
          <span className="font-semibold text-gray-800">Lifestyle</span>, or{" "}
          <span className="font-semibold text-gray-800">Startup</span> <br />
          our curated content will keep you informed, inspired, and engaged.{" "}
          <br /> Start your journey with us today.
        </p>

        {/* Subscription Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between items-center max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border  border-gray-300 shadow-lg rounded-lg transition-transform transform hover:scale-105"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="flex-1 pl-4 py-4 outline-none rounded-l-lg text-gray-800"
          />
          <button
            type="submit"
            className="ml-4 border-l border-gray-300 py-4 px-4 sm:px-8 bg-black text-white rounded-r-lg hover:bg-gray-400 hover:text-gray-900 transition-colors duration-300 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
