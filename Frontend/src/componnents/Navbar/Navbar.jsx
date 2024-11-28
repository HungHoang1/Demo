import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({setShowLogin}) => {

  const [menu , setMenu] = useState("contact-us")


  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <button onClick={()=>setShowLogin(true)}>Đăng nhập</button>
      </div>
    </div>
  )
}

export default Navbar