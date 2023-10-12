import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='w-full lg:h-screen h-auto lg:pt-0 pt-10 header overflow-y-hidden'>
        <div className='w-full h-full grid lg:grid-cols-2 max-w-[1400px] mx-auto px-4 pt-10'>
            <div className='flex flex-col justify-center gap-4'>
                <h1 className='text-white text-5xl font-bold line__height__5'>To be the best,<br />
                 <span className='text-green-500 py-4'>Choose the best</span>
                </h1>
                <p className='text-md text-white font-semibold '>Company review, Course review, Internship</p>
                <div className='flex flex-wrap  items-center gap-4'>
                <form className='flex  items-center gap-4 relative bg-white w-[400px] rounded-md py-1 px-4'>
                    <input className='bg-white w-full py-4 px-10' type="text" placeholder='Search by Course' />
                    <FaSearch className='absolute text-xl left-4 text-gray-400'/>
                    <select className='border-l-2 h-full text-lg border-gray-300 ' name="course" id="course">
                        <option defaultValue="Course" value="course1">Course </option>
                        <option value="course1">Course 1</option>
                        <option value="course1">Course 1</option>
                        <option value="course1">Course 1</option>
                    </select>
                </form>
                <button type='submit' className='py-4 px-5 bg-green-500 text-gray-800 rounded-md font-semibold'>Search</button>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img className='lg:w-[600px]' src="./images/girl.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header