import React from 'react'
import './Software.css'
import SoftwareBox from './box/SoftwareBox'

function Software() {
  return (
    <div className='software'>
        <h2 className='software-title title-md'>What Our Software Can Do For You</h2>
        <div className='container software-item-container'>
            <div className='software-img-container'>
                <img src="./assets/images/undraw_referral_4ki4.svg" alt="Software-Image" className='software-img'/>
            </div>
            <div className='software-box-container'>
                <SoftwareBox title="Resposive Design" text="Even the all-powerful Pointing has no control about the blind texts"/>
                <SoftwareBox title="Andriod Apps Development" text="Even the all-powerful Pointing has no control about the blind texts"/>
                <SoftwareBox title="iOs Apps Development" text="Even the all-powerful Pointing has no control about the blind texts"/>
                <SoftwareBox title="UX/UI Design" text="Even the all-powerful Pointing has no control about the blind texts"/>
                <SoftwareBox title="Print Ready Design" text="Even the all-powerful Pointing has no control about the blind texts"/>
            </div>
        </div>
    </div>
  )
}

export default Software