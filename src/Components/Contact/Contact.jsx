import React, { useState } from 'react'
import "./contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import github_icon from "../../assets/github_icon.svg"


const Contact = () => {

  const initialFormState ={name: "", email: "", message: ""}
  const [formData, setFormData] = useState(initialFormState);

    // Handle input changes
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  

    formData.append("access_key", "bae17d76-4972-4ae1-a6d5-f8ab1599f4d3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    setFormData(initialFormState);

    if (res.success) {
      alert(res.message)
    }
    
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Whether it's a new website, an AI project, or just a tech chat, I'm here to listen and help. Reach out, and let's create something amazing together!</p>
            <div className="contact-details">

            <div  id='github' className="contact-detail">
                    <img className='github' src={github_icon} alt="" /> <a href="https://github.com/ehsaancode" target='_blank'>ehsaanCode</a>

                </div>
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <a href="mailto:mail.ehsaan@gmail.com" target='blank' >mail.ehsaan@gmail.com</a>

                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+91-7278969146</p>

                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Kolkata, India</p>

                </div>

            </div>
        </div>
        {/* <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your Name' name ='name' />
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder='Enter your Email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your Message'></textarea>
            <div>

            <button type='submit' className='contact-submit'>Submit Now</button>
            </div>
        </form> */}
        <form onSubmit={onSubmit} className="contact-right">
      <label>Your Name</label>
      <input
        type="text"
        required="true"
        placeholder="Enter your Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <label>Your Email</label>
      <input
        type="text"
        required="true"
        placeholder="Enter your Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <label>Write your message here</label>
      <textarea
        name="message"
        rows="8"
        required="true"
        placeholder="Enter your Message"
        value={formData.message}
        onChange={handleInputChange}
      ></textarea>
      <div>
        <button type="submit" className="contact-submit">
          Submit Now
        </button>
      </div>
    </form>
      </div>
    </div>
  )
}

export default Contact
