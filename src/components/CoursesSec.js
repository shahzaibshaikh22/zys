import React, { useState } from 'react'
import { Courses } from "../constaints/constaints"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';

import "swiper/css"
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaBriefcase, FaEdit, FaLanguage, FaStar, FaUser, FaUserCog } from 'react-icons/fa';

const CoursesSec = () => {


  return (
    <div className='w-full h-auto pt-12'>
    <h2 className='text-center text-4xl font-bold text-gray-800'>Courses We Offer</h2>
    <div className='w-full max-w-[1400px] mx-auto py-8 px-1'>
        <Swiper 
            className='w-full h-[30vh]'
            slidesPerView={3}
            spaceBetween={0}
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
              breakpoints={{
                200: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1600: {
                    slidesPerView: 3,
                    spaceBetween: 50,
          },
        }}
        >
            {Courses.map((elem)=>{
                return(
                    <SwiperSlide key={elem.id} className='px-8'>
                        <div className='flex  flex-col gap-4 border-2 border-gray-200 p-2 rounded-md'>
                            <div className='flex items-center gap-4'>
                            <img className='w-14 h-14 bg-gray-100 rounded-md p-1' src="./images/google.png" alt="" />
                            <div className='flex flex-col '>
                                <h5 className='text-md font-semibold'>{elem.title}</h5>
                                <span className='text-gray-400'>{elem.collage}</span>
                            </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-1 items-center'>
                                    <span className='text-gray-400'>{elem.icon}</span>
                                    <span className='text-gray-400'>{elem.location}</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-green-400'/>
                                        <span className='text-green-400'>4.9</span>
                                    </div>
                                    <span className='text-gray-400'>(478 reviews)</span>
                                </div>
                            </div>
                            <div className='bg-gray-200 p-[1px]'></div>
                            <div className='flex items-center justify-between gap-4'>
                                <span className='text-gray-400'>{elem.level}</span>
                                <span className='text-green-500'>view detail</span>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
</div>
  )
}

export default CoursesSec















{/* <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
    <span class="swiper-pagination-bullet" style="
    background: red;
    width: 40px;
    height: 10px;
"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span></div> */}