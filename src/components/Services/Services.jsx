import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import Services_data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon.png'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_data.map((service, index)=>{
                return <div key={index} className='services-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_des}</p>
                    <div className='services-readmore'>
                        <a href={service.s_link} target='_blank' className='s-readmore'><p>Read More</p></a>
                        <a href={service.s_link} target='_blank'><img src={arrow_icon} alt="" /></a>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services