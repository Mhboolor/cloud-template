import React from 'react'
import './PricingBox.css'

function PricingBox() {
  return (
    <>
        <div className='pricing-box'>
            <p className='text-md price-text'>Basic Plan</p>
            <span className='title-xl price-number'><sup className='sup-sub'>$</sup>0<sub className='sup-sub'>/mo</sub></span>
            <p className='text-md price-text'>100% free. Forever</p>
            <p className='text-md enjoy'>ENJOY ALL THE FEATURES</p>
            <p className='text-md price-text'><span className='price-number'>150 GB </span>Bandwidth</p>
            <p className='text-md price-text'><span className='price-number'>100 GB </span>Storage</p>
            <p className='text-md price-text'><span className='price-number'>$1.00 / GB </span>Overages</p>
            <p className='text-md price-text'>All features</p>
            <button className='btn-pink-lg pricing-btn'>Choose Plan</button>
        </div>
    </>
  )
}

export default PricingBox