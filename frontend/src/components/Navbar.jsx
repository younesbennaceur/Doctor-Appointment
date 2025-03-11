import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router'
import { useState } from 'react'
export default function Navbar() {
    const navigate = useNavigate()
    const goTo = (path) => {
        navigate(path)
    }
    const [showMenu, setShowMenu] = useState(false);
    const [tokon, setTokon] = useState(true);

  return (
    

    <nav className='flex justify-between text-sm mb-5  items-center  border-b border-gray-200'>
    
        <img src={assets.logo} alt="" className=' w-24 cursor-pointer' />
        <ul className=' hidden md:flex font-medium justify-between gap-4'>
            <NavLink to='/' >
            <li  className='py-1'>HOME</li>
            <hr className=' border-none outline-none h-0.5 w-3/5 m-auto bg-blue-600  hidden'  />
            </NavLink >
            <NavLink to='/doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr  className=' border-none outline-none h-0.5 w-3/5 m-auto bg-blue-600 hidden'/>
            </NavLink>
            <NavLink to='/about' >
            <li className='py-1'>ABOUT</li>
            <hr  className=' border-none outline-none h-0.5 w-3/5 m-auto bg-blue-600 hidden'/>
            </NavLink>
            <NavLink to='/contact' >
            <li className='py-1'>CONTACT</li>
            <hr className=' border-none outline-none h-0.5 w-3/5 m-auto bg-blue-600 hidden' />
            </NavLink>

        </ul>
        <div className='flex items-center gap-4'>
            {
                tokon
                ? <div className='flex items-center gap-4 cursor-pointer groupe relative' onClick={()=>{setShowMenu(!showMenu)}}>
                    <img src={assets.profile_pic} alt="" className=' rounded-full w-8 ' />
                    <img src={assets.dropdown_icon} alt="" className=' w-2.5 ' />
                    <div>
                        <div>
                            <p>My Profile</p>
                            <p>My Appointement</p>
                            <p>Log Out</p>

                        </div>
                    </div>
                </div>
                : <button onClick={()=>{goTo("/login")}} className=' bg-blue-600 text-white px-6 py-3 rounded-xl font-normal hidden md:block '>Create Account</button>
                
            }
        </div>

    </nav>
  )
}
