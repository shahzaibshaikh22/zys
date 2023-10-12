import React from 'react'
import Marquee from 'react-fast-marquee'
// import { rev } from "../constaints/constaints"
import { FaStar } from 'react-icons/fa'

const Review = () => {
  return (
    <div style={{overflowX:"hidden"}} className='w-full max-w-[1400px] mx-auto pt-10'>
        <h2 className='text-center text-4xl font-bold text-gray-800'>Browse Reviews</h2>
        <div className='flex gap-10 h-auto py-10'>
          <Marquee speed={100} direction='left'>
            <div className='flex flex-col gap-2 w-[300px] mx-10 rounded-md border-2 border-gray-200 p-2'>
              <div className='flex items-center gap-2'>
                <div className='w-14 h-14 '>
                  <img className='w-full h-full object-cover rounded-full ' src="./images/team7.jpg" alt="" />
                </div>
                <div>
                  <h4 className='text-md- font-semibold'>shahzaib</h4>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique sapiente deserunt asperiores aliquid deleniti odit quo ullam est ipsam aperiam corporis, at consectetur eum, ad debitis quod veniam voluptatem.</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-[300px] mx-10 rounded-md border-2 border-gray-200 p-2'>
              <div className='flex items-center gap-2'>
                <div className='w-14 h-14 '>
                  <img className='w-full h-full object-cover rounded-full ' src="./images/team7.jpg" alt="" />
                </div>
                <div>
                  <h4 className='text-md- font-semibold'>shahzaib</h4>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique sapiente deserunt asperiores aliquid deleniti odit quo ullam est ipsam aperiam corporis, at consectetur eum, ad debitis quod veniam voluptatem.</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-[300px] mx-10 rounded-md border-2 border-gray-200 p-2'>
              <div className='flex items-center gap-2'>
                <div className='w-14 h-14 '>
                  <img className='w-full h-full object-cover rounded-full ' src="./images/team7.jpg" alt="" />
                </div>
                <div>
                  <h4 className='text-md- font-semibold'>shahzaib</h4>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique sapiente deserunt asperiores aliquid deleniti odit quo ullam est ipsam aperiam corporis, at consectetur eum, ad debitis quod veniam voluptatem.</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-[300px] mx-10 rounded-md border-2 border-gray-200 p-2'>
              <div className='flex items-center gap-2'>
                <div className='w-14 h-14 '>
                  <img className='w-full h-full object-cover rounded-full ' src="./images/team7.jpg" alt="" />
                </div>
                <div>
                  <h4 className='text-md- font-semibold'>shahzaib</h4>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique sapiente deserunt asperiores aliquid deleniti odit quo ullam est ipsam aperiam corporis, at consectetur eum, ad debitis quod veniam voluptatem.</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-[300px]  rounded-md border-2 border-gray-200 p-2'>
              <div className='flex items-center gap-2'>
                <div className='w-14 h-14 '>
                  <img className='w-full h-full object-cover rounded-full ' src="./images/team7.jpg" alt="" />
                </div>
                <div>
                  <h4 className='text-md- font-semibold'>shahzaib</h4>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique sapiente deserunt asperiores aliquid deleniti odit quo ullam est ipsam aperiam corporis, at consectetur eum, ad debitis quod veniam voluptatem.</p>
              </div>
            </div>
            
          </Marquee>
        </div>
        <div className='flex gap-10 h-auto py-10'>
          <Marquee speed={100} direction='right'>
            <div className='flex flex-col gap-2 w-[300px] mx-10 rounded-md border-2 border-gray-200 p-2'>
              <div className='flex items-center gap-2'>
                <div className='w-14 h-14 '>
                  <img className='w-full h-full object-cover rounded-full ' src="./images/team7.jpg" alt="" />
                </div>
                <div>
                  <h4 className='text-md- font-semibold'>shahzaib</h4>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique sapiente deserunt asperiores aliquid deleniti odit quo ullam est ipsam aperiam corporis, at consectetur eum, ad debitis quod veniam voluptatem.</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-[300px] mx-10 rounded-md border-2 border-gray-200 p-2'>
              <div className='flex items-center gap-2'>
                <div className='w-14 h-14 '>
                  <img className='w-full h-full object-cover rounded-full ' src="./images/team7.jpg" alt="" />
                </div>
                <div>
                  <h4 className='text-md- font-semibold'>shahzaib</h4>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique sapiente deserunt asperiores aliquid deleniti odit quo ullam est ipsam aperiam corporis, at consectetur eum, ad debitis quod veniam voluptatem.</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-[300px] mx-10 rounded-md border-2 border-gray-200 p-2'>
              <div className='flex items-center gap-2'>
                <div className='w-14 h-14 '>
                  <img className='w-full h-full object-cover rounded-full ' src="./images/team7.jpg" alt="" />
                </div>
                <div>
                  <h4 className='text-md- font-semibold'>shahzaib</h4>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique sapiente deserunt asperiores aliquid deleniti odit quo ullam est ipsam aperiam corporis, at consectetur eum, ad debitis quod veniam voluptatem.</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-[300px] mx-10 rounded-md border-2 border-gray-200 p-2'>
              <div className='flex items-center gap-2'>
                <div className='w-14 h-14 '>
                  <img className='w-full h-full object-cover rounded-full ' src="./images/team7.jpg" alt="" />
                </div>
                <div>
                  <h4 className='text-md- font-semibold'>shahzaib</h4>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique sapiente deserunt asperiores aliquid deleniti odit quo ullam est ipsam aperiam corporis, at consectetur eum, ad debitis quod veniam voluptatem.</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-[300px]  rounded-md border-2 border-gray-200 p-2'>
              <div className='flex items-center gap-2'>
                <div className='w-14 h-14 '>
                  <img className='w-full h-full object-cover rounded-full ' src="./images/team7.jpg" alt="" />
                </div>
                <div>
                  <h4 className='text-md- font-semibold'>shahzaib</h4>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                    <FaStar className='text-green-500 text-md'/>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique sapiente deserunt asperiores aliquid deleniti odit quo ullam est ipsam aperiam corporis, at consectetur eum, ad debitis quod veniam voluptatem.</p>
              </div>
            </div>
            
          </Marquee>
        </div>
    </div>
  )
}

export default Review