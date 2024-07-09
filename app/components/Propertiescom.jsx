'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { MdOutlineElectricBolt } from "react-icons/md";

import { FaHeart, FaShareAlt } from 'react-icons/fa';

import { MdOutlineBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { IoIosExpand } from "react-icons/io";
import Link from 'next/link'

const cardData  = [
  {
      id: 0,
      img: '/images/g1-2.webp',
      head: 'Equestrian Family Home',
      add: 'San Diego City, CA, USA',
      bed: 2,
      bath: 2,
      space: 1000,
      price: 100000,
      cate: 'Villa',
      flag:"Trending"
  },
  {
      id: 1,
      img: '/images/g1-3.webp',
      head: 'Modern Apartment',
      add: 'New York, NY, USA',
      bed: 3,
      bath: 2,
      space: 1200,
      price: 150000,
      cate: 'House',
    
  },
  {
      id: 2,
      img: '/images/g1-4.webp',
      head: 'Cozy Cottage',
      add: 'Austin, TX, USA',
      bed: 1,
      bath: 1,
      space: 800,
      price: 85000,
      cate: 'Villa',
     
      flag:"New"
  },
  {
      id: 3,
      img: '/images/g1-2.webp',
      head: 'Luxury Villa',
      add: 'Miami, FL, USA',
      bed: 5,
      bath: 4,
      space: 2500,
      price: 500000,
      cate: 'House',
      flag:"Trending"
   
  },
  {

      id: 4,
      img: '/images/g1-3.webp',
      head: 'Beachside Bungalow',
      add: 'Malibu, CA, USA',
      bed: 3,
      bath: 2,
      space: 1500,
      price: 300000,
      cate: 'Apartment',
      flag:"New"
  },
  {
      id: 5,
      img: '/images/g1-4.webp',
      head: 'Urban Loft',
      add: 'Chicago, IL, USA',
      bed: 2,
      bath: 1,
      space: 1100,
      price: 175000,
      cate: 'House',
      flag:"New"
  },
  {
      id: 2,
      img: '/images/g1-4.webp',
      head: 'Cozy Cottage',
      add: 'Austin, TX, USA',
      bed: 1,
      bath: 1,
      space: 800,
      price: 85000,
      cate: 'Villa',

     
  },
  {
      id: 3,
      img: '/images/g1-2.webp',
      head: 'Luxury Villa',
      add: 'Miami, FL, USA',
      bed: 5,
      bath: 4,
      space: 2500,
      price: 500000,
      cate: 'House',
      
  },
 
 
];

const Cards = ({img,head,add,bed, bath,space,price,cate,flag })=>{
  return(<>
<div className='relative sm:max-w-[360px] lg:max-w-[400px] overflow-hidden cursor-pointer  bg-white rounded-lg shadow-lg m-2'>
       <Link href={`/singleproperties/${head.trim().replace(/\s+/g, '-')}`} >
     
     <div className='img-box overflow-hidden relative'>
       <Image
         className='w-full h-[220px] transition-transform duration-500 ease-in-out transform hover:scale-110'
         src={img}
         width={200}
         height={200}
       />
       {cate && (


         <div className='flex absolute  bottom-0 left-0 z-10    bg-opacity-80 items-center justify-between rounded-br-lg'>
          
           <span className='text-white text-md px-4 py-1 after:content after:absolute after:z-10 after:border-l-[25px] after:border-l-[transparent]   bg-[#1d5f6fcc] font-bold relative z-20'>
             {cate}
           </span>

           <span className='text-white text-md px-4 py-1 after:content after:absolute after:z-10 after    bg-[#e23e1dcc] font-bold relative z-20 '>
           ₹ {price}
           </span>


         </div>
       )}
       

{flag && (
         <div className='flex absolute px-4 rounded-md py-2 top-1 right-1  z-10 bg-[#36c6d3] items-center justify-between'>
          
           <span className='text-white text-md font-bold relative z-20 text-[12px]'>
             {flag}
           </span>
         </div>
       )}
     </div>
     
     <div className='my-2 px-4 py-1'>
       <h2 className='text-lg text-[#181a20] font-medium transition-all duration-500 ease-in-out hover:underline'>
         {head}
       </h2>
       <p className='text-[#717171] text-md mb-[10px]'>
         {add}
       </p>
       <div className='flex border-[#ddd]'>
         <div className='flex items-center text-[13px] mr-[5px] lg:mr-[8px]'>
           <MdOutlineBed className='text-xl mr-[6px]' />
           <span className='text-[#717171] text-nowrap'>{bed} Bedrooms</span>
         </div>
         <div className='flex items-center text-[13px] mr-[5px] lg:mr-[8px]'>
           <TbBath className='text-xl mr-[6px]' />
           <span className='text-[#717171] text-nowrap '>{bath} Bathrooms</span>
         </div>
         <div className='flex items-center text-[13px] mr-[5px] lg:mr-[8px]'>
           <IoIosExpand className='text-xl mr-[6px]' />
           <span className='text-[#717171] text-sm text-nowrap'>{space} sqft</span>
         </div>
       </div>
       <hr className="mt-2 bg-[#ddd]" />
       <div className='flex justify-between my-3'>
         <h4>
           {cate}
         </h4>
         <div>
           <span className='text-[#717171] font-semibold text-[13px]'>₹{price}</span>
           <span className='text-[#717171] font-semibold text-[13px]'>/mo</span>
         </div>
       </div>
     </div>
     </Link>
   </div>
   
     
  </>)
}

export default function Slidercom() {

  const [activeCategory, setActiveCategory] = useState('All');

const [isActive,setisActive] = useState(true)
const filterCards = (category) => {
  if (category === 'All') {
    return cardData; // Show all cards
  } else {
    return cardData.filter(item => item.cate === category);
  }
};

// Filtered cards based on active category
const filteredCards = filterCards(activeCategory);

  return (
    <>
      <div className="w-full px-[1rem] lg:px-[5rem] py-10">
        <div className="content flex justify-between items-center ">
   
  
          <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl my-2 sm:my-4 lg:my-6 text-[#181a20] font-semibold">
  Discover Popular Properties
</h2>
<p className="text-base sm:text-lg lg:text-xl">
  Aliquam lacinia diam quis lacus euismod
</p>


          </div>

          <div className='hidden lg:block'>
          {['All', 'House', 'Villa', 'Office', 'Apartment'].map((value, index) => (
        <button
          key={index}
          className={`px-4 py-[7px] mr-[10px] text-[18px] font-semibold text-black border-2 rounded-[6px] border-black ${activeCategory === value ? 'bg-black text-white' : ''}`}
          onClick={() => setActiveCategory(value)}
        >
          {value}
        </button>
      ))}

          </div>
         


        </div>

        <div className="cards-container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  lg:gap-4   mt-4 lg:mt-8 relative">



        

        {
          filteredCards.map((item,index) => (
            <Cards
                  img={item.img}
                  head={item.head}
                  add={item.add}
                  bed={item.bed}
                  bath={item.bath}
                  space={item.space}
                  price={item.price}
                  cate={item.cate}
                  flag={item.flag}
                  />
              
          ))
        }
          










          



        </div>

      </div>
    </>
  )
}
