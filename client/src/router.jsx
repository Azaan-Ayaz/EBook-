import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Writing from './Pages/services/writing'
import Contact from './Pages/contact'
import Cover from './Pages/services/cover'
import Formatting from './Pages/services/formatting'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services'>
        <Route path='writing' element={<Writing/>}/>
        <Route path='cover-designing' element={<Cover/>}/>
        <Route path='formatting' element={<Formatting/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default Router
