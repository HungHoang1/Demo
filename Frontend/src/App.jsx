import React, { useState } from 'react'
import Navbar from './componnents/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Footer from './componnents/Footer/Footer'
import LoginPopup from './componnents/LoginPopup/LoginPopup'

const App = () => {


  const [showLogin , setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin = {setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        < Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    <Footer/>

    </>
  )
}

export default App