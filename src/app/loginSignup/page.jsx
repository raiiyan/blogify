"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { assets } from "@/app/Assets/assets";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-gray-800">
          {isLogin ? "Welcome Back!" : "Create Your Account"}
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-500 mb-6">
          {isLogin ? "Login to access your account" : "Sign up to get started"}
        </p>
        {/* Social Login Buttons */}
        <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center gap-2 mb-4 hover:bg-gray-200 transition">
          <Image
            src={assets.google_icon}
            alt="Google Icon"
            width={20}
            height={20}
          />
          {isLogin ? "Login with Google" : "Sign up with Google"}
        </button>
        <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center gap-2 mb-4 hover:bg-gray-200 transition">
          <Image
            src={assets.fb_icon}
            alt="Facebook Icon"
            width={20}
            height={20}
          />
          {isLogin ? "Login with Facebook" : "Sign up with Facebook"}
        </button>
        {/* Divider */}
        <div className="relative flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        {/* Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password (for login) */}
          {isLogin && (
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        {/* Footer */}
        <p className="text-center text-sm sm:text-base text-gray-500 mt-4">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-500 hover:underline"
              >
                Sign up here
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-500 hover:underline"
              >
                Login here
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
