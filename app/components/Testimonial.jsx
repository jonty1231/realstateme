'use client'

import React from 'react';
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const testimonials = [
    {
        title: "Great Work",
        quote: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for .",
        rating: 5,
        name: "Leslie Alexander",
        company: "Nintendo",
        image: "/images/test-1.webp"
    },
    {
        title: "Excellent Service",
        quote: "The team provided excellent support and helped us achieve our goals with great efficiency.",
        rating: 5,
        name: "John Doe",
        company: "Sony",
        image: "/images/test-2.webp"
    },
    {
        title: "Highly Recommend",
        quote: "Their service was exceptional and the product quality exceeded our expectations.",
        rating: 5,
        name: "Anna Smith",
        company: "Microsoft",
        image: "/images/test-3.webp"
    },
    {
        title: "Fantastic Experience",
        quote: "Working with this team was a fantastic experience. Highly professional and responsive.",
        rating: 5,
        name: "David Brown",
        company: "Apple",
        image: "/images/test-4.webp"
    },
];

const Cards = ({ comment, title, star, img, name, subhead }) => {
    return (
        <div className='bg-white w-[400px] mx-2 relative rounded-lg shadow-xl p-4'>
            <div className='flex flex-col'>
                <h2 className='text-lg font-semibold my-2 text-[#181a20]'>
                    {title}
                </h2>
                <span className='absolute text-4xl top-5 opacity-[.4] text-red-300 right-12 '>
                    <RiDoubleQuotesL />
                </span>
                <p className='mt-2 text-md font-semibold py-2'>
                    {comment}
                </p>
                <div className='flex text-yellow-400 text-lg py-4 border-b border-[#ddd]'>
                    {[...Array(star)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
            </div>
            <div className='w-full my-4 flex'>
                <Image src={img} width={48} height={48} className="w-12 h-12 rounded-full" alt={name} />
                <div className='ml-4'>
                    <h2 className='font-semibold text-lg'>
                        {name}
                    </h2>
                    <p>
                        {subhead}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Testimonial() {
    return (
        <div className="w-full px-[1rem] lg:px-[5rem] py-10 ">
            <div className="content">
                <h2 className="text-4xl my-2 text-[#181a20] font-semibold">
                    People Love Living with Realton
                </h2>
                <p className="text-lg">
                    Aliquam lacinia diam quis lacus euismod
                </p>
            </div>
            <div className='w-full flex gap-3 mt-[40px]'>
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
                            spaceBetween: 5,
                        },
                    }}
                    className="swiper-container"
                >
                    {testimonials.map((data, index) => (
                        <SwiperSlide key={index}>
                            <Cards
                                img={data.image}
                                title={data.title}
                                name={data.name}
                                comment={data.quote}
                                subhead={data.company}
                                star={data.rating}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
