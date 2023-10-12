import React,{useState} from 'react'
import { BsBell } from 'react-icons/bs'
import { FaBars, FaTimes }from 'react-icons/fa'



const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <nav className='w-full bg-white fixed top-0 left-0 right-0 z-50'>
        <div className='w-full max-w-[1400px] mx-auto bg-white px-4 py-2 flex items-center justify-between gap-3'>
            <div>
                <h2 className='text-2xl text-green-500 font-bold'>ED Review</h2>
            </div>
            <ul className='md:flex hidden items-center gap-6 '>
              <li className='text-md font-medium text-gray-700 cursor-pointer'>Companies</li>
              <li className='text-md font-medium text-gray-700 cursor-pointer'>Course</li>
              <li className='text-md font-medium text-gray-700 cursor-pointer'>Book a Demo</li>
              <li className='text-md font-medium text-gray-700 cursor-pointer'>Internship</li>
              <li>
                <BsBell size={20}/>
              </li>
              <li>
                <div className='w-10 h-10'>
                  <img className='w-full bg-white drop-shadow-sm border-2 border-green-500  h-full object-cover rounded-full' src="./images/team7.jpg" alt="user" />
                </div>
              </li>
              <li>
                <button className='bg-green-400 px-5 py-2 text-gray-800 font-semibold text-md rounded-md'>Post a Review</button>
              </li>
            </ul>
            <FaBars onClick={()=>setShowNav(true)}  className='lg:hidden block text-2xl text-green-600'/>
          {showNav ?(
              <div className={showNav? "w-full flex showNav items-center justify-center max-w-xs h-screen bg-white p-4": "w-full flex hideNav items-center justify-center max-w-xs h-screen bg-white p-4"}>
              <FaTimes onClick={()=>setShowNav(false)} className='absolute top-4 text-green-500 text-2xl right-4'/>
              <ul className='flex flex-col items-center gap-6 '>
              <li className='text-md font-medium text-gray-700 cursor-pointer'>Companies</li>
              <li className='text-md font-medium text-gray-700 cursor-pointer'>Course</li>
              <li className='text-md font-medium text-gray-700 cursor-pointer'>Book a Demo</li>
              <li className='text-md font-medium text-gray-700 cursor-pointer'>Internship</li>
              <li>
                <BsBell size={20}/>
              </li>
              <li>
                <div className='w-10 h-10'>
                  <img className='w-full bg-white drop-shadow-sm border-2 border-green-500  h-full object-cover rounded-full' src="./images/team7.jpg" alt="user" />
                </div>
              </li>
              <li>
                <button className='bg-green-400 px-5 py-2 text-gray-800 font-semibold text-md rounded-md'>Post a Review</button>
              </li>
            </ul>
            </div>
          ):null}
        </div>
    </nav>
  )
}

export default Navbar


// dark green #54B435
// light green #67E776
// purple #4E1D9A
// gray #EFEBF6