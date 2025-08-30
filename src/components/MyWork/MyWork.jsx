import React from 'react'
import './MyWork.css'
import my_work from '../../assets/my_work'
import theme_pattern from '../../assets/theme_pattern.jpg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>Experience</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {my_work.map((work, index)=>{
                return <div key={index} className='work-format'>
                    <h2>{work.w_no}</h2>
                    <h1>{work.w_name}</h1>
                    <p>{work.w_des}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default MyWork