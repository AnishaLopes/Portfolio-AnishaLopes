import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Anisha Lopes,</span></h1>
        <h2>Computer Science Engineer</h2>
        <p>Hands-on with Python, Java, and web development. Exploring cloud computing, databases, and blockchain with a focus on practical innovation.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume"><a className='resume-link' href={resume} target='_blank'>Resume</a></div>
        </div>
    </div>
  )
}

export default Hero