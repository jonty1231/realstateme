'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Bglessslider = () => {
  const sliderData = [
    {
      id: 1,
      imgSrc: '/images/bg_farm_1.webp',
      heading: '1RK Studio Apartment',
      subhead: "3 BHK Independent Floor | Land in Mullanpur, Chandigarh",
      price: "32 Lac to 4 Cr"
    },
    {
      id: 2,
      imgSrc: '/images/bg_socity_1.webp',
      heading: 'Independant Builder',
      subhead: "5 BHK Independent Floor | Land in Punchkula, Haryana",
      price: "15 Lac to 4 Cr"
    },
    {
      id: 3,
      imgSrc: '/images/build_room_2.webp',
      heading: 'Farm House',
      subhead: "7 BHK Independent Floor | Land in Ambala, Haryana",
      price: "20 Lac to 1.5 Cr"
    },
    {
      id: 4,
      imgSrc: '/images/room_3.webp',
      heading: 'Serviced Apartment',
      subhead: "10 BHK Independent Floor | Land in Ludhiana, Punjab",
      price: "25 Lac to 7 Cr"
    },
    {
      id: 5,
      imgSrc: '/images/bg_socity_1.webp',
      heading: 'Serviced Apartment',
      subhead: "10 BHK Independent Floor | Land in Ludhiana, Punjab",
      price: "25 Lac to 7 Cr"
    },
  ];

  const bgColors = [
    'bg-blue-100',
    'bg-green-100',
    'bg-cyan-100',
    'bg-orange-100',
    'bg-purple-100',
  ];

  const getRandomBgColor = () => {
    return bgColors[Math.floor(Math.random() * bgColors.length)];
  };

  return (
    <div className="px-8 lg:px-20 md:px-8 sm:px-8 mt-12 overflow-hidden">
      <div className="content">
        <h2 className="text-2xl font-bold text-gray-800 text-start">Apartments, Villas and more</h2>
        <p className="text-xl font-bold text-gray-500 text-start">in Chandigarh</p>
      </div>

      <div className="cards-container w-full p-4 lg:gap-5 lg:p-8  relative">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 10 },
          }}
          className="swiper-container"
        >
          {sliderData.map((slider) => (
            <SwiperSlide key={slider.id}>
              <div className="mx-2 my-2">
                <div className={`w-[280px] h-[300px] rounded-md relative mx-4 transition-transform duration-300 ease-in-out hover:shadow-xl overflow-hidden ${getRandomBgColor()}`}>
                  <div className="content px-12 py-8 z-10">
                    <h2 className="text-2xl text-start font-bold text-[#42526E]">
                      {slider.heading}
                    </h2>
                    <p className="text-sm text-[#8993A4] text-start mb-4">1,100+ Properties</p>
                  </div>
                  <div className="img absolute bottom-0 left-0 right-0 rounded-md transition-transform duration-300 ease-in-out hover:scale-110">
                    <img src={slider.imgSrc} width={200} height={200} className="w-full h-auto rounded-md" alt={slider.heading} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Bglessslider;
