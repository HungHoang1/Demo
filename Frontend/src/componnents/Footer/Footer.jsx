import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Ẩm thực Hà Nội mang đậm hương vị truyền thống, với sự hài hòa tinh tế trong từng món ăn như phở, bún thang hay chả cá.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-right">
                <h2>Contact me</h2>
                <ul>
                    <li>Mobile : 0374341002</li>
                    <li>Mail : Hoanghung32163@gmail.com</li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Footer