import React from 'react'
import {catagories} from "../constaints/constaints"

const CatagoriesSec = () => {
  return (
    <div className='w-full h-auto pt-12'>
        <h2 className='text-center text-4xl font-bold text-gray-800'>Explore Catagories</h2>
        <div className='w-full grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 max-w-[1400px] mx-auto px-4 py-8'>
            {catagories.map((elem)=>{
                return(
                    <div key={elem.id} className='flex hover:-translate-y-2 duration-150 ease-in-out p-4 flex-col items-center justify-center gap-4 bg-white border-2 border-gray-200 rounded-md'>
                        <div className='w-20 h-20 rounded-full flex items-center justify-center bg-violet-200'>
                         <span className='text-4xl text-violet-900'>{elem.icon}</span>
                        </div>
                         <h3 className='text-md font-semibold'>{elem.title}</h3>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CatagoriesSec