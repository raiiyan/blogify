import Image from "next/image";
import React from "react";
import { assets } from "@/app/Assets/assets";

export const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-black py-6 px-5 sm:px-12 gap-4 sm:gap-0">
      {/* Logo Section */}
      <Image
        src={assets.logo_light}
        alt="Logo"
        width={120}
        className="hover:scale-105 transition-transform duration-200"
      />

      {/* Information Section */}
      <div className="text-center sm:text-left text-sm text-gray-300">
        <p className="mb-2 sm:mb-0">
          Empowering you with insightful blogs on technology, design, and more.
        </p>
        <p>
          Questions?{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=raiyanhossain99@gmail.com"
            className="text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </p>
      </div>

      {/* Links Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-gray-300 text-sm space-y-2 sm:space-y-0 sm:space-x-6">
        <a
          href="/privacy"
          className="hover:text-gray-100 transition-colors duration-200"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="hover:text-gray-100 transition-colors duration-200"
        >
          Terms of Service
        </a>
        <a
          href="/about"
          className="hover:text-gray-100 transition-colors duration-200"
        >
          About Us
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex sm:flex-row items-center sm:items-start mt-4 sm:mt-0">
        <Image
          src={assets.facebook_icon}
          alt="Facebook"
          width={40}
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
        />
        <Image
          src={assets.twitter_icon}
          alt="Twitter"
          width={40}
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
        />
        <Image
          src={assets.googleplus_icon}
          alt="Google+"
          width={40}
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
        />
      </div>

      {/* Disclaimer */}
      <div className="mt-4 sm:mt-0 text-center text-xs text-gray-500 hide-on-tablet">
        © 2024 Raiyan Blogs. All rights reserved. Built with ❤️ and dedication.
      </div>
    </div>
  );
};
