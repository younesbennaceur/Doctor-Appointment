import React from 'react'
import { assets, specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

export const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center py-16 text-gray-800 gap-6' id='speciality'>
        <h1 className='text-3xl font-medium'>Find by speciality</h1>
        <p className='sm:w-1/3 text-center text-sm '>Simply browse through our extensive list of trusted doctors,<br /> schedule your appointment hassle-free.</p>
        <div className='flex sm:justify-center gap-7 pt-5 w-full overflow-scroll'>
            {specialityData.map((item, index) => {
                return (
                    <Link className='flex flex-col items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] text-sm transition-all duration-500' to={`/doctors/${item.speciality}`} key={index}>
                        <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                        <p>{item.speciality}</p>

                    </Link>
                )
            })}
        </div>
    </div>
  )
}
