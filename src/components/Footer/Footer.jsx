import React from 'react'
import './Footer.css'
import github_icon from '../../assets/github_icon.jpg'
import linkedin_logo from '../../assets/linkedin_logo.jpg'
import resume from '../../assets/resume.pdf'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="top-left">
                <div className="image"><a href="https://github.com/AnishaLopes" target='_blank'><img src={github_icon} alt="" /></a></div>
                <div className="image"><a href="https://www.linkedin.com/in/anisha-lopes-b70b592a6/" target='_blank'><img src={linkedin_logo} alt="" /></a></div>
            </div>
            <div className="top-right">
                <div className="footer-resume"><a className='resume-link' href={resume} download={resume}>Download Resume</a></div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="bottom-left">&copy; Anisha Lopes. All Rights Reserved.</p>
            <div className="bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer