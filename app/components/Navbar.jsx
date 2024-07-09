'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { CgProfile } from 'react-icons/cg';
import { CiMenuFries } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { navLink } from '../constants/index';
import Button from './Button';
import Link from 'next/link'

import { FaGoogle } from 'react-icons/fa';
export default function Navbar() {


  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex sticky top-0 z-50 px-8 py-2 lg:px-14 lg:py-4 bg-white shadow-md items-center justify-between">
        <div className='block lg:hidden'>
          <span className='text-2xl' onClick={toggleSidebar}>
            <CiMenuFries />
          </span>
        </div>

        <div>
          <Link href='/'>
          <Image src="/images/logos.png" className="" width={250} height={40} />
          </Link>
        
        </div>

        <div className='block lg:hidden'>
          <span className='text-2xl' onClick={toggleModal}>
            <CgProfile className="w-8 h-8 text-gray-600" />
          </span>
        </div>

        <div className="hidden lg:block ml-8">
          <ul className="flex items-center text-xl cursor-pointer font-semibold">
            {navLink.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-gray-600 hover:text-gray-800 mx-4">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden lg:block'>
          <div className="flex items-center">
            <div className="flex items-center mr-8 text-xl cursor-pointer font-semibold" onClick={toggleModal}>
              <CgProfile className="w-8 h-8 text-gray-600" />
              <span className="ml-2">
                Login
              </span>
            </div>
            <Button
              title="Add Property"
              icon={<FaArrowLeftLong className="rotate-[150deg] ml-2" />}
            />
          </div>
        </div>

        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 ${isOpen ? 'visible' : 'hidden'}`} onClick={toggleSidebar}>
          <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex justify-between items-center p-6 bg-[#fef5f3] border-b border-[#ddd]'>
              <h2 className='font-semibold'>
                Welcome to TRS
              </h2>
              <button onClick={toggleSidebar} className='text-white font-semibold w-9 h-9 text-xl bg-orange-500 rounded-full flex items-center justify-center'>
                <RxCross2 />
              </button>
            </div>

            <div className='p-4'>
              <h2 className='text-xl font-semibold'>Sidebar Menu</h2>
              <ul>
                <li className='my-2'><a href="#">Menu Item 1</a></li>
                <li className='my-2'><a href="#">Menu Item 2</a></li>
                <li className='my-2'><a href="#">Menu Item 3</a></li>
                <li className='my-2'><a href="#">Menu Item 4</a></li>
              </ul>
            </div>
          </div>
        </div>

        {isModalOpen && (
         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white rounded-lg shadow-lg max-w-md lg:max-w-xl  w-full relative">
           <div className='p-4 border-b flex justify-between items-center border-[#ddd]'>
             <h3 className='text-xl font-medium'>
               Welcome To TRS
             </h3>
             <button onClick={toggleModal} className='text-white font-semibold w-9 h-9 text-xl bg-orange-500 rounded-full flex items-center justify-center'>
               <RxCross2 />
             </button>
           </div>
       
           <div className='p-4'>
             <div className="flex justify-start mb-4">
               <button
                 onClick={() => switchTab('login')}
                 className={`px-4 py-2 rounded-t-lg border-b-2 transition duration-300 ${activeTab === 'login' ? 'border-black text-black font-bold' : 'border-transparent text-[#717171] hover:border-black hover:text-black font-medium'}`}
               >
                 Sign In
               </button>
               <button
                 onClick={() => switchTab('signup')}
                 className={`px-4 py-2 rounded-t-lg border-b-2 transition duration-300 ${activeTab === 'signup' ? 'border-black text-black font-bold' : 'border-transparent text-[#717171] hover:border-black hover:text-black font-medium'}`}
               >
                 New Account
               </button>
             </div>
       
             <div>
               <h2 className="text-xl font-semibold mb-4">{activeTab === 'login' ? 'Login' : 'Signup'}</h2>
               <form>
                 {activeTab === 'signup' && (
                   <div className="mb-4">
                     <label className="block text-gray-700 font-bold mb-2">Name</label>
                     <input
                       type="text"
                       className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                       placeholder="Enter your name"
                     />
                   </div>
                 )}
                 <div className="mb-4">
                   <label className="block text-gray-700 font-bold mb-2">Email</label>
                   <input
                     type="email"
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                     placeholder="Enter your email"
                   />
                 </div>
                 <div className="mb-4">
                   <label className="block text-gray-700 font-bold mb-2">Password</label>
                   <input
                     type="password"
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                     placeholder="Enter your password"
                   />
                 </div>
       
                 <button className="w-full bg-orange-500 text-white py-2 rounded-lg mb-4">{activeTab === 'login' ? 'Login' : 'Signup'}</button>
               </form>
       
               <div className="text-center mb-5  relative">
                  <hr  className=' my-4 h-[1px] border-0 bg-black  opacity-55 ' />
                 <span className="text-gray-600 absolute w-[40px] bg-white text-[20px] top-[-13px] left-[45%] ">OR</span>
               </div>
       
               <button className="w-full bg-white text-gray-700 py-2 rounded-lg border border-gray-300 flex items-center justify-center shadow-sm hover:bg-gray-100 transition duration-300">
                 <FaGoogle className="mr-2" />
                 Continue with Google
               </button>
             </div>
           </div>
         </div>
       </div>
        )}
      </div>
    </>
  );
}
