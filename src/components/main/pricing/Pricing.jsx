import React from 'react'
import './Pricing.css'
import PricingBox from './box/PricingBox'

function Pricing() {
  return (
    <div className='pricing'>
        <div className='pricing-title-container'>
            <h2 className='title-lg pricing-title'>Our Best Pricing</h2>
        </div>
        <div className='pricing-box-container'>
            <PricingBox/>
            <PricingBox/>
            <PricingBox/>
            <PricingBox/>
        </div>
    </div>
  )
}

export default Pricing