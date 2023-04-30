import React from 'react'
import './ServicesBox.css'

function ServicesBox({title , text}) {
  return (
    <>
        <div className='service-box'>
            <div className='service-icon-box'>
                <i class="fa-solid fa-database service-icon"></i>
            </div>
            <div className='service-text-box'>
                <h3 className='title-md service-box-title'>{title}</h3>
                <p className='text-md service-text'>{text}</p>
            </div>
        </div>
    </>
  )
}

export default ServicesBox