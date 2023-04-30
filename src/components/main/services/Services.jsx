import React from 'react'
import './Services.css'
import ServicesBox from './box/ServicesBox'

function Services() {
  return (
    <div className='services'>
        <h2 className='title-lg service-title'>Cloud Services</h2>
        <div className='container services-container'>
            <ServicesBox title="Cloud databases" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."/>
            <ServicesBox title="Website Hosting" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."/>
            <ServicesBox title="File Storage" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."/>
            <ServicesBox title="Forex Trading" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."/>
            <ServicesBox title="File Backups" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."/>
            <ServicesBox title="Remote Desktop" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."/>
        </div>
    </div>
  )
}

export default Services