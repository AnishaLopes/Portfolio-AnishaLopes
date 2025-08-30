import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import mail_icon from '../../assets/mail_icon.jpg'
import phone_icon from '../../assets/phone_icon.jpg'
import location_icon from '../../assets/location-icon.jpg'

const Contact = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "78e710bc-9e39-41c3-b34a-f1a4ea5261ee");

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

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm always excited to discuss new opportunities, innovative projects, or collaborations. Whether you're looking for a dedicated developer, a reliable team member, or just want to connect, I'd love to hear from you.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>anishalopes05@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone_icon} alt="" /> <p>9483657024</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Mangaluru</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor="text">Your Email</label>
                <input type="text" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message...'></textarea>
                <button type='submit' className='contact-submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact