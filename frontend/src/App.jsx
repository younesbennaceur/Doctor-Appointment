import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/home'
import Login from './pages/Login'
import About from './pages/About'
import Doctors from './pages/Doctors'
import MyAppointement from './pages/MyAppointement'
import MyProfile from './pages/MyProfile'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className=' mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/doctors' element={<Doctors />} ></Route>
        <Route path='/doctors/:speciality' element={<Doctors />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/my-appointment' element={<MyAppointement />} ></Route>
        <Route path='/my-profile' element={<MyProfile />} ></Route>
        <Route path='/appointment/:doctId' element={<MyAppointement />} ></Route>
       


        


      </Routes>



    </div>
    
  )
}
