import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import profile_img_2 from '../../assets/profile_img_2.jpg'

const About = () => {
  return (
    <div className='about'>
        <div id='about' className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img_2} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Pursuing B.E. in Computer Science at St. Joseph Engineering College, with a strong interest in technology and innovation. Focused on applying knowledge to solve real-world problems through practical solutions.</p>
                    <p>Trained as an NCC Cadet, demonstrating discipline, leadership, and teamwork that complement technical expertise and professional growth.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Python</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>HTML | CSS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>Academic Excellence</h1>
                <p>Maintaining a consistent CGPA while actively participating in extracurricular activities and leadership programs.</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>NCC Activities</h1>
                <p>Developed discipline, teamwork, and leadership skills through National Cadet Corps training and activities.</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>Innovation Focus</h1>
                <p>Passionate about emerging technologies like nanotechnology and their applications in solving complex problems.</p>
            </div>
        </div>
    </div>
  )
}

export default About