'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './custom-swiper.css'; // Import custom CSS for Swiper
import Link from 'next/link'
const cardData = [
    {
      id: 0,
      title: 'Villa',
      imgsrc: '/images/g1-4.webp',
      subhead: '29 Property ',
      price: '$100'
    },
    {
      id: 1,
      title: 'House ',
      imgsrc: '/images/g1-2.webp',
      subhead: '26 Property ',
      price: '$200'
    },
    {
      id: 2,
      title: 'Apartemnt',
      imgsrc: '/images/g1-4.webp',
      subhead: '22 Property ',
      price: '$100'
    },
    {
      id: 3,
      title: 'Flats',
      imgsrc: '/images/g1-3.webp',
      subhead: '15 Property ',
      price: '$400'
    },
];

const Cards = ({ imgsrc, title, subhead }) => {
  return (
     
    
    <div className="bg-white w-[310px] lg:w-[350px] rounded-xl shadow-lg relative mb-5 overflow-hidden">
     <Link href={`/properties/${title}`} className="coursor-pointer">
   
      <div className="img-box">
        <Image src={imgsrc} className="w-full h-full" width={217} height={220} />
      </div>
      <div className="p-[20px]">
        <h5 className="pb-0 text-xl font-semibold">{title}</h5>
        <p>{subhead}</p>
      </div>
      </Link>
    </div>
  );
};

export default function Sliderpropertycate() {
  return (
    <div className="w-full px-[1rem] lg:px-[5rem] py-10">
      <div className="content">
        <h2 className="text-4xl my-2 text-[#181a20] font-semibold">
          Explore Apartment Types
        </h2>
        <p className="text-lg">
          Aliquam lacinia diam quis lacus euismod
        </p>
      </div>

      <div className="cards-container w-full p-4 lg:gap-5 lg:p-8 mt-8 relative">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="swiper-container"
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <Cards
                imgsrc={card.imgsrc}
                title={card.title}
                subhead={card.subhead}
                price={card.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
