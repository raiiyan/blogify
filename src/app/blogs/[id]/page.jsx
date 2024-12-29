'use client'
import React, {  useEffect, useState } from 'react'
import { blog_data } from '@/app/Assets/assets'
import Image from 'next/image';
import { assets } from '@/app/Assets/assets';
import { Footer } from '@/app/Components/Footer';
import Link from 'next/link';

const page = ({params}) => {

  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) 
      {
      if (Number(params.id) === blog_data[i].id) 
        {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
        }
      }
  }

  useEffect(() => {
    fetchBlogData()
  }, [])

  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Link href='/' >
        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
        </Link>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_0px] '>
        Get Started <Image src={assets.arrow} width={20} alt='' />
        </button>
      </div>
      <div className='text-center my-8'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data?.title}</h1>
        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} alt='' width={60} height={60} />
        <p className='mt-1 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>

    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-40px] mb-10'> 
      <Image className='border-4 border-white' src={data.image} alt='' width={1280} height={720} />

      <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
      <p className='my-3'>Managing your lifestyle effectively is the key to achieving balance, productivity, and personal fulfillment. 
        Whether you're aiming for a healthier routine, improved time management, or simply a more positive outlook, 
        this guide will walk you through actionable steps to transform your daily habits.
      </p>
      
      <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Settings</h3>
      <p className='my-3'>Take a moment to reflect on your daily habits and routines. Ask yourself:
            <ul className="list-disc pl-5 ml-10">
              <li className="text-gray-800">What are your priorities?</li>
              <li className="text-gray-800">Are you spending time on things that truly matter?</li>
              <li className="text-gray-800">What aspects of your lifestyle need improvement?</li>
              <li className="text-gray-800">Write down your observations to identify areas that require change.</li>
            </ul>
      </p>
      
      <h3 className='my-5 text-[18px] font-semibold'>Step 2: Set Clear Goals</h3>
      <p className='my-3'>Define what you want to achieve. Goals should be:
            <ul className="list-disc pl-5 ml-10">
              <li className="text-gray-800">Specific: Instead of "I want to be healthy," say, "I will exercise 30 minutes daily."</li>
              <li className="text-gray-800">Measurable: Track your progress with milestones.</li>
              <li className="text-gray-800">Achievable: Be realistic to avoid burnout.</li>
              <li className="text-gray-800">Relevant: Focus on goals aligned with your values.</li>
              <li className="text-gray-800">Time-bound: Set deadlines to maintain motivation.</li>
            </ul>
      </p>

      <h3 className='my-5 text-[18px] font-semibold'>Step 3: Create a Routine</h3>
      <p className='my-3'>A structured routine helps establish consistency:
            <ul className="list-disc pl-5 ml-10">
              <li className="text-gray-800">Morning Routine: Start your day with a healthy breakfast, exercise, and mindfulness practices.</li>
              <li className="text-gray-800">Work Hours: Schedule tasks with breaks to maintain focus.</li>
              <li className="text-gray-800">Evening Wind-Down: Limit screen time and engage in relaxing activities like reading or journaling.</li>
            </ul>
      </p>
      <h3 className='my-5 text-[18px] font-semibold'>Step 4: Prioritize Self-Care</h3>
      <p className='my-3'>Your physical and mental well-being are vital. Make time for:
        <ul className="list-disc pl-5 ml-10">
          <li className="text-gray-800">Exercise: Aim for at least 30 minutes of physical activity daily.</li>
          <li className="text-gray-800">Healthy Eating: Incorporate balanced meals with fruits, vegetables, and proteins.</li>
          <li className="text-gray-800">Sleep: Maintain a consistent sleep schedule for 7-8 hours nightly.</li>
          <li className="text-gray-800">Mindfulness: Practice meditation or deep breathing to reduce stress.</li>
        </ul>
      </p>

      <h3 className='my-5 text-[18px] font-semibold'>Step 5: Declutter and Organize</h3>
      <p className='my-3'>A cluttered space often leads to a cluttered mind. Take these steps:
        <ul className="list-disc pl-5 ml-10">
          <li className="text-gray-800">Physical Declutter: Organize your home and workspace.</li>
          <li className="text-gray-800">Digital Declutter: Sort files, clear your inbox, and minimize notifications.</li>
          <li className="text-gray-800">Mental Declutter: Use tools like to-do lists and planners to manage tasks effectively.</li>
        </ul>
      </p>

      <h3 className='my-5 text-[18px] font-semibold'>Step 6: Cultivate Positive Habits</h3>
      <p className='my-3'>Replace bad habits with positive ones:
        <ul className="list-disc pl-5 ml-10">
          <li className="text-gray-800">Replace "scrolling on social media" with "reading a book."</li>
          <li className="text-gray-800">Replace "junk food snacks" with "healthy alternatives like nuts or fruits."</li>
          <li className="text-gray-800">Replace "late-night Netflix binges" with "an earlier bedtime."</li>
        </ul>
      </p>

      <h3 className='my-5 text-[18px] font-semibold'>Step 7: Build a Support System</h3>
      <p className='my-3'>Surround yourself with people who uplift and motivate you:
        <ul className="list-disc pl-5 ml-10">
          <li className="text-gray-800">Share your goals with friends or family.</li>
          <li className="text-gray-800">Join communities aligned with your interests.</li>
          <li className="text-gray-800">Seek guidance from mentors or professionals if needed.</li>
        </ul>
      </p>

      <h3 className='my-5 text-[18px] font-semibold'>Step 8: Reflect and Adjust</h3>
      <p className='my-3'>Set aside time weekly to evaluate your progress:
        <ul className="list-disc pl-5 ml-10">
          <li className="text-gray-800">What worked well this week?</li>
          <li className="text-gray-800">What needs improvement?</li>
          <li className="text-gray-800">How can you adjust to stay on track?</li>
          <li className="text-gray-800">Celebrate small wins to stay motivated.</li>
        </ul>
      </p>

      <h3 className='my-5 text-[18px] font-semibold'>Final Thoughts</h3>
      <p className='my-3'>
      Managing your lifestyle is a continuous process, not a one-time fix.
      Celebrate small wins, be patient with yourself, and remember that every step forward is progress.
      By following this guide, you'll be well on your way to leading a more balanced, fulfilling life.
      </p>

      <div className='flex flex-col items-center justify-center my-24'>
        <p className='text-black font font-semibold'>Share this article:</p>
        <div className='flex'>
          <Image src={assets.facebook_icon} alt='' width={50} />
          <Image src={assets.twitter_icon} alt='' width={50} />
          <Image src={assets.googleplus_icon} alt='' width={50} />
        </div>
      </div>

    </div>

    <Footer />

    </>:<></>
  )
}

export default page