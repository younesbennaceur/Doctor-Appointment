import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/home'

export default function App() {
  return (
    <div className=' mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        


      </Routes>



    </div>
    
  )
}
