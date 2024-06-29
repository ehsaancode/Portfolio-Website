import React from 'react'
import "./footer.css"
import logo1 from "../../assets/logo1.svg"
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img className='logo' src={logo1} alt="" />
            <p>Thank you for visiting!</p>
        </div>
        {/* <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email for the newsletter'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div> */}
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
        © 2024 EhsaanCode. All rights reserved.
        </p>
      <div className="footer-bottom-right">
        {/* <p>Term of Services</p> */}
        {/* <p>Privacy Policy</p> */}
        {/* <p>Connect with me</p> */}
      </div>
      </div>
    </div>
  )
}

export default Footer
