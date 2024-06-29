import React from 'react'
import "../About/about.css"
import theme_pattern from "../../assets/theme_pattern.svg"
// import photo from "../../assets/photo.jpg"


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">

        <div className="about-left">
          {/* <img src={photo} alt="" /> */}
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I'm a passionate and versatile full-stack web developer specializing in the MERN stack. With a keen eye for detail and a love for clean, efficient code, I bring creative digital solutions to life, tailored to meet the unique needs of each project.</p>
            <p>I also work with leading company in the field of artificial intelligence, contributing to the development of cutting-edge Large Language Models (LLMs). I  am always eager to learn and explore the latest web technologies and trends, continually expanding my skill set to deliver state-of-the-art solutions, my technical expertise includes...  </p>
          </div>

          <div className="about-skills">
            <div className="about-skill"> <p>JavaScript</p><hr style={{width:"70%"}}/> </div>
            <div className="about-skill"> <p>React js</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"> <p>Node js</p><hr style={{width:"75%"}}/></div>
            <div className="about-skill"> <p>Express js</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"> <p>MongoDB</p><hr style={{width:"55%"}}/></div>
            <div className="about-skill"><p>HTML/CSS</p><hr style={{width:"85%"}}/></div> 
          </div>

        <div className="about-achivements">
          <div className="about-achivement">
            <h1>4+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>30+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          {/* <hr /> */}
          {/* <div className="about-achivement">
            <h1>20+</h1>
            <p>PROJECT COMPLETED</p>
          </div> */}

        </div>
        </div>
      </div>
    </div>
  )
}

export default About
