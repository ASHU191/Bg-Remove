import React from 'react'
import HeroSection from '../HeroSection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Upload from '../Upload'
export default function Router() {
  return (
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<HeroSection/>}/>
        <Route  path='Upload' element={<Upload/>}/>

      </Routes>
      </BrowserRouter>
  )
}
