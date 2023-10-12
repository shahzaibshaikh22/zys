import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhone,  FaTwitterSquare, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer style={{backgroundColor:"#2C272E"}} className='w-full '>
        <div className='w-full max-w-[1400px] mx-auto py-10 lg:px-1 px-4'>
            <div className='w-full grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1   gap-10'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-green-600 text-2xl font-bold'>ED REVIEWS</h3>
                    <p className='text-white text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur modi, cum aliquid id possimus, expedita culpa eos a placeat eius accusantium ea architecto? Quidem repellendus illum facere explicabo id ipsa.
                    </p>
                </div>
                <div className='flex lg:items-center lg:justify-center'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-green-600 text-lg '>Company</h3>
                       <ul className='flex flex-col gap-3'>
                        <li className='text-white text-sm'>About</li>
                        <li className='text-white text-sm'>Home</li>
                        <li className='text-white text-sm'>Product</li>
                        <li className='text-white text-sm'>Pricing</li>
                        <li className='text-white text-sm'>Referal Program</li>
                        <li className='text-white text-sm'>Career</li>
                        <li className='text-white text-sm'>Press & Media</li>
                       </ul>
                </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-green-600 text-lg '>Support</h3>
                       <ul className='flex flex-col gap-3'>
                        <li className='text-white text-sm'>Support & Portal</li>
                        <li className='text-white text-sm'>List of Charges</li>
                        <li className='text-white text-sm'>Pricing</li>
                        <li className='text-white text-sm'>Download & Resourses </li>
                        <li className='text-white text-sm'>Videos</li>
                       </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-green-600 text-lg '>Contact Us</h3>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-2 items-center'>
                            <FaPhone className='text-green-500'/>
                            <p className='text-white text-sm'>+917542318</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaEnvelope className='text-green-500'/>
                            <p className='text-white text-sm'>zysoftec@gmail.com</p>
                        </div>
                        <div className='flex gap-2 '>
                            <FaLocationArrow className='text-green-500'/>
                            <p className='text-white text-sm'>strret 4 Sector 12 B Pakistan Hyderabad</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                <h3 className='text-green-600 text-lg '>Connect With Us</h3>
                <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-green-600'>
                        <FaFacebook className='text-white text-xl'/>
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-green-600'>
                        <BsLinkedin className='text-white text-xl'/>
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-green-600'>
                        <FaYoutube className='text-white text-xl'/>
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-green-600'>
                        <FaTwitterSquare className='text-white text-xl'/>
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-green-600'>
                        <FaInstagram className='text-white text-xl'/>
                    </div>

                </div>
                </div>
            </div>
        </div>
        <div className='w-full text-center flex gap-2 items-center justify-center pb-10'>
            <p className='text-white'>Design by</p>
            <p className='text-green-600'>Zysoftec</p>
            <p className='text-white'>Developed by</p>
            <p className='text-green-600'>Shahzaib</p>
        </div>
    </footer>
  )
}

export default Footer