import React from 'react'
import Navbar from './componnents/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Footer from './componnents/Footer/Footer'

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        < Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    <Footer/>

    </>
  )
}

export default App