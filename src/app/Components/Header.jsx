import Image from "next/image";
import React, { useState } from "react";
import { assets } from "@/app/Assets/assets";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

export const Header = () => {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

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

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setSidePanelOpen(true)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links (Hidden on Mobile) */}
        <div className="hidden sm:flex items-center gap-6 ml-auto">
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
            className="flex items-center gap-2 font-medium py-2 px-5 sm:py-2 sm:px-5 bg-black text-white rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-xl"
          >
            Get Started
            <Image src={assets.arrow_white} width={20} alt="Arrow" />
          </Link>
        </div>

        {/* Side Panel (Drawer) */}
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 ${
            sidePanelOpen
              ? "bg-black bg-opacity-50 opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidePanelOpen(false)}
        >
          <div
            className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg p-6 z-50 transform transition-transform duration-300 ${
              sidePanelOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSidePanelOpen(false)}
              className="text-gray-800 focus:outline-none absolute top-4 right-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Links */}
            <div className="mt-8 space-y-6">
              <Link
                href="/"
                className="text-lg font-semibold text-gray-800 hover:text-gray-500 transition-colors duration-200 block"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-semibold text-gray-800 hover:text-gray-500 transition-colors duration-200 block"
              >
                About
              </Link>
              <Link
                href="/loginSignup"
                className="block font-medium py-2 px-5 bg-black text-white rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-xl text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
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
