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
            <hr className=' border-none outline-none h-0.5 w-3/5 m-auto bg-[var(--primary-color)]  hidden'  />
            </NavLink >
            <NavLink to='/doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr  className=' border-none outline-none h-0.5 w-3/5 m-auto bg-[var(--primary-color)] hidden'/>
            </NavLink>
            <NavLink to='/about' >
            <li className='py-1'>ABOUT</li>
            <hr  className='  border-none outline-none h-0.5 w-3/5 m-auto bg-[var(--primary-color)] hidden'/>
            </NavLink>
            <NavLink to='/contact' >
            <li className='py-1'>CONTACT</li>
            <hr className=' border-none outline-none h-0.5 w-3/5 m-auto bg-[var(--primary-color)] hidden' />
            </NavLink>

        </ul>
        <div className='flex items-center gap-4'>
            {
                tokon
                ? <div className='flex items-center gap-4 cursor-pointer groupe relative' onClick={()=>{setShowMenu(!showMenu)}}>
                    <img src={assets.profile_pic} alt="" className=' rounded-full w-8 ' />
                    <img src={assets.dropdown_icon} alt="" className=' w-2.5 ' />
                    <div>
                        <div className=' border border-gray-200 absolute top-10 right-0 bg-white shadow-sm rounded-lg p-4 hidden md:block' style={{display: showMenu ? 'block' : 'none'}}>
                            <p onClick={()=>{goTo('my-profile')}} className='p-1 mb-2 text-black hover:text-[var(--primary-color)]'>My Profile</p>
                        
                            <p onClick={()=>{goTo('my-appointement')}} className='p-1 w-32 mb-2 text-black hover:text-[var(--primary-color)]'>My Appointement</p>
                        
                            <p onClick={()=>{setTokon(false)}} className='p-1 text-black hover:text-[var(--primary-color)]'>Log Out</p>
                        

                        </div>
                    </div>
                </div>
                : <button onClick={()=>{goTo("/login")}} className='  bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg font-normal transition-colors duration-300 hover:bg-[var(--hover-primary)] hidden md:block '>Create Account</button>
                
            }
        </div>

    </nav>
  )
}
