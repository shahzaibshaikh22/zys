import React from 'react'
import { interships } from "../constaints/constaints"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';

import "swiper/css"
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaBriefcase, FaEdit, FaLanguage, FaUser, FaUserCog } from 'react-icons/fa';

const LatestIntern = () => {
    // const [items, setItems] = useState(interships);
    // const uniqueCategory = [...new Set(interships.map((cItem) =>cItem.category))];
    // const [category, setCategory] =useState(uniqueCategory)


    // const filterItem = (category) =>{
    //     const updatedItems =  interships.filter((curEl) => curEl.category === category)
    //     setItems(updatedItems);
    //   }

    const Btncatagory = [
        {
            id:1,
            title:"Accounting",
            icon:<FaUser/>,
            bg:"bg-violet-800",
            textcl:"text-white"
        },
        {
            id:2,
            title:"Marketing",
            icon:<FaBriefcase/>,
            bg:"bg-white",
            textcl:"text-violet-800"
        },
        {
            id:3,
            title:"Engineer",
            icon:<FaUserCog/>,
            bg:"bg-white",
            textcl:"text-violet-800"
        },
        {
            id:4,
            title:"Translation",
            icon:<FaLanguage/>,
            bg:"bg-white",
            textcl:"text-violet-800"
        },
        {
            id:5,
            title:"Graphics",
            icon:<FaEdit/>,
            bg:"bg-white",
            textcl:"text-violet-800"
        },

    ]

  return (
    <div className='w-full h-auto pt-12'>
    <h2 className='text-center text-4xl font-bold text-gray-800'>Latest Internships</h2>
    <div className='w-full max-w-[1400px] mx-auto py-8 px-1'>
        <div className='flex flex-wrap items-center h-auto gap-4 w-full max-w-3xl  mx-auto pt-1 pb-8'>
            {Btncatagory.map((elem)=>{
                return(
                    <button className={`${elem.bg} ${elem.textcl} border-2 py-2 border-gray-100 outline-none text-sm  rounded-md px-6 flex items-center justify-center gap-1`}>
                    <span className='text-xl'>{elem.icon}</span>
                    <p className='text-sm'>{elem.title}</p>
                    </button>
                )
            })}
        </div>
        <Swiper 
            className='w-full h-[33vh]'
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
            {interships.map((elem)=>{
                return(
                    <SwiperSlide key={elem.id} className='px-8'>
                        <div className='flex  flex-col gap-4 border-2 border-gray-200 p-2 rounded-md'>
                            <div className='flex items-center gap-4'>
                            <img className='w-14 h-14 bg-gray-100 rounded-md p-1' src="./images/google.png" alt="" />
                            <div className='flex flex-col '>
                                <h5 className='text-md font-semibold'>{elem.title}</h5>
                                <div className='flex items-center gap-2'>
                                    <span className='flex gap-1 text-gray-400 text-sm items-center'>
                                        {elem.jobIcon}
                                        {elem.company}
                                    </span>
                                    <span className='flex gap-1 text-gray-400 text-sm items-center'>
                                        {elem.durationIcon}
                                        {elem.job}
                                    </span>
                                    <span className='flex gap-1 text-gray-400 text-sm items-center'>
                                        {elem.duration}
                                    </span>
                                </div>
                            </div>
                            </div>
                            <div className='flex items-center gap-2'>
                            <span className='w-8 h-8 flex items-center justify-center text-white rounded-full bg-yellow-400 p-2'>{elem.coinIcon}</span>
                            <span>coins 10</span>
                            </div>
                            <div className='bg-gray-200 p-[1px]'></div>
                            <div className='flex items-center gap-4'>
                                <button className='outline-none bg-green-500 text-gray-800 px-4 py-1 rounded-md'>
                                    Apply Now
                                </button>
                                <button className='outline-none bg-white- text-gray-500 border-2 border-gray-200 px-4 py-1 rounded-md'>
                                    Apply Now
                                </button>
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

export default LatestIntern















