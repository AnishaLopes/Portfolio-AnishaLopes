import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import my_education from '../../assets/my_education'

const Education = () => {
  return (
    <div id='edu' className='education'>
        <div className="edu-title">
            <h1>Education</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="myedu-container">
            {my_education.map((edu, index)=>{
                return <div key={index} className='edu-format'>
                    <h2>{edu.e_name}</h2>
                    <h1>{edu.e_time}</h1>
                    <p>{edu.e_marks}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Education