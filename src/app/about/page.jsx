"use client";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/app/Assets/assets";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8">
      {/* Header Section */}
      <section className="py-12 sm:py-16 bg-gray-200 text-center rounded">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">About Us</h1>
        <p className="text-gray-500 mt-4 text-lg sm:text-xl">
          Your journey into sharing stories, knowledge, and inspiration starts here.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src={assets.aboutImage} // Replace with your image path
            alt="About Blogify"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">What is Blogify?</h2>
          <p className="text-gray-600 leading-relaxed text-lg pr-8">
            Blogify is a modern platform designed for bloggers, creators, and enthusiasts
            to share their ideas with the world. Whether you're writing about travel,
            technology, lifestyle, or personal growth, Blogify offers a sleek and
            user-friendly space to express your creativity and connect with your audience.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 bg-gray-200 rounded">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl pl-8 font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg pl-8">
              At Blogify, we believe in the power of stories. Our mission is to empower
              individuals by providing them with the tools they need to create, share, and
              inspire. We aim to build a community where ideas thrive, voices are heard,
              and connections are made.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={assets.mission_image} // Replace with your image path
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-8">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold">
              1
            </div>
            <p className="text-gray-600">
              <span className="font-bold">Creativity:</span> Encouraging unique ideas and original content.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold">
              2
            </div>
            <p className="text-gray-600">
              <span className="font-bold">Community:</span> Building a supportive network for bloggers.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold">
              3
            </div>
            <p className="text-gray-600">
              <span className="font-bold">Innovation:</span> Continuously improving the platform.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold">
              4
            </div>
            <p className="text-gray-600">
              <span className="font-bold">Inclusion:</span> Welcoming voices from all backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 bg-gray-200 text-center rounded">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">Join Us</h2>
        <p className="text-gray-500 mt-4 mb-4 text-lg">
          Be part of a thriving community of storytellers. Let’s shape the future of blogging together.
        </p>
        <Link href="/loginSignup" className="mt-6 bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-md hover:shadow-xl">
          Get Started
        </Link>
      </section>
    </div>
  );
}
