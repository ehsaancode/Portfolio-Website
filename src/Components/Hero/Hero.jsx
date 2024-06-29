import React from 'react'
import "./hero.css"
// import profile_img from "../../assets/profile_img.svg"
import profile_img from "../../assets/photo2.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume from "../../assets/Resume.pdf"


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Ehsaan Mondal,</span> full stack developer based in India</h1>
      <p>I am a MERN stack developer from Kolkata, India with years of exprience in frontend and backend technologies. </p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink></div>
        <div className="hero-resume"> <a href={Resume} target='_blank'>Download Resume</a></div>
      </div>
    </div>
  )
}

export default Hero
